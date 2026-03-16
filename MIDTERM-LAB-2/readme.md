Cavite Interactive Routing & Shortest Path Map
==============================================

A highly interactive web application that visualizes the shortest, fastest, and most fuel-efficient routes across the municipalities of Cavite, Philippines. Built for Midterm Lab 2, this project utilizes Dijkstra's Algorithm layered over a dynamic, custom-styled geographic network graph.

Getting Started
------------------

Because this project is built entirely with client-side technologies, no local server, build step, or package manager is required.

### Installation & Execution

1.  Extract the source files to your local machine.
    
2.  Ensure both index.html and Cavite.png are located in the same directory.
    
3.  Double-click index.html to open it in any modern web browser (Chrome, Firefox, Edge, Safari).
    

> **Note:** For the background map to render correctly, the Cavite.png file must be strictly kept in the same root directory relative to the HTML file.

Project Report
-----------------

### 1\. Development Approach

Instead of a standard command-line script outputting static text, I decided to build a **fully interactive Single-Page Application (SPA)** using HTML, JavaScript, and Tailwind CSS.

*   **Data Structuring:** The raw data table was converted into a JavaScript array of objects and parsed into an adjacency list to represent a **Directed Graph**.
    
*   **Visual Representation:** I integrated the vis-network (Vis.js) library to render the graph. To achieve geographic accuracy, I disabled the library's default physics engine and manually pinned each node to its exact X/Y pixel coordinates directly over the Cavite.png base map.
    
*   **User Interface:** Tailwind CSS was utilized to build a "Glassmorphism" layout with floating, responsive control panels. It features dynamic Light/Dark themes and a live route directory table that auto-scrolls to highlight active paths.
    

### 2\. Algorithm Used

To determine the optimal routes, I implemented **Dijkstra's Algorithm** in JavaScript.

*   **Why Dijkstra's?** It is the industry standard for finding the shortest paths between nodes in a graph with non-negative edge weights.
    
*   **Implementation Details:** The algorithm uses a priority queue approach. It was written to dynamically accept a weight parameter (distance, time, or fuel). This allows a single function to seamlessly calculate the optimal path for any scenario based on the user's dropdown selection, making the code highly efficient and modular. Once the destination is reached, the algorithm reconstructs the path backwards using a previous node tracker.
    

### 3\. Challenges Faced

During the development of this assignment, I encountered and overcame several technical hurdles:

1.  **Coordinate Synchronization & Map Layering:** \* _Challenge:_ Layering the vis-network canvas directly over a static image meant that if the user zoomed or panned the map, the nodes would misalign from the background.
    
    *   _Solution:_ Instead of using standard CSS backgrounds, I used the HTML5 Canvas API to draw Cavite.png _inside_ the Vis.js render cycle (network.on("beforeDrawing")). This ensured the nodes and the map scale and pan perfectly together.
        
2.  **Dynamic Edge Weighting:** \* _Challenge:_ Standard Dijkstra implementations usually check a single, hardcoded weight (like distance).
    
    *   _Solution:_ I refactored the algorithm to accept a dynamic string key (criteria), allowing it to dynamically pull graph\[currentNode\]\[neighbor\]\[criteria\] on the fly depending on what the user is currently optimizing for.
        
3.  **WCAG Accessibility & Contrast:** \* _Challenge:_ Depending on whether the user is in Light or Dark mode, the data labels (Distance, Time, Fuel) would occasionally blend into the complex geographic map background, making them hard to read.
    
    *   _Solution:_ I implemented dynamic typography "halos" (text stroking). In Light Mode, text is dark slate wrapped in a thick white outline; in Dark Mode, it inverses. This guarantees a WCAG AAA contrast ratio so the numbers are always readable regardless of intersecting lines or background colors.