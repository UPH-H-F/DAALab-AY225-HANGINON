// ============================================================================
// SORTING ALGORITHM BENCHMARK MANAGER - PRODUCTION GRADE
// CS Design & Analysis of Algorithms - Prelim Lab Exam
// Enhanced with real-time progress, robust error handling, and smart features
// ============================================================================

#include <iostream>
#include <fstream>
#include <sstream>
#include <vector>
#include <string>
#include <chrono>
#include <iomanip>
#include <algorithm>
#include <cstdint>
#include <cmath>
#include <cstdlib>
#include <cstring>
#include <atomic>
#include <limits>

#ifdef _WIN32
    #include <conio.h>
    #include <windows.h>
    #define CLEAR_SCREEN "cls"
    #define PLATFORM_WINDOWS
#else
    #include <termios.h>
    #include <unistd.h>
    #define CLEAR_SCREEN "clear"
    #define PLATFORM_UNIX
#endif

// ============================================================================
// CONFIGURATION CONSTANTS
// ============================================================================

constexpr int MAX_RECORDS = 100000;
constexpr int PROGRESS_UPDATE_FREQUENCY = 50;  // Update every 50 operations for smoothness
constexpr int DISPLAY_RECORDS = 10;
constexpr const char* CSV_FILE_PATH = "data/generated_data.csv";
constexpr const char* LOG_FILE_PATH = "logs/benchmark.log";

// Progress bar appearance
const char PROGRESS_FILL = '=';
const char PROGRESS_HEAD = '>';
const char PROGRESS_EMPTY = '-';

// ============================================================================
// CROSS-PLATFORM CONSOLE UTILITIES
// ============================================================================

class Console {
private:
    #ifdef PLATFORM_WINDOWS
    static HANDLE hConsole;
    #endif
    
public:
    static void init() {
        #ifdef PLATFORM_WINDOWS
        hConsole = GetStdHandle(STD_OUTPUT_HANDLE);
        SetConsoleOutputCP(65001);  // UTF-8
        #endif
    }
    
    static void clear() {
        #ifdef PLATFORM_WINDOWS
        system("cls");
        #else
        system("clear");
        #endif
    }
    
    static void setColor(int color) {
        #ifdef PLATFORM_WINDOWS
        if (hConsole == NULL) init();
        SetConsoleTextAttribute(hConsole, color);
        #else
        // ANSI color codes for Unix
        switch(color) {
            case 10: std::cout << "\033[1;32m"; break; // Green
            case 12: std::cout << "\033[1;31m"; break; // Red
            case 14: std::cout << "\033[1;33m"; break; // Yellow
            case 9:  std::cout << "\033[1;34m"; break; // Blue
            case 11: std::cout << "\033[1;36m"; break; // Cyan
            case 13: std::cout << "\033[1;35m"; break; // Magenta
            case 15: std::cout << "\033[1;37m"; break; // White
            default: std::cout << "\033[0m";    break; // Reset
        }
        #endif
    }
    
    static void resetColor() { setColor(7); }
    static void green() { setColor(10); }
    static void red() { setColor(12); }
    static void yellow() { setColor(14); }
    static void blue() { setColor(9); }
    static void cyan() { setColor(11); }
    static void magenta() { setColor(13); }
    static void white() { setColor(15); }
    
    static void hideCursor() {
        #ifdef PLATFORM_WINDOWS
        CONSOLE_CURSOR_INFO info;
        info.dwSize = 100;
        info.bVisible = FALSE;
        SetConsoleCursorInfo(hConsole, &info);
        #else
        std::cout << "\033[?25l";
        #endif
    }
    
    static void showCursor() {
        #ifdef PLATFORM_WINDOWS
        CONSOLE_CURSOR_INFO info;
        info.dwSize = 100;
        info.bVisible = TRUE;
        SetConsoleCursorInfo(hConsole, &info);
        #else
        std::cout << "\033[?25h";
        #endif
    }
};

#ifdef PLATFORM_WINDOWS
HANDLE Console::hConsole = NULL;
#endif

// ============================================================================
// DATA STRUCTURES
// ============================================================================

struct Record {
    int ID;
    std::string FirstName;
    std::string LastName;
    
    // Sanitize string to remove problematic characters
    static std::string sanitize(const std::string& str) {
        std::string result;
        result.reserve(str.length());
        for (char c : str) {
            if (c >= 32 && c <= 126) result += c;
            else if (c == '\t' || c == '\n' || c == '\r') result += ' ';
        }
        // Trim whitespace
        size_t start = result.find_first_not_of(" \t");
        size_t end = result.find_last_not_of(" \t");
        if (start == std::string::npos) return "";
        return result.substr(start, end - start + 1);
    }
};

enum class SortColumn { ID, FIRST_NAME, LAST_NAME };
enum class SortAlgorithm { BUBBLE, INSERTION, MERGE };

// ============================================================================
// ATOMIC PROGRESS TRACKER (Thread-safe for future enhancements)
// ============================================================================

class ProgressTracker {
private:
    std::atomic<long long> current;
    std::atomic<long long> total;
    std::atomic<long long> comparisons;
    std::atomic<long long> swaps;
    std::chrono::steady_clock::time_point start_time;
    
public:
    ProgressTracker() : current(0), total(0), comparisons(0), swaps(0) {
        reset();
    }
    
    void reset() {
        current = 0;
        comparisons = 0;
        swaps = 0;
        start_time = std::chrono::steady_clock::now();
    }
    
    void setTotal(long long t) { total = t; }
    void increment() { current++; }
    void incrementComparisons() { comparisons++; }
    void incrementSwaps() { swaps++; }
    void setCurrent(long long c) { current = c; }
    
    long long getCurrent() const { return current.load(); }
    long long getTotal() const { return total.load(); }
    long long getComparisons() const { return comparisons.load(); }
    long long getSwaps() const { return swaps.load(); }
    
    double getProgress() const {
        long long t = total.load();
        if (t == 0) return 0.0;
        return (100.0 * current.load()) / t;
    }
    
    double getElapsedTime() const {
        auto now = std::chrono::steady_clock::now();
        return std::chrono::duration<double>(now - start_time).count();
    }
    
    double getEstimatedTimeRemaining() const {
        long long curr = current.load();
        long long tot = total.load();
        if (curr == 0 || tot == 0) return 0.0;
        
        double elapsed = getElapsedTime();
        double rate = curr / elapsed;
        long long remaining = tot - curr;
        return remaining / rate;
    }
    
    void displayProgress(const std::string& label, int barWidth = 50) {
        double progress = getProgress();
        int filled = static_cast<int>(barWidth * progress / 100.0);
        
        std::cout << "\r  ";
        Console::cyan();
        std::cout << std::left << std::setw(18) << label;
        Console::blue();
        std::cout << " [";
        
        // Draw progress bar
        for (int i = 0; i < barWidth; i++) {
            if (i < filled) {
                std::cout << PROGRESS_FILL;
            } else if (i == filled && progress < 100.0) {
                Console::yellow();
                std::cout << PROGRESS_HEAD;
                Console::blue();
            } else {
                std::cout << PROGRESS_EMPTY;
            }
        }
        
        std::cout << "] ";
        
        // Percentage
        if (progress >= 100.0) {
            Console::green();
            std::cout << "100.0% ✓";
        } else {
            Console::yellow();
            std::cout << std::fixed << std::setprecision(1) << std::setw(6) << progress << "%";
        }
        
        // Time info
        Console::resetColor();
        std::cout << "  ";
        std::cout << std::fixed << std::setprecision(2) << getElapsedTime() << "s";
        
        if (progress > 0.1 && progress < 99.9) {
            double eta = getEstimatedTimeRemaining();
            if (eta < 3600) {  // Only show ETA if less than 1 hour
                std::cout << "  ETA: " << std::fixed << std::setprecision(1) << eta << "s";
            }
        }
        
        std::cout << std::flush;
    }
    
    void finishProgress(const std::string& label) {
        setCurrent(getTotal());
        displayProgress(label);
        std::cout << "\n";
    }
};

// ============================================================================
// DATASET LOADER WITH VALIDATION
// ============================================================================

class DatasetLoader {
private:
    std::vector<Record> dataset;
    std::string filepath;
    
    bool fileExists(const std::string& path) {
        std::ifstream f(path);
        return f.good();
    }
    
public:
    DatasetLoader(const std::string& path) : filepath(path) {}
    
    bool load(ProgressTracker& progress) {
        if (!fileExists(filepath)) {
            Console::red();
            std::cout << "  Error: File not found: " << filepath << "\n";
            std::cout << "  Please ensure the CSV file exists in the data/ directory.\n";
            Console::resetColor();
            return false;
        }
        
        std::ifstream file(filepath);
        if (!file.is_open()) {
            Console::red();
            std::cout << "  Error: Cannot open file: " << filepath << "\n";
            Console::resetColor();
            return false;
        }
        
        dataset.clear();
        dataset.reserve(MAX_RECORDS);
        
        std::string line;
        int lineNumber = 0;
        int validRecords = 0;
        int errorCount = 0;
        
        // Skip header
        if (std::getline(file, line)) {
            lineNumber++;
        }
        
        progress.setTotal(MAX_RECORDS);
        
        while (std::getline(file, line) && validRecords < MAX_RECORDS) {
            lineNumber++;
            
            // Update progress every 1000 records for smooth loading
            if (lineNumber % 1000 == 0) {
                progress.setCurrent(validRecords);
                progress.displayProgress("Loading CSV");
            }
            
            std::stringstream ss(line);
            std::string id_str, firstName, lastName;
            
            if (!std::getline(ss, id_str, ',')) continue;
            if (!std::getline(ss, firstName, ',')) continue;
            if (!std::getline(ss, lastName, ',')) lastName = "";
            
            // Validate and parse ID
            try {
                int id = std::stoi(id_str);
                
                Record rec;
                rec.ID = id;
                rec.FirstName = Record::sanitize(firstName);
                rec.LastName = Record::sanitize(lastName);
                
                // Validate record
                if (rec.ID > 0 && !rec.FirstName.empty()) {
                    dataset.push_back(rec);
                    validRecords++;
                } else {
                    errorCount++;
                }
            } catch (...) {
                errorCount++;
            }
        }
        
        file.close();
        
        progress.setCurrent(validRecords);
        progress.finishProgress("Loading CSV");
        
        if (errorCount > 0) {
            Console::yellow();
            std::cout << "  Warning: Skipped " << errorCount << " invalid records\n";
            Console::resetColor();
        }
        
        Console::green();
        std::cout << "  Successfully loaded " << validRecords << " valid records\n";
        Console::resetColor();
        
        return validRecords > 0;
    }
    
    std::vector<Record> getData(int numRecords) const {
        int count = std::min(numRecords, static_cast<int>(dataset.size()));
        return std::vector<Record>(dataset.begin(), dataset.begin() + count);
    }
    
    int getSize() const { return static_cast<int>(dataset.size()); }
};

// ============================================================================
// SORTING ALGORITHMS WITH REAL-TIME PROGRESS AND CONTROLS
// ============================================================================

#ifdef _WIN32
#include <conio.h>
#endif

class Sorter {
private:
    SortColumn column;
    ProgressTracker& progress;
    std::atomic<bool> cancelled;
    std::atomic<bool> paused;
    
    // Comparison functions
    bool compare(const Record& a, const Record& b) {
        progress.incrementComparisons();
        
        switch (column) {
            case SortColumn::ID:
                return a.ID < b.ID;
            case SortColumn::FIRST_NAME:
                return a.FirstName < b.FirstName;
            case SortColumn::LAST_NAME:
                return a.LastName < b.LastName;
        }
        return false;
    }
    
    void recordSwap() {
        progress.incrementSwaps();
    }
    
    void checkPauseAndCancel() {
        #ifdef _WIN32
        if (_kbhit()) {
            char ch = _getch();
            if (ch == 27) {  // ESC key
                cancel();
                Console::red();
                std::cout << "\n  Operation cancelled by user!\n";
                Console::resetColor();
            } else if (ch == 'p' || ch == 'P') {
                togglePause();
                if (isPaused()) {
                    Console::yellow();
                    std::cout << "\n  Operation PAUSED. Press P to resume...\n";
                    Console::resetColor();
                } else {
                    Console::green();
                    std::cout << "\n  Operation RESUMED!\n";
                    Console::resetColor();
                }
            }
        }
        #endif
    }
    
    void handlePause() {
        while (isPaused() && !isCancelled()) {
            #ifdef _WIN32
            // Windows sleep (milliseconds)
            Sleep(100);
            #else
            // Unix sleep (microseconds)
            usleep(100000);  // 100ms = 100,000 microseconds
            #endif
            
            #ifdef _WIN32
            if (_kbhit()) {
                char ch = _getch();
                if (ch == 27) {  // ESC
                    cancel();
                    Console::red();
                    std::cout << "\n  Operation cancelled!\n";
                    Console::resetColor();
                    break;
                } else if (ch == 'p' || ch == 'P') {
                    togglePause();
                    if (!isPaused()) {
                        Console::green();
                        std::cout << "\n  Resuming operation...\n";
                        Console::resetColor();
                    }
                }
            }
            #endif
        }
    }
    
public:
    Sorter(SortColumn col, ProgressTracker& prog) 
        : column(col), progress(prog), cancelled(false), paused(false) {}
    
    void cancel() { cancelled = true; }
    void togglePause() { paused = !paused; }
    bool isCancelled() const { return cancelled.load(); }
    bool isPaused() const { return paused.load(); }
    
    void showControls() {
        Console::cyan();
        std::cout << "  ╔════════════════════════════════════════╗\n";
        std::cout << "  ║        CONTROLS DURING SORTING        ║\n";
        std::cout << "  ╠════════════════════════════════════════╣\n";
        std::cout << "  ║  ESC  : Cancel operation              ║\n";
        std::cout << "  ║  P    : Pause/Resume                  ║\n";
        std::cout << "  ║  Ctrl+C: Force quit program           ║\n";
        std::cout << "  ╚════════════════════════════════════════╝\n";
        Console::resetColor();
        std::cout << "\n";
    }
    
    // ========================================================================
    // BUBBLE SORT - O(n²) with optimizations
    // ========================================================================
    void bubbleSort(std::vector<Record>& data) {
        int n = data.size();
        if (n <= 1) return;
        
        // Calculate total operations for accurate progress
        long long totalOps = (static_cast<long long>(n) * (n - 1)) / 2;
        progress.setTotal(totalOps);
        progress.reset();
        
        // Show controls
        showControls();
        
        bool swapped;
        int currentOp = 0;
        
        for (int i = 0; i < n - 1 && !isCancelled(); i++) {
            // Check for pause/cancel
            checkPauseAndCancel();
            
            // Handle pause state
            if (isPaused()) {
                handlePause();
                if (isCancelled()) break;
            }
            
            swapped = false;
            
            for (int j = 0; j < n - i - 1 && !isCancelled(); j++) {
                currentOp++;
                
                if (compare(data[j + 1], data[j])) {
                    std::swap(data[j], data[j + 1]);
                    recordSwap();
                    swapped = true;
                }
                
                // Update progress at intervals
                if (currentOp % PROGRESS_UPDATE_FREQUENCY == 0) {
                    progress.setCurrent(currentOp);
                    progress.displayProgress("Bubble Sort");
                    
                    // Check for user input during progress update
                    #ifdef _WIN32
                    if (_kbhit()) {
                        char ch = _getch();
                        if (ch == 27) {  // ESC
                            cancel();
                            Console::red();
                            std::cout << "\n  Operation cancelled!\n";
                            Console::resetColor();
                            break;
                        } else if (ch == 'p' || ch == 'P') {
                            togglePause();
                            if (isPaused()) {
                                Console::yellow();
                                std::cout << "\n  Operation paused. Press P to resume...\n";
                                Console::resetColor();
                            }
                        }
                    }
                    #endif
                }
            }
            
            // Early termination if no swaps
            if (!swapped) {
                progress.setCurrent(totalOps);
                break;
            }
        }
        
        progress.finishProgress("Bubble Sort");
    }
    
    // ========================================================================
    // INSERTION SORT - O(n²) with better constants
    // ========================================================================
    void insertionSort(std::vector<Record>& data) {
        int n = data.size();
        if (n <= 1) return;
        
        // Estimate operations (average case)
        long long totalOps = (static_cast<long long>(n) * (n - 1)) / 4;
        progress.setTotal(totalOps);
        progress.reset();
        
        // Show controls
        showControls();
        
        long long currentOp = 0;
        
        for (int i = 1; i < n && !isCancelled(); i++) {
            // Check for pause/cancel
            checkPauseAndCancel();
            
            // Handle pause state
            if (isPaused()) {
                handlePause();
                if (isCancelled()) break;
            }
            
            Record key = data[i];
            int j = i - 1;
            
            while (j >= 0 && !isCancelled() && compare(key, data[j])) {
                data[j + 1] = data[j];
                recordSwap();
                j--;
                currentOp++;
                
                if (currentOp % PROGRESS_UPDATE_FREQUENCY == 0) {
                    progress.setCurrent(std::min(currentOp, totalOps));
                    progress.displayProgress("Insertion Sort");
                }
            }
            
            data[j + 1] = key;
            
            // Update progress per outer iteration
            if (i % 100 == 0) {
                progress.setCurrent(std::min(currentOp, totalOps));
                progress.displayProgress("Insertion Sort");
            }
        }
        
        progress.finishProgress("Insertion Sort");
    }
    
    // ========================================================================
    // MERGE SORT - O(n log n) with progress tracking
    // ========================================================================
    void mergeSort(std::vector<Record>& data) {
        int n = data.size();
        if (n <= 1) return;
        
        // Calculate total operations: n * log2(n)
        long long totalOps = static_cast<long long>(n * std::log2(n));
        progress.setTotal(totalOps);
        progress.reset();
        
        // Show controls
        showControls();
        
        mergeSortRecursive(data, 0, n - 1);
        progress.finishProgress("Merge Sort");
    }
    
private:
    void mergeSortRecursive(std::vector<Record>& data, int left, int right) {
        if (left >= right || isCancelled()) return;
        
        // Check for pause/cancel
        checkPauseAndCancel();
        
        // Handle pause state
        if (isPaused()) {
            handlePause();
            if (isCancelled()) return;
        }
        
        int mid = left + (right - left) / 2;
        
        mergeSortRecursive(data, left, mid);
        mergeSortRecursive(data, mid + 1, right);
        
        merge(data, left, mid, right);
        
        // Update progress
        static int mergeCount = 0;
        if (++mergeCount % 10 == 0) {
            progress.increment();
            if (mergeCount % 100 == 0) {
                progress.displayProgress("Merge Sort");
            }
        }
    }
    
    void merge(std::vector<Record>& data, int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;
        
        std::vector<Record> L(data.begin() + left, data.begin() + mid + 1);
        std::vector<Record> R(data.begin() + mid + 1, data.begin() + right + 1);
        
        int i = 0, j = 0, k = left;
        
        while (i < n1 && j < n2 && !isCancelled()) {
            if (compare(L[i], R[j])) {
                data[k++] = L[i++];
            } else {
                data[k++] = R[j++];
            }
            recordSwap();
        }
        
        while (i < n1 && !isCancelled()) {
            data[k++] = L[i++];
            recordSwap();
        }
        
        while (j < n2 && !isCancelled()) {
            data[k++] = R[j++];
            recordSwap();
        }
    }
};

// ============================================================================
// BENCHMARK RESULT STORAGE
// ============================================================================

struct BenchmarkResult {
    std::string algorithmName;
    SortAlgorithm algorithm;
    SortColumn column;
    int numRecords;
    double loadTime;
    double sortTime;
    long long comparisons;
    long long swaps;
    bool completed;
    
    BenchmarkResult() : numRecords(0), loadTime(0), sortTime(0), 
                        comparisons(0), swaps(0), completed(false) {}
};

// ============================================================================
// MAIN APPLICATION
// ============================================================================

class BenchmarkApp {
private:
    DatasetLoader loader;
    std::vector<BenchmarkResult> history;
    
    std::string getAlgorithmName(SortAlgorithm algo) {
        switch (algo) {
            case SortAlgorithm::BUBBLE: return "Bubble Sort";
            case SortAlgorithm::INSERTION: return "Insertion Sort";
            case SortAlgorithm::MERGE: return "Merge Sort";
        }
        return "Unknown";
    }
    
    std::string getColumnName(SortColumn col) {
        switch (col) {
            case SortColumn::ID: return "ID";
            case SortColumn::FIRST_NAME: return "First Name";
            case SortColumn::LAST_NAME: return "Last Name";
        }
        return "Unknown";
    }
    
    void printHeader(const std::string& title) {
        Console::cyan();
        std::cout << "\n  " << std::string(70, '=') << "\n";
        std::cout << "  " << title << "\n";
        std::cout << "  " << std::string(70, '=') << "\n";
        Console::resetColor();
    }
    
    void printSeparator() {
        std::cout << "  " << std::string(70, '-') << "\n";
    }
    
    void displayResults(const std::vector<Record>& data, const std::string& sortedBy) {
        std::cout << "\n";
        Console::green();
        std::cout << "  First " << std::min(DISPLAY_RECORDS, (int)data.size()) 
                  << " records (sorted by " << sortedBy << "):\n";
        Console::resetColor();
        printSeparator();
        
        Console::yellow();
        std::cout << "  " << std::left << std::setw(8) << "ID"
                  << std::setw(25) << "First Name"
                  << std::setw(25) << "Last Name" << "\n";
        Console::resetColor();
        printSeparator();
        
        for (int i = 0; i < std::min(DISPLAY_RECORDS, (int)data.size()); i++) {
            std::cout << "  " << std::left << std::setw(8) << data[i].ID
                      << std::setw(25) << data[i].FirstName
                      << std::setw(25) << data[i].LastName << "\n";
        }
        printSeparator();
    }
    
    void logResult(const BenchmarkResult& result) {
        // Create logs directory if it doesn't exist
        #ifdef PLATFORM_WINDOWS
        system("if not exist logs mkdir logs");
        #else
        system("mkdir -p logs");
        #endif
        
        std::ofstream log(LOG_FILE_PATH, std::ios::app);
        if (log.is_open()) {
            auto now = std::chrono::system_clock::now();
            auto time = std::chrono::system_clock::to_time_t(now);
            
            log << "========================================\n";
            log << "Timestamp: " << std::ctime(&time);
            log << "Algorithm: " << result.algorithmName << "\n";
            log << "Column: " << getColumnName(result.column) << "\n";
            log << "Records: " << result.numRecords << "\n";
            log << "Load Time: " << result.loadTime << "s\n";
            log << "Sort Time: " << result.sortTime << "s\n";
            log << "Total Time: " << (result.loadTime + result.sortTime) << "s\n";
            log << "Comparisons: " << result.comparisons << "\n";
            log << "Swaps: " << result.swaps << "\n";
            log << "Completed: " << (result.completed ? "Yes" : "No") << "\n";
            log << "========================================\n\n";
            log.close();
        }
    }
    
    bool validateInput(int& value, int min, int max, const std::string& prompt) {
        while (true) {
            std::cout << prompt;
            
            std::string input;
            std::getline(std::cin, input);
            
            // Clean input: remove carriage returns from numpad Enter
            input.erase(std::remove(input.begin(), input.end(), '\r'), input.end());
            
            // Check for empty input
            if (input.empty()) {
                Console::red();
                std::cout << "  Error: Input cannot be empty. Please try again.\n";
                Console::resetColor();
                continue;
            }
            
            // Try to parse as integer
            try {
                value = std::stoi(input);
                if (value >= min && value <= max) {
                    return true;
                }
                Console::red();
                std::cout << "  Error: Value must be between " << min << " and " << max << ". Please try again.\n";
                Console::resetColor();
            } catch (...) {
                Console::red();
                std::cout << "  Error: Invalid input. Please enter a valid number.\n";
                Console::resetColor();
            }
        }
    }
    
    void waitForEnter() {
        Console::yellow();
        std::cout << "\n  Press Enter to continue...";
        Console::resetColor();
        
        // Wait for ONE Enter press
        std::cin.clear();
        std::string input;
        std::getline(std::cin, input);
    }
    
public:
    BenchmarkApp() : loader(CSV_FILE_PATH) {
        Console::init();
    }
    
    void run() {
        Console::hideCursor();
        
        while (true) {
            Console::clear();
            printHeader("SORTING ALGORITHM BENCHMARK MANAGER");
            
            Console::cyan();
            std::cout << "  Professional Benchmarking Tool for Algorithm Analysis\n";
            Console::resetColor();
            std::cout << "\n";
            
            std::cout << "  1. Run Single Benchmark\n";
            std::cout << "  2. Run Comparison Benchmark (All Algorithms)\n";
            std::cout << "  3. View Benchmark History\n";
            std::cout << "  4. Algorithm Information\n";
            std::cout << "  5. Exit\n";
            std::cout << "\n";
            
            int choice;
            if (!validateInput(choice, 1, 5, "  Select option (1-5): ")) continue;
            
            switch (choice) {
                case 1: runSingleBenchmark(); break;
                case 2: runComparisonBenchmark(); break;
                case 3: viewHistory(); break;
                case 4: showAlgorithmInfo(); break;
                case 5: 
                    Console::showCursor();
                    return;
            }
        }
    }
    
    void runSingleBenchmark() {
        Console::clear();
        printHeader("SINGLE ALGORITHM BENCHMARK");
        
        // Load dataset
        ProgressTracker loadProgress;
        std::cout << "\n";
        if (!loader.load(loadProgress)) {
            waitForEnter();
            return;
        }
        
        std::cout << "\n";
        std::cout << "  Select Algorithm:\n";
        std::cout << "  1. Bubble Sort    (O(n²))\n";
        std::cout << "  2. Insertion Sort (O(n²))\n";
        std::cout << "  3. Merge Sort     (O(n log n))\n";
        std::cout << "\n";
        
        int algoChoice;
        if (!validateInput(algoChoice, 1, 3, "  Select algorithm (1-3): ")) {
            waitForEnter();
            return;
        }
        
        SortAlgorithm algo;
        switch (algoChoice) {
            case 1: algo = SortAlgorithm::BUBBLE; break;
            case 2: algo = SortAlgorithm::INSERTION; break;
            case 3: algo = SortAlgorithm::MERGE; break;
        }
        
        std::cout << "\n";
        std::cout << "  Select Column to Sort:\n";
        std::cout << "  1. ID (Integer)\n";
        std::cout << "  2. First Name (String)\n";
        std::cout << "  3. Last Name (String)\n";
        std::cout << "\n";
        
        int colChoice;
        if (!validateInput(colChoice, 1, 3, "  Select column (1-3): ")) {
            waitForEnter();
            return;
        }
        
        SortColumn column;
        switch (colChoice) {
            case 1: column = SortColumn::ID; break;
            case 2: column = SortColumn::FIRST_NAME; break;
            case 3: column = SortColumn::LAST_NAME; break;
        }
        
        std::cout << "\n";
        std::cout << "  Select Number of Records:\n";
        std::cout << "  1. 1,000 (Quick Benchmark)\n";
        std::cout << "  2. 10,000 (Standard Test)\n";
        std::cout << "  3. 100,000 (Full Dataset)\n";
        std::cout << "  4. Custom Value\n\n";

        int presetChoice;
        if (!validateInput(presetChoice, 1, 4, "  Select option (1-4): ")) {
            waitForEnter();
            return;
        }

        int numRecords;
        switch (presetChoice) {
        case 1: numRecords = 1000; break;
        case 2: numRecords = 10000; break;
        case 3: numRecords = 100000; break;
        case 4:
            if (!validateInput(numRecords, 1, loader.getSize(),
                "  Enter custom number (1-" + std::to_string(loader.getSize()) + "): ")) {
                waitForEnter();
                return;
            }
            break;
        }
        
        // Warning for large datasets with O(n²) algorithms
        if (numRecords > 10000 && (algo == SortAlgorithm::BUBBLE || algo == SortAlgorithm::INSERTION)) {
            std::cout << "\n";
            Console::red();
            std::cout << "  ⚠ WARNING: Sorting " << numRecords << " records with " 
                      << getAlgorithmName(algo) << " may take a long time!\n";
            Console::yellow();
            std::cout << "  Estimated time: ";
            if (numRecords >= 50000) std::cout << "several minutes to hours";
            else if (numRecords >= 20000) std::cout << "1-5 minutes";
            else std::cout << "10-60 seconds";
            std::cout << "\n";
            Console::resetColor();
            std::cout << "\n  Do you want to continue? (y/n): ";
            
            std::string confirm;
            std::getline(std::cin, confirm);
            if (confirm != "y" && confirm != "Y") {
                return;
            }
        }
        
        // Execute benchmark
        std::cout << "\n";
        printSeparator();
        std::cout << "\n";
        
        auto startLoad = std::chrono::steady_clock::now();
        std::vector<Record> data = loader.getData(numRecords);
        auto endLoad = std::chrono::steady_clock::now();
        double loadTime = std::chrono::duration<double>(endLoad - startLoad).count();
        
        Console::green();
        std::cout << "  Data loaded: " << data.size() << " records in " 
                  << std::fixed << std::setprecision(3) << loadTime << "s\n\n";
        Console::resetColor();
        
        ProgressTracker sortProgress;
        Sorter sorter(column, sortProgress);
        
        auto startSort = std::chrono::steady_clock::now();
        
        switch (algo) {
            case SortAlgorithm::BUBBLE:
                sorter.bubbleSort(data);
                break;
            case SortAlgorithm::INSERTION:
                sorter.insertionSort(data);
                break;
            case SortAlgorithm::MERGE:
                sorter.mergeSort(data);
                break;
        }
        
        auto endSort = std::chrono::steady_clock::now();
        double sortTime = std::chrono::duration<double>(endSort - startSort).count();
        
        // Display results
        std::cout << "\n";
        Console::green();
        std::cout << "  ✓ Sorting completed successfully!\n";
        Console::resetColor();
        std::cout << "\n";
        
        printSeparator();
        Console::cyan();
        std::cout << "  PERFORMANCE METRICS:\n";
        Console::resetColor();
        printSeparator();
        std::cout << "  Algorithm:     " << getAlgorithmName(algo) << "\n";
        std::cout << "  Column:        " << getColumnName(column) << "\n";
        std::cout << "  Records:       " << numRecords << "\n";
        std::cout << "  Load Time:     " << std::fixed << std::setprecision(3) << loadTime << "s\n";
        std::cout << "  Sort Time:     " << std::fixed << std::setprecision(3) << sortTime << "s\n";
        std::cout << "  Total Time:    " << std::fixed << std::setprecision(3) << (loadTime + sortTime) << "s\n";
        std::cout << "  Comparisons:   " << sortProgress.getComparisons() << "\n";
        std::cout << "  Swaps:         " << sortProgress.getSwaps() << "\n";
        printSeparator();
        
        // Display sample results
        displayResults(data, getColumnName(column));
        
        // Save to history
        BenchmarkResult result;
        result.algorithmName = getAlgorithmName(algo);
        result.algorithm = algo;
        result.column = column;
        result.numRecords = numRecords;
        result.loadTime = loadTime;
        result.sortTime = sortTime;
        result.comparisons = sortProgress.getComparisons();
        result.swaps = sortProgress.getSwaps();
        result.completed = true;
        
        history.push_back(result);
        logResult(result);
        
        waitForEnter();
    }
    
    void runComparisonBenchmark() {
        Console::clear();
        printHeader("COMPARISON BENCHMARK - ALL ALGORITHMS");
        
        // Load dataset
        ProgressTracker loadProgress;
        std::cout << "\n";
        if (!loader.load(loadProgress)) {
            waitForEnter();
            return;
        }
        
        std::cout << "\n";
        std::cout << "  Select Column to Sort:\n";
        std::cout << "  1. ID (Integer)\n";
        std::cout << "  2. First Name (String)\n";
        std::cout << "  3. Last Name (String)\n";
        std::cout << "\n";
        
        int colChoice;
        if (!validateInput(colChoice, 1, 3, "  Select column (1-3): ")) {
            waitForEnter();
            return;
        }
        
        SortColumn column;
        switch (colChoice) {
            case 1: column = SortColumn::ID; break;
            case 2: column = SortColumn::FIRST_NAME; break;
            case 3: column = SortColumn::LAST_NAME; break;
        }
        
        std::cout << "\n";
        std::cout << "  Select Number of Records:\n";
        std::cout << "  1. 1,000 (Quick Benchmark)\n";
        std::cout << "  2. 10,000 (Standard Test)\n";
        std::cout << "  3. 100,000 (Full Dataset)\n";
        std::cout << "  4. Custom Value\n\n";

        int presetChoice;
        if (!validateInput(presetChoice, 1, 4, "  Select option (1-4): ")) {
            waitForEnter();
            return;
        }

        int numRecords;
        switch (presetChoice) {
        case 1: numRecords = 1000; break;
        case 2: numRecords = 10000; break;
        case 3: numRecords = 100000; break;
        case 4:
            if (!validateInput(numRecords, 1, loader.getSize(),
                "  Enter custom number (1-" + std::to_string(loader.getSize()) + "): ")) {
                waitForEnter();
                return;
            }
            break;
        }
        
        // Warning for O(n²) with large datasets
        if (numRecords > 10000) {
            std::cout << "\n";
            Console::yellow();
            std::cout << "  ⚠ Note: O(n²) algorithms (Bubble, Insertion) may be slow with " 
                      << numRecords << " records.\n";
            std::cout << "  Recommended: Use <= 10,000 records for comparison benchmarks.\n";
            Console::resetColor();
            std::cout << "\n  Continue anyway? (y/n): ";
            
            std::string confirm;
            std::getline(std::cin, confirm);
            if (confirm != "y" && confirm != "Y") {
                return;
            }
        }
        
        // Run all three algorithms
        std::cout << "\n";
        printSeparator();
        std::cout << "\n";
        Console::cyan();
        std::cout << "  Running comparison benchmark...\n\n";
        Console::resetColor();
        
        std::vector<BenchmarkResult> results;
        SortAlgorithm algorithms[] = {SortAlgorithm::BUBBLE, SortAlgorithm::INSERTION, SortAlgorithm::MERGE};
        
        for (SortAlgorithm algo : algorithms) {
            // Load fresh data for each algorithm
            auto startLoad = std::chrono::steady_clock::now();
            std::vector<Record> data = loader.getData(numRecords);
            auto endLoad = std::chrono::steady_clock::now();
            double loadTime = std::chrono::duration<double>(endLoad - startLoad).count();
            
            // Sort
            ProgressTracker sortProgress;
            Sorter sorter(column, sortProgress);
            
            auto startSort = std::chrono::steady_clock::now();
            
            switch (algo) {
                case SortAlgorithm::BUBBLE:
                    sorter.bubbleSort(data);
                    break;
                case SortAlgorithm::INSERTION:
                    sorter.insertionSort(data);
                    break;
                case SortAlgorithm::MERGE:
                    sorter.mergeSort(data);
                    break;
            }
            
            auto endSort = std::chrono::steady_clock::now();
            double sortTime = std::chrono::duration<double>(endSort - startSort).count();
            
            // Store result
            BenchmarkResult result;
            result.algorithmName = getAlgorithmName(algo);
            result.algorithm = algo;
            result.column = column;
            result.numRecords = numRecords;
            result.loadTime = loadTime;
            result.sortTime = sortTime;
            result.comparisons = sortProgress.getComparisons();
            result.swaps = sortProgress.getSwaps();
            result.completed = true;
            
            results.push_back(result);
            history.push_back(result);
            logResult(result);
            
            std::cout << "\n";
        }
        
        // Display comparison table
        std::cout << "\n";
        printHeader("BENCHMARK COMPARISON RESULTS");
        std::cout << "\n";
        
        Console::cyan();
        std::cout << "  Dataset: " << numRecords << " records, sorted by " << getColumnName(column) << "\n";
        Console::resetColor();
        printSeparator();
        
        Console::yellow();
        std::cout << "  " << std::left << std::setw(15) << "Algorithm"
                  << std::setw(12) << "Load Time"
                  << std::setw(12) << "Sort Time"
                  << std::setw(12) << "Total Time"
                  << std::setw(15) << "Comparisons"
                  << std::setw(12) << "Swaps" << "\n";
        Console::resetColor();
        printSeparator();
        
        for (const auto& result : results) {
            std::cout << "  " << std::left << std::setw(15) << result.algorithmName
                      << std::setw(12) << (std::to_string(result.loadTime).substr(0, 8) + "s")
                      << std::setw(12) << (std::to_string(result.sortTime).substr(0, 8) + "s")
                      << std::setw(12) << (std::to_string(result.loadTime + result.sortTime).substr(0, 8) + "s")
                      << std::setw(15) << result.comparisons
                      << std::setw(12) << result.swaps << "\n";
        }
        
        printSeparator();
        
        // Analysis
        std::cout << "\n";
        Console::cyan();
        std::cout << "  COMPLEXITY ANALYSIS:\n";
        Console::resetColor();
        std::cout << "  • Bubble Sort:    O(n²)     - Quadratic growth\n";
        std::cout << "  • Insertion Sort: O(n²)     - Quadratic, better constants\n";
        std::cout << "  • Merge Sort:     O(n log n) - Linearithmic, optimal\n";
        
        if (numRecords >= 1000) {
            std::cout << "\n";
            Console::green();
            std::cout << "  Note: Observe how Merge Sort's O(n log n) significantly\n";
            std::cout << "  outperforms O(n²) algorithms as dataset size increases.\n";
            Console::resetColor();
        }
        
        waitForEnter();
    }
    
    void viewHistory() {
        Console::clear();
        printHeader("BENCHMARK HISTORY");
        
        if (history.empty()) {
            std::cout << "\n";
            Console::yellow();
            std::cout << "  No benchmark history available.\n";
            std::cout << "  Run a benchmark first to see results here.\n";
            Console::resetColor();
            waitForEnter();
            return;
        }
        
        std::cout << "\n";
        Console::cyan();
        std::cout << "  Total Benchmarks: " << history.size() << "\n";
        Console::resetColor();
        printSeparator();
        
        Console::yellow();
        std::cout << "  " << std::left << std::setw(4) << "#"
                  << std::setw(15) << "Algorithm"
                  << std::setw(12) << "Column"
                  << std::setw(10) << "Records"
                  << std::setw(12) << "Sort Time"
                  << std::setw(10) << "Status" << "\n";
        Console::resetColor();
        printSeparator();
        
        for (size_t i = 0; i < history.size(); i++) {
            const auto& result = history[i];
            
            std::cout << "  " << std::left << std::setw(4) << (i + 1)
                      << std::setw(15) << result.algorithmName
                      << std::setw(12) << getColumnName(result.column)
                      << std::setw(10) << result.numRecords
                      << std::setw(12) << (std::to_string(result.sortTime).substr(0, 8) + "s");
            
            if (result.completed) {
                Console::green();
                std::cout << "Complete";
                Console::resetColor();
            } else {
                Console::red();
                std::cout << "Failed";
                Console::resetColor();
            }
            std::cout << "\n";
        }
        
        printSeparator();
        
        Console::cyan();
        std::cout << "\n  Detailed logs saved to: " << LOG_FILE_PATH << "\n";
        Console::resetColor();
        
        waitForEnter();
    }
    
    void showAlgorithmInfo() {
        Console::clear();
        printHeader("ALGORITHM INFORMATION & ANALYSIS");
        
        std::cout << "\n";
        Console::cyan();
        std::cout << "  BUBBLE SORT:\n";
        Console::resetColor();
        std::cout << "  • Time Complexity:  O(n²) worst/average, O(n) best (already sorted)\n";
        std::cout << "  • Space Complexity: O(1) - in-place sorting\n";
        std::cout << "  • Stability:        Stable (maintains relative order)\n";
        std::cout << "  • Best For:         Educational purposes, tiny datasets (<100)\n";
        std::cout << "  • Performance:      Poor on large datasets due to many swaps\n";
        
        std::cout << "\n";
        Console::cyan();
        std::cout << "  INSERTION SORT:\n";
        Console::resetColor();
        std::cout << "  • Time Complexity:  O(n²) worst/average, O(n) best (nearly sorted)\n";
        std::cout << "  • Space Complexity: O(1) - in-place sorting\n";
        std::cout << "  • Stability:        Stable\n";
        std::cout << "  • Best For:         Small datasets, nearly sorted data\n";
        std::cout << "  • Performance:      Better constants than Bubble Sort\n";
        
        std::cout << "\n";
        Console::cyan();
        std::cout << "  MERGE SORT:\n";
        Console::resetColor();
        std::cout << "  • Time Complexity:  O(n log n) for all cases (worst/average/best)\n";
        std::cout << "  • Space Complexity: O(n) - requires auxiliary space\n";
        std::cout << "  • Stability:        Stable\n";
        std::cout << "  • Best For:         Large datasets, external sorting, linked lists\n";
        std::cout << "  • Performance:      Consistently excellent, industry standard\n";
        
        std::cout << "\n";
        printSeparator();
        Console::yellow();
        std::cout << "  PERFORMANCE ESTIMATES (approximate):\n";
        Console::resetColor();
        printSeparator();
        std::cout << "  Dataset Size │ Bubble Sort │ Insertion  │ Merge Sort\n";
        printSeparator();
        std::cout << "  1,000        │   ~0.01s    │   ~0.005s  │   ~0.001s\n";
        std::cout << "  10,000       │   ~1.0s     │   ~0.5s    │   ~0.01s\n";
        std::cout << "  100,000      │   ~100s     │   ~50s     │   ~0.1s\n";
        printSeparator();
        
        std::cout << "\n";
        Console::green();
        std::cout << "  KEY INSIGHT:\n";
        std::cout << "  O(n log n) scales dramatically better than O(n²).\n";
        std::cout << "  This is why Merge Sort (and Quick Sort, Heap Sort) dominate\n";
        std::cout << "  in production systems and modern computing.\n";
        Console::resetColor();
        
        waitForEnter();
    }
};

// ============================================================================
// MAIN ENTRY POINT
// ============================================================================

int main() {
    try {
        Console::init();
        
        BenchmarkApp app;
        app.run();
        
        Console::clear();
        Console::green();
        std::cout << "\n";
        std::cout << "  ╔═══════════════════════════════════════════════════════╗\n";
        std::cout << "  ║   Thank you for using the Benchmark Manager!         ║\n";
        std::cout << "  ║   Design & Analysis of Algorithms - Lab Exam         ║\n";
        std::cout << "  ╚═══════════════════════════════════════════════════════╝\n";
        std::cout << "\n";
        Console::resetColor();
        
    } catch (const std::exception& e) {
        Console::red();
        std::cerr << "\n  Fatal Error: " << e.what() << "\n\n";
        Console::resetColor();
        return 1;
    }
    
    return 0;
}