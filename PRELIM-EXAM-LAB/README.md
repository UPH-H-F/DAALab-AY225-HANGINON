
# Sorting Algorithm Benchmark Manager

![Language](https://img.shields.io/badge/language-Python_3.8+-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-stable-success.svg)

## Overview

The **Sorting Algorithm Benchmark Manager** is a robust command-line interface utility intended to rigorously evaluate fundamental sorting algorithms using extensive structured datasets. This project functions as the Preliminary Laboratory Examination for the *Design, Analysis and Algorithm Technologies* course.

The main aim is to empirically illustrate the performance disparity between Quadratic $O(n^2)$ and Linearithmic $O(n \log n)$ algorithms when handling datasets of up to 100,000 records. The application employs implements custom sorting logic from scratch, incorporating real-time progress monitoring, comprehensive data validation, and intricate performance metrics.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation and Usage](#installation-and-usage)
- [Benchmark Results](#benchmark-results)
- [Algorithmic Analysis](#algorithmic-analysis)
- [Technical Implementation](#technical-implementation)

## Features

### Core Functionality
- **Custom Implementations:** Pure Python implementations of Bubble Sort, Insertion Sort, and Merge Sort (no built-in sorting libraries used).
- **CSV Data Parsing:** Robust loading of `generated_data.csv` containing ID, First Name, and Last Name attributes.
- **Dynamic Sorting:** Users can sort by Integer (ID) or String (FirstName/LastName) columns.
- **Scalability Testing:** presets for 1,000, 10,000, and 100,000 records to visualize complexity growth.

### User Experience (UX)
- **Interactive CLI:** Menu-driven interface with ANSI color coding for readability.
- **Real-time Telemetry:** Progress bars showing completion percentage, elapsed time, and ETA.
- **Safety Mechanisms:** Critical warnings and confirmation prompts when attempting to run $O(n^2)$ algorithms on large datasets (100k records) to prevent indefinite hanging.
- **Detailed Logging:** Automated generation of `logs/benchmark.log` with timestamps and performance statistics.

## Project Structure

```text
.
├── data/
│   └── generated_data.csv    # Source dataset (100,000 records)
├── logs/
│   └── benchmark.log         # Automated execution logs
├── src/
│   └── sorting_benchmark.py  # Main application source code
└── README.md                 # Documentation
```

## Installation and Usage

### Prerequisites
- Python 3.8 or higher
- Standard libraries only (no external `pip` dependencies required)

### Execution
1. Clone the repository or extract the project files.
2. Navigate to the project root directory.
3. Ensure the dataset exists at `data/generated_data.csv`.
4. Run the benchmark manager:

```bash
python src/sorting_benchmark.py
```

### Navigation
The application provides a main menu with the following options:
1. **Run Single Benchmark:** Test a specific algorithm on a specific column and dataset size.
2. **Run Comparison Benchmark:** Automatically run all three algorithms to compare performance side-by-side.
3. **View History:** See the results of previous runs in the current session.
4. **Algorithm Information:** View theoretical complexity details.

## Benchmark Results

The following table records **actual execution times** measured during testing. All tests were conducted on a standard workstation.

*Note: Time is measured in seconds. Lower is better.*

| Algorithm      | Time Complexity | 1,000 Records | 10,000 Records | 100,000 Records |
|----------------|-----------------|---------------|----------------|-----------------|
| **Bubble Sort**    | O(n²)          | 1.143s        | 195.028s       | Incomplete (est: ~5.4 hours) (cancelled after 17.6s) |
| **Insertion Sort** | O(n²)          | 0.551s        | 98.887s        | Incomplete (est: ~2.75 hours) (cancelled after 18.6s) |
| **Merge Sort**     | O(n log n)     | 0.014s        | 0.423s         | 2.774s (average) |

**Observations:**
1. **Exponential vs Linear Growth**: O(n²) algorithms show quadratic time growth (100x slower for 10x more data), while O(n log n) shows near-linear growth.
2. **Practical Limitations**: Bubble Sort became impractical at 10,000 records (over 3 minutes), while Merge Sort handled 100,000 records in under 3 seconds.
3. **Cancellation Required**: Both O(n²) algorithms required manual cancellation at 100,000 records due to excessive runtime projections.

**Theoretical vs Actual Complexity:**
- **Predicted**: O(n²) → 100x slower per 10x data increase
- **Actual**: Bubble Sort → 171x slower (1.143s → 195.028s)
- **Actual**: Merge Sort → 30x slower (0.014s → 0.423s → 2.774s)

This empirical evidence clearly demonstrates why O(n log n) algorithms are standard in production systems handling large datasets.

## Algorithmic Analysis

### Bubble Sort
- **Complexity:** $O(n^2)$ Average/Worst Case.
- **Mechanism:** Repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
- **Analysis:** Highly inefficient for large datasets due to the sheer number of swaps required. It is stable but rarely used in production.

### Insertion Sort
- **Complexity:** $O(n^2)$ Average/Worst Case.
- **Mechanism:** Builds the final sorted array one item at a time.
- **Analysis:** Generally performs better than Bubble Sort due to lower constant factors and efficient handling of partially sorted data. However, it remains impractical for $N > 10,000$.

### Merge Sort
- **Complexity:** $O(n \log n)$ All Cases.
- **Mechanism:** A divide-and-conquer algorithm that divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.
- **Analysis:** This is the industry standard for general-purpose sorting. The logarithmic component of the complexity curve allows it to scale efficiently to millions of records, as demonstrated by the benchmark results.

## Technical Implementation

### Data Integrity
The `DatasetLoader` class ensures data quality by:
- Skipping malformed rows (missing columns).
- Sanitizing string inputs to remove non-printable characters.
- Validating integer conversion for IDs.
- Providing immediate feedback on the number of valid vs. invalid records loaded.

### Performance Metrics
The `ProgressTracker` class captures:
- **Elapsed Time:** High-precision timing using `time.time()`.
- **Comparisons:** Total number of element comparisons performed.
- **Swaps:** Total number of data movements/assignments.