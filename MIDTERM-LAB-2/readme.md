Midterm Lab 2: Node Map and Shortest Path Analysis
==================================================

Overview
--------

This project is an interactive, web-based application designed to visualize a network of nodes (representing locations in Cavite) and calculate the optimal route between them based on three distinct criteria: Distance (km), Time (mins), and Fuel consumption (Liters).

How to Run
----------

Because this was built as a Single-Page Web Application, there are no complex dependencies or installations required.

1.  Simply double-click the index.html file to open it in any modern web browser (e.g., Chrome, Edge, Safari).
    
2.  The application will immediately load the interactive map and the routing controls.
    

Approach
--------

Instead of a standard command-line script with a static image, I decided to build a **fully interactive web application** using HTML, JavaScript, and Tailwind CSS.

*   **Data Structuring**: The data provided in the table was transcribed into a JavaScript array of objects and then parsed into an adjacency list to represent a **Directed Graph**.
    
*   **Visual Representation**: I utilized the vis-network library (Vis.js) to render the graph. This allows the user to click, drag, and interact with the nodes. The physics engine is configured to prevent nodes from overlapping while ensuring the network remains visually organized.
    
*   **User Interface**: Tailwind CSS was used to build a clean, responsive layout featuring dropdowns that allow the user to easily select their starting point, destination, and what metric they want to optimize for.
    

Algorithm Used
--------------

To determine the shortest path, I implemented **Dijkstra's Algorithm** in JavaScript.**Why Dijkstra's Algorithm?**

*   Dijkstra's is the industry standard for finding the shortest paths between nodes in a graph with non-negative edge weights.
    
*   It is highly adaptable. By passing the user's selected criteria (distance, time, or fuel) dynamically into the algorithm, the same function effortlessly calculates the optimal path for any scenario without needing to rewrite separate algorithms for each metric.
    
*   Once the target destination is reached, the algorithm reconstructs the path backwards using a previous node tracking object, giving us the exact route to highlight on the map.
    

Challenges Faced
----------------

1.  **Dynamic Edge Weighting**: At first, the algorithm was hard-coded to only look at distance. I had to refactor the Dijkstra implementation to accept a dynamic string key (criteria) so it could dynamically pull graph\[currentNode\]\[neighbor\]\[criteria\] depending on the user's dropdown selection.
    
2.  **Graph Directionality**: The provided table clearly states "From Node" and "To Node". Implementing this correctly meant strictly defining the graph as directed. Some nodes (like IMUS to NOVELETA) have paths going both ways, but others do not. Ensuring the Vis.js visualization accurately reflected these one-way and two-way streets with directional arrows required careful configuration.
    
3.  **Visual Highlighting**: Connecting the mathematical output of Dijkstra's algorithm (an array of node IDs) back to the visual UI was challenging. I had to write logic that not only highlighted the specific nodes returned by the algorithm but also reconstructed the specific edge IDs (e.g., IMUS-BACOOR) so that the connecting lines would light up in yellow to physically trace the route on the screen.
