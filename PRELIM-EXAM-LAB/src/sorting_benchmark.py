#!/usr/bin/env python3
"""
SORTING ALGORITHM BENCHMARK MANAGER - PRODUCTION GRADE
CS Design & Analysis of Algorithms - Prelim Lab Exam
Enhanced with real-time progress, robust error handling, and smart features
"""

import os
import sys
import csv
import time
import math
from datetime import datetime
from typing import List, Tuple, Dict, Any, Optional
from enum import Enum
from dataclasses import dataclass
import platform

# ============================================================================
# CONFIGURATION CONSTANTS - UPDATED FOR CURRENT FOLDER STRUCTURE
# ============================================================================

MAX_RECORDS = 100000
PROGRESS_UPDATE_FREQUENCY = 50
DISPLAY_RECORDS = 10

# Get the current directory where the script is running
if getattr(sys, 'frozen', False):
    # If running as executable
    CURRENT_DIR = os.path.dirname(sys.executable)
else:
    # If running as script
    CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))

# Adjust paths based on current folder structure
CSV_FILE_PATH = os.path.join(CURRENT_DIR, "..", "data", "generated_data.csv")
LOG_FILE_PATH = os.path.join(CURRENT_DIR, "..", "logs", "benchmark.log")

# Try alternative paths if the above doesn't work
if not os.path.exists(CSV_FILE_PATH):
    # Try current directory structure
    CSV_FILE_PATH = os.path.join(CURRENT_DIR, "data", "generated_data.csv")
    LOG_FILE_PATH = os.path.join(CURRENT_DIR, "logs", "benchmark.log")
    
    if not os.path.exists(CSV_FILE_PATH):
        # Try absolute path from current working directory
        CSV_FILE_PATH = os.path.join(os.getcwd(), "data", "generated_data.csv")
        LOG_FILE_PATH = os.path.join(os.getcwd(), "logs", "benchmark.log")

print(f"Looking for CSV at: {CSV_FILE_PATH}")
print(f"Looking for logs at: {LOG_FILE_PATH}")

# Progress bar appearance
PROGRESS_FILL = '='
PROGRESS_HEAD = '>'
PROGRESS_EMPTY = '-'

# ============================================================================
# CONSOLE UTILITIES WITH COLORS
# ============================================================================

class Colors:
    """ANSI color codes for cross-platform colored output"""
    # Format: \033[STYLE;COLORm
    
    # Styles
    RESET = '\033[0m'
    BOLD = '\033[1m'
    DIM = '\033[2m'
    
    # Colors
    RED = '\033[31m'
    GREEN = '\033[32m'
    YELLOW = '\033[33m'
    BLUE = '\033[34m'
    MAGENTA = '\033[35m'
    CYAN = '\033[36m'
    WHITE = '\033[37m'
    
    # Bright colors
    BRIGHT_RED = '\033[91m'
    BRIGHT_GREEN = '\033[92m'
    BRIGHT_YELLOW = '\033[93m'
    BRIGHT_BLUE = '\033[94m'
    BRIGHT_MAGENTA = '\033[95m'
    BRIGHT_CYAN = '\033[96m'
    BRIGHT_WHITE = '\033[97m'

class Console:
    """Cross-platform console utilities with colors"""
    
    @staticmethod
    def clear():
        """Clear the console screen - more robust implementation"""
        try:
            # First try using os.system
            if platform.system() == 'Windows':
                os.system('cls' if os.name == 'nt' else 'clear')
            else:
                os.system('clear')
        except:
            # If os.system fails, print newlines to simulate clearing
            print('\n' * 100)
    
    @staticmethod
    def set_color(color_code: str):
        """Set text color"""
        print(color_code, end='')
    
    @staticmethod
    def reset():
        """Reset to default colors"""
        print(Colors.RESET, end='')
    
    @staticmethod
    def print_color(text: str, color_code: str):
        """Print colored text"""
        print(f"{color_code}{text}{Colors.RESET}")
    
    @staticmethod
    def green(text: str):
        Console.print_color(text, Colors.BRIGHT_GREEN)
    
    @staticmethod
    def red(text: str):
        Console.print_color(text, Colors.BRIGHT_RED)
    
    @staticmethod
    def yellow(text: str):
        Console.print_color(text, Colors.BRIGHT_YELLOW)
    
    @staticmethod
    def blue(text: str):
        Console.print_color(text, Colors.BRIGHT_BLUE)
    
    @staticmethod
    def cyan(text: str):
        Console.print_color(text, Colors.BRIGHT_CYAN)
    
    @staticmethod
    def magenta(text: str):
        Console.print_color(text, Colors.BRIGHT_MAGENTA)
    
    @staticmethod
    def white(text: str):
        Console.print_color(text, Colors.BRIGHT_WHITE)

# ============================================================================
# DATA STRUCTURES
# ============================================================================

class SortColumn(Enum):
    ID = 1
    FIRST_NAME = 2
    LAST_NAME = 3

class SortAlgorithm(Enum):
    BUBBLE = 1
    INSERTION = 2
    MERGE = 3

@dataclass
class Record:
    """Represents a single record from the CSV file"""
    ID: int
    FirstName: str
    LastName: str
    
    @staticmethod
    def sanitize(text: str) -> str:
        """Sanitize string to remove problematic characters"""
        if not text:
            return ""
        
        # Remove control characters (except tab, newline, carriage return)
        result = ''.join(c for c in text if c.isprintable() or c in '\t\n\r')
        
        # Trim whitespace
        return result.strip()

# ============================================================================
# PROGRESS TRACKER
# ============================================================================

class ProgressTracker:
    """Tracks progress during sorting operations"""
    
    def __init__(self):
        self.current = 0
        self.total = 0
        self.comparisons = 0
        self.swaps = 0
        self.start_time = time.time()
    
    def reset(self):
        """Reset all counters"""
        self.current = 0
        self.comparisons = 0
        self.swaps = 0
        self.start_time = time.time()
    
    def set_total(self, total: int):
        self.total = total
    
    def increment(self):
        self.current += 1
    
    def increment_comparisons(self):
        self.comparisons += 1
    
    def increment_swaps(self):
        self.swaps += 1
    
    def set_current(self, current: int):
        self.current = current
    
    def get_progress(self) -> float:
        """Get progress percentage (0-100)"""
        if self.total == 0:
            return 0.0
        return (100.0 * self.current) / self.total
    
    def get_elapsed_time(self) -> float:
        """Get elapsed time in seconds"""
        return time.time() - self.start_time
    
    def get_estimated_time_remaining(self) -> float:
        """Get estimated time remaining in seconds"""
        if self.current == 0 or self.total == 0:
            return 0.0
        
        elapsed = self.get_elapsed_time()
        rate = self.current / elapsed
        remaining = self.total - self.current
        return remaining / rate if rate > 0 else 0.0
    
    def display_progress(self, label: str, bar_width: int = 50):
        """Display a progress bar with stats"""
        progress = self.get_progress()
        filled = int(bar_width * progress / 100.0)
        
        # Create progress bar
        bar = ''
        for i in range(bar_width):
            if i < filled:
                bar += PROGRESS_FILL
            elif i == filled and progress < 100.0:
                bar += f"{Colors.BRIGHT_YELLOW}{PROGRESS_HEAD}{Colors.BRIGHT_BLUE}"
            else:
                bar += PROGRESS_EMPTY
        
        # Build output
        output = f"\r  {Colors.BRIGHT_CYAN}{label:<18}{Colors.BRIGHT_BLUE} [{bar}] "
        
        # Add percentage
        if progress >= 100.0:
            output += f"{Colors.BRIGHT_GREEN}100.0% ✓"
        else:
            output += f"{Colors.BRIGHT_YELLOW}{progress:6.1f}%"
        
        # Add time info
        output += f"{Colors.RESET}  {self.get_elapsed_time():.2f}s"
        
        # Add ETA if applicable
        if 0.1 < progress < 99.9:
            eta = self.get_estimated_time_remaining()
            if eta < 3600:  # Only show if less than 1 hour
                output += f"  ETA: {eta:.1f}s"
        
        print(output, end='', flush=True)
    
    def finish_progress(self, label: str):
        """Complete progress bar"""
        self.current = self.total
        self.display_progress(label)
        print()

# ============================================================================
# DATASET LOADER WITH VALIDATION
# ============================================================================

class DatasetLoader:
    """Loads and validates dataset from CSV file"""
    
    def __init__(self, filepath: str):
        self.filepath = filepath
        self.dataset = []
    
    def file_exists(self, path: str) -> bool:
        """Check if file exists"""
        return os.path.exists(path)
    
    def load(self, progress: ProgressTracker) -> bool:
        """Load dataset from CSV file"""
        print(f"  Attempting to load from: {self.filepath}")
        
        if not self.file_exists(self.filepath):
            Console.red(f"  Error: File not found: {self.filepath}")
            Console.red("  Please ensure the CSV file exists in the data/ directory.")
            
            # Try to find the file
            print("\n  Searching for CSV file in nearby directories...")
            possible_paths = [
                os.path.join(os.getcwd(), "data", "generated_data.csv"),
                os.path.join(os.getcwd(), "..", "data", "generated_data.csv"),
                os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "data", "generated_data.csv"),
                os.path.join(os.path.dirname(os.path.abspath(__file__)), "data", "generated_data.csv"),
            ]
            
            for path in possible_paths:
                if os.path.exists(path):
                    print(f"  Found CSV at: {path}")
                    self.filepath = path
                    print(f"  Updated CSV path to: {self.filepath}")
                    break
            
            if not self.file_exists(self.filepath):
                return False
        
        try:
            with open(self.filepath, 'r', encoding='utf-8') as file:
                reader = csv.reader(file)
                self.dataset = []
                
                # Skip header
                try:
                    next(reader, None)
                except StopIteration:
                    Console.red("  Error: CSV file is empty")
                    return False
                
                line_number = 0
                valid_records = 0
                error_count = 0
                
                progress.set_total(MAX_RECORDS)
                
                for row in reader:
                    line_number += 1
                    
                    if valid_records >= MAX_RECORDS:
                        break
                    
                    # Update progress every 1000 records
                    if line_number % 1000 == 0:
                        progress.set_current(valid_records)
                        progress.display_progress("Loading CSV")
                    
                    # Validate row has enough columns
                    if len(row) < 3:
                        error_count += 1
                        continue
                    
                    id_str, first_name, last_name = row[0], row[1], row[2] if len(row) > 2 else ""
                    
                    try:
                        record_id = int(id_str)
                        
                        # Create and validate record
                        record = Record(
                            ID=record_id,
                            FirstName=Record.sanitize(first_name),
                            LastName=Record.sanitize(last_name)
                        )
                        
                        if record.ID > 0 and record.FirstName:
                            self.dataset.append(record)
                            valid_records += 1
                        else:
                            error_count += 1
                            
                    except ValueError:
                        error_count += 1
                
                progress.set_current(valid_records)
                progress.finish_progress("Loading CSV")
                
                if error_count > 0:
                    Console.yellow(f"  Warning: Skipped {error_count} invalid records")
                
                Console.green(f"  Successfully loaded {valid_records} valid records")
                return valid_records > 0
                
        except Exception as e:
            Console.red(f"  Error loading CSV: {e}")
            return False
    
    def get_data(self, num_records: int) -> List[Record]:
        """Get specified number of records from dataset"""
        count = min(num_records, len(self.dataset))
        return self.dataset[:count]
    
    def get_size(self) -> int:
        """Get total number of loaded records"""
        return len(self.dataset)

# ============================================================================
# SORTING ALGORITHMS (IMPLEMENTED FROM SCRATCH)
# ============================================================================

class Sorter:
    """Implements sorting algorithms with progress tracking"""
    
    def __init__(self, column: SortColumn, progress: ProgressTracker):
        self.column = column
        self.progress = progress
        self.cancelled = False
    
    def compare(self, a: Record, b: Record) -> bool:
        """Compare two records based on selected column"""
        self.progress.increment_comparisons()
        
        if self.column == SortColumn.ID:
            return a.ID < b.ID
        elif self.column == SortColumn.FIRST_NAME:
            return a.FirstName < b.FirstName
        elif self.column == SortColumn.LAST_NAME:
            return a.LastName < b.LastName
        
        return False
    
    def record_swap(self):
        """Record a swap operation"""
        self.progress.increment_swaps()
    
    def show_controls(self):
        """Display sorting controls"""
        Console.cyan("  ╔════════════════════════════════════════╗")
        Console.cyan("  ║        CONTROLS DURING SORTING         ║")
        Console.cyan("  ╠════════════════════════════════════════╣")
        Console.cyan("  ║  Ctrl+C: Cancel operation              ║")
        Console.cyan("  ╚════════════════════════════════════════╝")
        print()
    
    def bubble_sort(self, data: List[Record]):
        """Bubble Sort implementation - O(n²)"""
        n = len(data)
        if n <= 1:
            return
        
        # Calculate total operations
        total_ops = (n * (n - 1)) // 2
        self.progress.set_total(total_ops)
        self.progress.reset()
        
        # Show controls
        self.show_controls()
        
        current_op = 0
        
        for i in range(n - 1):
            if self.cancelled:
                break
            
            swapped = False
            
            for j in range(n - i - 1):
                if self.cancelled:
                    break
                
                current_op += 1
                
                if self.compare(data[j + 1], data[j]):
                    data[j], data[j + 1] = data[j + 1], data[j]
                    self.record_swap()
                    swapped = True
                
                # Update progress
                if current_op % PROGRESS_UPDATE_FREQUENCY == 0:
                    self.progress.set_current(current_op)
                    self.progress.display_progress("Bubble Sort")
            
            # Early termination if no swaps
            if not swapped:
                self.progress.set_current(total_ops)
                break
        
        self.progress.finish_progress("Bubble Sort")
    
    def insertion_sort(self, data: List[Record]):
        """Insertion Sort implementation - O(n²)"""
        n = len(data)
        if n <= 1:
            return
        
        # Estimate operations (average case)
        total_ops = (n * (n - 1)) // 4
        self.progress.set_total(total_ops)
        self.progress.reset()
        
        # Show controls
        self.show_controls()
        
        current_op = 0
        
        for i in range(1, n):
            if self.cancelled:
                break
            
            key = data[i]
            j = i - 1
            
            while j >= 0 and self.compare(key, data[j]):
                data[j + 1] = data[j]
                self.record_swap()
                j -= 1
                current_op += 1
                
                if current_op % PROGRESS_UPDATE_FREQUENCY == 0:
                    self.progress.set_current(min(current_op, total_ops))
                    self.progress.display_progress("Insertion Sort")
            
            data[j + 1] = key
            
            # Update progress per outer iteration
            if i % 100 == 0:
                self.progress.set_current(min(current_op, total_ops))
                self.progress.display_progress("Insertion Sort")
        
        self.progress.finish_progress("Insertion Sort")
    
    def merge_sort(self, data: List[Record]):
        """Merge Sort implementation - O(n log n)"""
        n = len(data)
        if n <= 1:
            return
        
        # Calculate total operations: n * log2(n)
        total_ops = int(n * math.log2(n))
        self.progress.set_total(total_ops)
        self.progress.reset()
        
        # Show controls
        self.show_controls()
        
        self._merge_sort_recursive(data, 0, n - 1)
        self.progress.finish_progress("Merge Sort")
    
    def _merge_sort_recursive(self, data: List[Record], left: int, right: int):
        """Recursive helper for merge sort"""
        if left >= right or self.cancelled:
            return
        
        mid = left + (right - left) // 2
        
        self._merge_sort_recursive(data, left, mid)
        self._merge_sort_recursive(data, mid + 1, right)
        
        self._merge(data, left, mid, right)
        
        # Update progress
        self.progress.increment()
        if self.progress.current % 10 == 0:
            self.progress.display_progress("Merge Sort")
    
    def _merge(self, data: List[Record], left: int, mid: int, right: int):
        """Merge two sorted subarrays"""
        n1 = mid - left + 1
        n2 = right - mid
        
        L = data[left:mid + 1]
        R = data[mid + 1:right + 1]
        
        i = j = 0
        k = left
        
        while i < n1 and j < n2:
            if self.compare(L[i], R[j]):
                data[k] = L[i]
                i += 1
            else:
                data[k] = R[j]
                j += 1
            self.record_swap()
            k += 1
        
        while i < n1:
            data[k] = L[i]
            i += 1
            self.record_swap()
            k += 1
        
        while j < n2:
            data[k] = R[j]
            j += 1
            self.record_swap()
            k += 1

# ============================================================================
# BENCHMARK RESULT STORAGE
# ============================================================================

@dataclass
class BenchmarkResult:
    """Stores results of a benchmark run"""
    algorithm_name: str
    algorithm: SortAlgorithm
    column: SortColumn
    num_records: int
    load_time: float
    sort_time: float
    comparisons: int
    swaps: int
    completed: bool

# ============================================================================
# MAIN APPLICATION
# ============================================================================

class BenchmarkApp:
    """Main application class for running benchmarks"""
    
    def __init__(self, csv_path: str, log_path: str):
        self.loader = DatasetLoader(csv_path)
        self.LOG_FILE_PATH = log_path
        self.history = []
    
    def get_algorithm_name(self, algo: SortAlgorithm) -> str:
        """Get display name for algorithm"""
        names = {
            SortAlgorithm.BUBBLE: "Bubble Sort",
            SortAlgorithm.INSERTION: "Insertion Sort",
            SortAlgorithm.MERGE: "Merge Sort"
        }
        return names.get(algo, "Unknown")
    
    def get_column_name(self, col: SortColumn) -> str:
        """Get display name for column"""
        names = {
            SortColumn.ID: "ID",
            SortColumn.FIRST_NAME: "First Name",
            SortColumn.LAST_NAME: "Last Name"
        }
        return names.get(col, "Unknown")
    
    def print_header(self, title: str):
        """Print formatted header"""
        Console.cyan(f"\n  {'=' * 70}")
        Console.cyan(f"  {title}")
        Console.cyan(f"  {'=' * 70}")
    
    def print_separator(self):
        """Print separator line"""
        print(f"  {'-' * 70}")
    
    def display_results(self, data: List[Record], sorted_by: str):
        """Display first N sorted records"""
        print()
        Console.green(f"  First {min(DISPLAY_RECORDS, len(data))} records (sorted by {sorted_by}):")
        self.print_separator()
        
        Console.yellow(f"  {'ID':<8} {'First Name':<25} {'Last Name':<25}")
        self.print_separator()
        
        for i in range(min(DISPLAY_RECORDS, len(data))):
            print(f"  {data[i].ID:<8} {data[i].FirstName:<25} {data[i].LastName:<25}")
        
        self.print_separator()
    
    def log_result(self, result: BenchmarkResult):
        """Log benchmark result to file"""
        # Create logs directory if it doesn't exist
        log_dir = os.path.dirname(self.LOG_FILE_PATH)
        if log_dir and not os.path.exists(log_dir):
            os.makedirs(log_dir)
        
        with open(self.LOG_FILE_PATH, 'a', encoding='utf-8') as log_file:
            timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            
            log_file.write("=" * 40 + "\n")
            log_file.write(f"Timestamp: {timestamp}\n")
            log_file.write(f"Algorithm: {result.algorithm_name}\n")
            log_file.write(f"Column: {self.get_column_name(result.column)}\n")
            log_file.write(f"Records: {result.num_records}\n")
            log_file.write(f"Load Time: {result.load_time:.3f}s\n")
            log_file.write(f"Sort Time: {result.sort_time:.3f}s\n")
            log_file.write(f"Total Time: {result.load_time + result.sort_time:.3f}s\n")
            log_file.write(f"Comparisons: {result.comparisons}\n")
            log_file.write(f"Swaps: {result.swaps}\n")
            log_file.write(f"Completed: {'Yes' if result.completed else 'No'}\n")
            log_file.write("=" * 40 + "\n\n")
    
    def validate_input(self, prompt: str, min_val: int, max_val: int) -> int:
        """Validate and get integer input from user"""
        while True:
            try:
                value = input(prompt)
                if not value:
                    raise ValueError("Input cannot be empty")
                
                num = int(value)
                if min_val <= num <= max_val:
                    return num
                else:
                    Console.red(f"  Error: Value must be between {min_val} and {max_val}")
            except ValueError as e:
                Console.red(f"  Error: {e}. Please enter a valid number.")
    
    def wait_for_enter(self):
        """Wait for user to press Enter"""
        Console.yellow("\n  Press Enter to continue...")
        input()
    
    def run(self):
        """Main application loop"""
        while True:
            Console.clear()
            self.print_header("SORTING ALGORITHM BENCHMARK MANAGER")
            
            Console.cyan("  Professional Benchmarking Tool for Algorithm Analysis")
            print()
            
            print("  1. Run Single Benchmark")
            print("  2. Run Comparison Benchmark (All Algorithms)")
            print("  3. View Benchmark History")
            print("  4. Algorithm Information")
            print("  5. Exit")
            print()
            
            choice = self.validate_input("  Select option (1-5): ", 1, 5)
            
            if choice == 1:
                self.run_single_benchmark()
            elif choice == 2:
                self.run_comparison_benchmark()
            elif choice == 3:
                self.view_history()
            elif choice == 4:
                self.show_algorithm_info()
            elif choice == 5:
                return
    
    def run_single_benchmark(self):
        """Run benchmark for a single algorithm"""
        Console.clear()
        self.print_header("SINGLE ALGORITHM BENCHMARK")
        
        # Load dataset
        print()
        load_progress = ProgressTracker()
        if not self.loader.load(load_progress):
            self.wait_for_enter()
            return
        
        print()
        print("  Select Algorithm:")
        print("  1. Bubble Sort    (O(n²))")
        print("  2. Insertion Sort (O(n²))")
        print("  3. Merge Sort     (O(n log n))")
        print()
        
        algo_choice = self.validate_input("  Select algorithm (1-3): ", 1, 3)
        
        if algo_choice == 1:
            algo = SortAlgorithm.BUBBLE
        elif algo_choice == 2:
            algo = SortAlgorithm.INSERTION
        else:
            algo = SortAlgorithm.MERGE
        
        print()
        print("  Select Column to Sort:")
        print("  1. ID (Integer)")
        print("  2. First Name (String)")
        print("  3. Last Name (String)")
        print()
        
        col_choice = self.validate_input("  Select column (1-3): ", 1, 3)
        
        if col_choice == 1:
            column = SortColumn.ID
        elif col_choice == 2:
            column = SortColumn.FIRST_NAME
        else:
            column = SortColumn.LAST_NAME
        
        print()
        print("  Select Number of Records:")
        print("  1. 1,000 (Quick Benchmark)")
        print("  2. 10,000 (Standard Test)")
        print("  3. 100,000 (Full Dataset)")
        print("  4. Custom Value")
        print()
        
        preset_choice = self.validate_input("  Select option (1-4): ", 1, 4)
        
        if preset_choice == 1:
            num_records = 1000
        elif preset_choice == 2:
            num_records = 10000
        elif preset_choice == 3:
            num_records = 100000
        else:
            num_records = self.validate_input(
                f"  Enter custom number (1-{self.loader.get_size()}): ",
                1, self.loader.get_size()
            )
        
        # ENHANCED WARNING FOR LARGE DATASETS WITH O(n²) ALGORITHMS
        if num_records == 100000 and algo in [SortAlgorithm.BUBBLE, SortAlgorithm.INSERTION]:
            print()
            Console.red("╔══════════════════════════════════════════════════════════════════╗")
            Console.red("║                    ⚠  CRITICAL WARNING  ⚠                        ║")
            Console.red("╠══════════════════════════════════════════════════════════════════╣")
            Console.red("║  Sorting 100,000 rows with O(n²) algorithms will take a VERY     ║")
            Console.red("║  LONG TIME!                                                      ║")
            Console.red("║                                                                  ║")
            if algo == SortAlgorithm.BUBBLE:
                Console.red("║  Estimated time for Bubble Sort:    2-3 HOURS                    ║")
            else:
                Console.red("║  Estimated time for Insertion Sort: 1-2 HOURS                    ║")
            Console.red("║                                                                  ║")
            Console.red("║  Recommendation: Use Merge Sort (O(n log n)) instead, which will ║")
            Console.red("║  complete in milliseconds.                                       ║")
            Console.red("╚══════════════════════════════════════════════════════════════════╝")
            print()
            
            Console.cyan("  Do you want to:")
            print("  1. Continue with this algorithm anyway (not recommended)")
            print("  2. Switch to Merge Sort")
            print("  3. Cancel and return to main menu")
            print()
            
            warning_choice = self.validate_input("  Select option (1-3): ", 1, 3)
            
            if warning_choice == 2:
                algo = SortAlgorithm.MERGE
                Console.green("  Switched to Merge Sort (O(n log n))")
            elif warning_choice == 3:
                return
            # If choice 1, continue with the selected algorithm
        
        # Standard warning for other large datasets
        elif num_records > 10000 and algo in [SortAlgorithm.BUBBLE, SortAlgorithm.INSERTION]:
            print()
            Console.red(f"  ⚠ WARNING: Sorting {num_records} records with {self.get_algorithm_name(algo)} may take a long time!")
            Console.yellow("  Estimated time: ", end="")
            if num_records >= 50000:
                print("several minutes to hours")
            elif num_records >= 20000:
                print("1-5 minutes")
            else:
                print("10-60 seconds")
            print()
            Console.cyan("  Do you want to continue? (y/n): ", end="")
            
            confirm = input().strip().lower()
            if confirm not in ['y', 'yes']:
                return
        
        # Execute benchmark
        print()
        self.print_separator()
        print()
        
        start_load = time.time()
        data = self.loader.get_data(num_records)
        end_load = time.time()
        load_time = end_load - start_load
        
        Console.green(f"  Data loaded: {len(data)} records in {load_time:.3f}s")
        print()
        
        sort_progress = ProgressTracker()
        sorter = Sorter(column, sort_progress)
        
        start_sort = time.time()
        
        try:
            if algo == SortAlgorithm.BUBBLE:
                sorter.bubble_sort(data)
            elif algo == SortAlgorithm.INSERTION:
                sorter.insertion_sort(data)
            elif algo == SortAlgorithm.MERGE:
                sorter.merge_sort(data)
        except KeyboardInterrupt:
            Console.red("\n  Operation cancelled by user!")
            sorter.cancelled = True
        
        end_sort = time.time()
        sort_time = end_sort - start_sort
        
        # Display results
        print()
        if not sorter.cancelled:
            Console.green("  ✓ Sorting completed successfully!")
        else:
            Console.yellow("  ⚠ Sorting interrupted")
        
        print()
        self.print_separator()
        Console.cyan("  PERFORMANCE METRICS:")
        self.print_separator()
        print(f"  Algorithm:     {self.get_algorithm_name(algo)}")
        print(f"  Column:        {self.get_column_name(column)}")
        print(f"  Records:       {num_records}")
        print(f"  Load Time:     {load_time:.3f}s")
        print(f"  Sort Time:     {sort_time:.3f}s")
        print(f"  Total Time:    {load_time + sort_time:.3f}s")
        print(f"  Comparisons:   {sort_progress.comparisons}")
        print(f"  Swaps:         {sort_progress.swaps}")
        self.print_separator()
        
        # Display sample results
        if not sorter.cancelled:
            self.display_results(data, self.get_column_name(column))
        
        # Save to history
        result = BenchmarkResult(
            algorithm_name=self.get_algorithm_name(algo),
            algorithm=algo,
            column=column,
            num_records=num_records,
            load_time=load_time,
            sort_time=sort_time,
            comparisons=sort_progress.comparisons,
            swaps=sort_progress.swaps,
            completed=not sorter.cancelled
        )
        
        self.history.append(result)
        self.log_result(result)
        
        self.wait_for_enter()
    
    def run_comparison_benchmark(self):
        """Run benchmark comparing all algorithms"""
        Console.clear()
        self.print_header("COMPARISON BENCHMARK - ALL ALGORITHMS")
        
        # Load dataset
        print()
        load_progress = ProgressTracker()
        if not self.loader.load(load_progress):
            self.wait_for_enter()
            return
        
        print()
        print("  Select Column to Sort:")
        print("  1. ID (Integer)")
        print("  2. First Name (String)")
        print("  3. Last Name (String)")
        print()
        
        col_choice = self.validate_input("  Select column (1-3): ", 1, 3)
        
        if col_choice == 1:
            column = SortColumn.ID
        elif col_choice == 2:
            column = SortColumn.FIRST_NAME
        else:
            column = SortColumn.LAST_NAME
        
        print()
        print("  Select Number of Records:")
        print("  1. 1,000 (Quick Benchmark)")
        print("  2. 10,000 (Standard Test)")
        print("  3. 100,000 (Full Dataset)")
        print("  4. Custom Value")
        print()
        
        preset_choice = self.validate_input("  Select option (1-4): ", 1, 4)
        
        if preset_choice == 1:
            num_records = 1000
        elif preset_choice == 2:
            num_records = 10000
        elif preset_choice == 3:
            num_records = 100000
        else:
            num_records = self.validate_input(
                f"  Enter custom number (1-{self.loader.get_size()}): ",
                1, self.loader.get_size()
            )
        
        # ENHANCED WARNING FOR O(n²) WITH 100,000 RECORDS
        if num_records == 100000:
            print()
            Console.red("╔══════════════════════════════════════════════════════════════════╗")
            Console.red("║                    ⚠  CRITICAL WARNING  ⚠                        ║")
            Console.red("╠══════════════════════════════════════════════════════════════════╣")
            Console.red("║  Running comparison with 100,000 records:                        ║")
            Console.red("║                                                                  ║")
            Console.red("║  • Bubble Sort:    2-3 HOURS (estimated)                         ║")
            Console.red("║  • Insertion Sort: 1-2 HOURS (estimated)                         ║")
            Console.red("║  • Merge Sort:     < 1 SECOND (estimated)                        ║")
            Console.red("║                                                                  ║")
            Console.red("║  This will demonstrate why O(n²) is impractical for large data,  ║")
            Console.red("║  but will take a VERY LONG TIME to complete.                     ║")
            Console.red("╚══════════════════════════════════════════════════════════════════╝")
            print()
            
            Console.cyan("  Do you want to:")
            print("  1. Continue with full comparison (educational but time-consuming)")
            print("  2. Use only Merge Sort for demonstration")
            print("  3. Reduce dataset to 10,000 records")
            print("  4. Cancel and return to main menu")
            print()
            
            warning_choice = self.validate_input("  Select option (1-4): ", 1, 4)
            
            if warning_choice == 2:
                # Run only Merge Sort
                self.run_single_benchmark_for_comparison(column, num_records, [SortAlgorithm.MERGE])
                return
            elif warning_choice == 3:
                num_records = 10000
                Console.green(f"  Dataset reduced to {num_records} records")
            elif warning_choice == 4:
                return
            # If choice 1, continue with all algorithms
        
        # Standard warning for other large datasets
        elif num_records > 10000:
            print()
            Console.yellow(f"  ⚠ Note: O(n²) algorithms (Bubble, Insertion) may be slow with {num_records} records.")
            Console.yellow("  Recommended: Use <= 10,000 records for comparison benchmarks.")
            print("\n  Continue anyway? (y/n): ", end="")
            
            confirm = input().strip().lower()
            if confirm not in ['y', 'yes']:
                return
        
        # Run all three algorithms
        print()
        self.print_separator()
        print()
        Console.cyan("  Running comparison benchmark...")
        print()
        
        results = []
        algorithms = [SortAlgorithm.BUBBLE, SortAlgorithm.INSERTION, SortAlgorithm.MERGE]
        
        for algo in algorithms:
            # Load fresh data for each algorithm
            start_load = time.time()
            data = self.loader.get_data(num_records)
            end_load = time.time()
            load_time = end_load - start_load
            
            # Sort
            sort_progress = ProgressTracker()
            sorter = Sorter(column, sort_progress)
            
            start_sort = time.time()
            
            try:
                if algo == SortAlgorithm.BUBBLE:
                    sorter.bubble_sort(data)
                elif algo == SortAlgorithm.INSERTION:
                    sorter.insertion_sort(data)
                elif algo == SortAlgorithm.MERGE:
                    sorter.merge_sort(data)
            except KeyboardInterrupt:
                Console.red("\n  Operation cancelled!")
                sorter.cancelled = True
            
            end_sort = time.time()
            sort_time = end_sort - start_sort
            
            # Store result
            result = BenchmarkResult(
                algorithm_name=self.get_algorithm_name(algo),
                algorithm=algo,
                column=column,
                num_records=num_records,
                load_time=load_time,
                sort_time=sort_time,
                comparisons=sort_progress.comparisons,
                swaps=sort_progress.swaps,
                completed=not sorter.cancelled
            )
            
            results.append(result)
            self.history.append(result)
            self.log_result(result)
            
            print()
        
        # Display comparison table
        print()
        self.print_header("BENCHMARK COMPARISON RESULTS")
        print()
        
        Console.cyan(f"  Dataset: {num_records} records, sorted by {self.get_column_name(column)}")
        self.print_separator()
        
        Console.yellow(f"  {'Algorithm':<15} {'Load Time':<12} {'Sort Time':<12} {'Total Time':<12} {'Comparisons':<15} {'Swaps':<12}")
        self.print_separator()
        
        for result in results:
            print(f"  {result.algorithm_name:<15} {result.load_time:<12.3f}s {result.sort_time:<12.3f}s "
                  f"{result.load_time + result.sort_time:<12.3f}s {result.comparisons:<15} {result.swaps:<12}")
        
        self.print_separator()
        
        # Analysis
        print()
        Console.cyan("  COMPLEXITY ANALYSIS:")
        Console.reset()
        print("  • Bubble Sort:    O(n²)     - Quadratic growth")
        print("  • Insertion Sort: O(n²)     - Quadratic, better constants")
        print("  • Merge Sort:     O(n log n) - Linearithmic, optimal")
        
        if num_records >= 1000:
            print()
            Console.green("  Note: Observe how Merge Sort's O(n log n) significantly")
            Console.green("  outperforms O(n²) algorithms as dataset size increases.")
            Console.reset()
        
        self.wait_for_enter()
    
    def run_single_benchmark_for_comparison(self, column: SortColumn, num_records: int, algorithms: List[SortAlgorithm]):
        """Helper method to run specific algorithms for comparison"""
        results = []
        
        for algo in algorithms:
            # Load fresh data for each algorithm
            start_load = time.time()
            data = self.loader.get_data(num_records)
            end_load = time.time()
            load_time = end_load - start_load
            
            # Sort
            sort_progress = ProgressTracker()
            sorter = Sorter(column, sort_progress)
            
            start_sort = time.time()
            
            try:
                if algo == SortAlgorithm.BUBBLE:
                    sorter.bubble_sort(data)
                elif algo == SortAlgorithm.INSERTION:
                    sorter.insertion_sort(data)
                elif algo == SortAlgorithm.MERGE:
                    sorter.merge_sort(data)
            except KeyboardInterrupt:
                Console.red("\n  Operation cancelled!")
                sorter.cancelled = True
            
            end_sort = time.time()
            sort_time = end_sort - start_sort
            
            # Store result
            result = BenchmarkResult(
                algorithm_name=self.get_algorithm_name(algo),
                algorithm=algo,
                column=column,
                num_records=num_records,
                load_time=load_time,
                sort_time=sort_time,
                comparisons=sort_progress.comparisons,
                swaps=sort_progress.swaps,
                completed=not sorter.cancelled
            )
            
            results.append(result)
            self.history.append(result)
            self.log_result(result)
        
        # Display results
        print()
        self.print_header("BENCHMARK RESULTS")
        print()
        
        Console.cyan(f"  Dataset: {num_records} records, sorted by {self.get_column_name(column)}")
        self.print_separator()
        
        Console.yellow(f"  {'Algorithm':<15} {'Load Time':<12} {'Sort Time':<12} {'Total Time':<12} {'Comparisons':<15} {'Swaps':<12}")
        self.print_separator()
        
        for result in results:
            print(f"  {result.algorithm_name:<15} {result.load_time:<12.3f}s {result.sort_time:<12.3f}s "
                  f"{result.load_time + result.sort_time:<12.3f}s {result.comparisons:<15} {result.swaps:<12}")
        
        self.print_separator()
        
        self.wait_for_enter()
    
    def view_history(self):
        """View benchmark history"""
        Console.clear()
        self.print_header("BENCHMARK HISTORY")
        
        if not self.history:
            print()
            Console.yellow("  No benchmark history available.")
            Console.yellow("  Run a benchmark first to see results here.")
            self.wait_for_enter()
            return
        
        print()
        Console.cyan(f"  Total Benchmarks: {len(self.history)}")
        self.print_separator()
        
        Console.yellow(f"  {'#':<4} {'Algorithm':<15} {'Column':<12} {'Records':<10} {'Sort Time':<12} {'Status':<10}")
        self.print_separator()
        
        for i, result in enumerate(self.history, 1):
            status = f"{Colors.BRIGHT_GREEN}Complete" if result.completed else f"{Colors.BRIGHT_RED}Failed"
            print(f"  {i:<4} {result.algorithm_name:<15} {self.get_column_name(result.column):<12} "
                  f"{result.num_records:<10} {result.sort_time:<12.3f}s {status}{Colors.RESET}")
        
        self.print_separator()
        
        Console.cyan(f"\n  Detailed logs saved to: {self.LOG_FILE_PATH}")
        
        self.wait_for_enter()
    
    def show_algorithm_info(self):
        """Display algorithm information"""
        Console.clear()
        self.print_header("ALGORITHM INFORMATION & ANALYSIS")
        
        print()
        Console.cyan("  BUBBLE SORT:")
        Console.reset()
        print("  • Time Complexity:  O(n²) worst/average, O(n) best (already sorted)")
        print("  • Space Complexity: O(1) - in-place sorting")
        print("  • Stability:        Stable (maintains relative order)")
        print("  • Best For:         Educational purposes, tiny datasets (<100)")
        print("  • Performance:      Poor on large datasets due to many swaps")
        
        print()
        Console.cyan("  INSERTION SORT:")
        Console.reset()
        print("  • Time Complexity:  O(n²) worst/average, O(n) best (nearly sorted)")
        print("  • Space Complexity: O(1) - in-place sorting")
        print("  • Stability:        Stable")
        print("  • Best For:         Small datasets, nearly sorted data")
        print("  • Performance:      Better constants than Bubble Sort")
        
        print()
        Console.cyan("  MERGE SORT:")
        Console.reset()
        print("  • Time Complexity:  O(n log n) for all cases (worst/average/best)")
        print("  • Space Complexity: O(n) - requires auxiliary space")
        print("  • Stability:        Stable")
        print("  • Best For:         Large datasets, external sorting, linked lists")
        print("  • Performance:      Consistently excellent, industry standard")
        
        print()
        self.print_separator()
        Console.yellow("  PERFORMANCE ESTIMATES (approximate):")
        self.print_separator()
        print("  Dataset Size │ Bubble Sort │ Insertion  │ Merge Sort")
        self.print_separator()
        print("  1,000        │   ~0.01s    │   ~0.005s  │   ~0.001s")
        print("  10,000       │   ~1.0s     │   ~0.5s    │   ~0.01s")
        print("  100,000      │   ~100s     │   ~50s     │   ~0.1s")
        self.print_separator()
        
        print()
        Console.green("  KEY INSIGHT:")
        Console.green("  O(n log n) scales dramatically better than O(n²).")
        Console.green("  This is why Merge Sort (and Quick Sort, Heap Sort) dominate")
        Console.green("  in production systems and modern computing.")
        Console.reset()
        
        self.wait_for_enter()

# ============================================================================
# MAIN ENTRY POINT
# ============================================================================

def main():
    """Main entry point"""
    try:
        Console.clear()
        Console.cyan("╔══════════════════════════════════════════════════════════════╗")
        Console.cyan("║             SORTING ALGORITHM BENCHMARK MANAGER              ║")
        Console.cyan("║      Design, Analysis and Algorithm Technologies - Lab Exam  ║")
        Console.cyan("╚══════════════════════════════════════════════════════════════╝")
        print()
        
        # Get current directory and set paths
        current_dir = os.path.dirname(os.path.abspath(__file__))
        project_root = os.path.dirname(current_dir)
        
        # Try different possible locations for the CSV file
        possible_csv_paths = [
            os.path.join(project_root, "data", "generated_data.csv"),
            os.path.join(current_dir, "data", "generated_data.csv"),
            os.path.join(os.getcwd(), "data", "generated_data.csv"),
            "data/generated_data.csv",
            "../data/generated_data.csv"
        ]
        
        csv_path = None
        for path in possible_csv_paths:
            if os.path.exists(path):
                csv_path = path
                Console.green(f"  ✓ Found CSV file at: {csv_path}")
                break
        
        if not csv_path:
            Console.red("  ✗ Could not find generated_data.csv")
            Console.red("  Please ensure the CSV file is in the data/ folder")
            print("\n  Expected locations:")
            print(f"  - {os.path.join(project_root, 'data', 'generated_data.csv')}")
            print(f"  - {os.path.join(current_dir, 'data', 'generated_data.csv')}")
            print(f"  - {os.path.join(os.getcwd(), 'data', 'generated_data.csv')}")
            print()
            Console.yellow("  Press Enter to exit...")
            input()
            return
        
        # Set log path
        log_dir = os.path.join(project_root, "logs")
        if not os.path.exists(log_dir):
            os.makedirs(log_dir)
        log_path = os.path.join(log_dir, "benchmark.log")
        
        Console.green(f"  ✓ Log file will be saved to: {log_path}")
        print()
        
        # Run the application
        app = BenchmarkApp(csv_path, log_path)
        app.run()
        
        Console.clear()
        Console.green("\n")
        Console.green("╔══════════════════════════════════════════════════════════════╗")
        Console.green("║         Thank you for using the Benchmark Manager!           ║")
        Console.green("║   Design, Analysis and Algorithm Technologies - Lab Exam     ║")
        Console.green("╚══════════════════════════════════════════════════════════════╝")
        print("\n")
        
    except KeyboardInterrupt:
        Console.red("\n\n  Program terminated by user.")
        sys.exit(0)
    except Exception as e:
        Console.red(f"\n  Fatal Error: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)

if __name__ == "__main__":
    main()