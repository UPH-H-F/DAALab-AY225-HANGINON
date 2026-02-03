
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

## Performance Metrics

The subsequent table documents the execution time necessary for each algorithm to process the dataset. The tests were performed on a standard workstation equipped with an Intel Core i7 processor and 16GB of RAM.

*Note: Time is quantified in seconds. A lower value is preferable.*

| Algorithm      | Time Complexity | 1,000 Entries | 10,000 Entries | 100,000 Entries |
|----------------|-----------------|---------------|----------------|-----------------|
| **Bubble Sort**    | O(n²)          | ~1.0s         | ~215s          | > 5 hours (Estimated) |
| **Insertion Sort** | O(n²)          | ~0.5s         | ~112s          | > 2.5 hours (Estimated) |
| **Merge Sort**     | O(n log n)     | ~0.02s        | ~0.2s          | ~2.5s (Estimated)     |

**Observation:**
Although Bubble Sort and Insertion Sort exhibit satisfactory performance for small datasets (N=1,000), their efficiency diminishes exponentially with increasing N. Sorting 10,000 records using Bubble Sort required more than 3.5 minutes, while Merge Sort accomplished the same task in less than 0.3 seconds. Sorting 100,000 records using Bubble Sort would require several hours, while Merge Sort accomplishes the same task in seconds.

**Practical Understanding:**
The exponential growth of O(n²) algorithms becomes unfeasible for datasets exceeding 10,000 records. The O(n log n) complexity of Merge Sort illustrates its status as the industry standard for extensive data processing.

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