Midterm Lab 2 - Cavite Shortest Path & Routing
==============================================

I. Executive Summary
--------------------

For Midterm Lab 2, I developed a fully interactive Single-Page Application (SPA) designed to visualize and compute the optimal routes between various municipalities in Cavite. Instead of a traditional command-line interface, this project utilizes a web-based graphical interface that allows users to seamlessly calculate routes optimized for **Distance (km)**, **Time (mins)**, or **Fuel (Liters)**, complete with a visual animated overlay of the travel path.

II. Development Approach
------------------------

The project is built entirely with client-side web technologies to ensure it is lightweight and universally accessible without the need for a backend server.

*   **Technology Stack:** HTML5, JavaScript (ES6), and Tailwind CSS for rapid, responsive UI styling.
    
*   **Data Structuring:** The provided routing table was modeled as a **Directed Graph** utilizing an adjacency list (JavaScript object), where each edge contains multiple weight properties (distance, time, and fuel).
    
*   **Graph Visualization:** I integrated the vis-network (Vis.js) library to handle canvas drawing. To achieve strict geographic accuracy, the physics engine was disabled, and nodes were manually pinned to exact X/Y pixel coordinates directly over a custom base map (media/Cavite.png).
    
*   **UI/UX Design:** The interface features a "Glassmorphism" aesthetic with floating control panels, a live dynamic route directory, and WCAG-compliant Dark/Light themes.
    

III. Algorithm Used
-------------------

The core routing engine is powered by a custom JavaScript implementation of **Dijkstra's Algorithm**.

*   **Why Dijkstra's?** It is the optimal, deterministic algorithm for finding the shortest paths between nodes in a graph with non-negative edge weights.
    
*   **Dynamic Implementation:** A traditional Dijkstra implementation evaluates a single, hardcoded weight. I enhanced the algorithm to accept a dynamic criteria parameter. During graph traversal, it evaluates graph\[currentNode\]\[neighbor\]\[criteria\], allowing the engine to instantly adapt to the user's dropdown selection (Distance, Time, or Fuel) without requiring separate pathfinding functions. Path reconstruction is achieved by tracing backward through a previous node mapping dictionary once the destination is reached.
    

IV. Technical Challenges & Solutions
------------------------------------

During development, several complex technical hurdles were successfully resolved:

1.  **Map Layering & Coordinate Synchronization**
    
    *   _Challenge:_ Layering the interactive node network over a static image meant zooming or panning the map would cause nodes to misalign from the background map.
        
    *   _Solution:_ I utilized the HTML5 Canvas API within the Vis.js beforeDrawing hook to draw the Cavite.png map directly _inside_ the canvas coordinate system. This ensures the map scales, filters, and pans perfectly in sync with the interactive nodes.
        
2.  **Animated GIF Rendering on Canvas**
    
    *   _Challenge:_ HTML5 Canvas does not natively support playing animated GIFs (it only renders the first frame). I needed the Travelling.gif car to animate as it traversed the path.
        
    *   _Solution:_ I detached the car from the canvas engine entirely. Instead, I created a floating DOM  element overlay. Using the afterDrawing event and the canvasToDOM() conversion method, I continuously updated the DOM overlay's exact screen pixels and CSS scale to precisely track the calculated canvas coordinates.
        
3.  **Dynamic Animation Speeds & Direction**
    
    *   _Challenge:_ A route taking 25 minutes shouldn't animate at the same visual speed as a route taking 10 minutes. Furthermore, the car needed to face the correct direction of travel.
        
    *   _Solution:_ The requestAnimationFrame loop computes a dynamic speed variable inversely proportional to the specific edge's cost. It also checks the difference in the X-axis (dx) between nodes to dynamically swap the image source between Travelling.gif and Travelling\_right.gif.
        
4.  **Visual Accessibility & Label Overlap**
    
    *   _Challenge:_ Text labels and connection lines occasionally blended into the detailed map background, rendering them illegible.
        
    *   _Solution:_ I implemented dynamic typography halos (heavy text stroking) and manipulated the vadjust property to push node labels strictly above the circles (vadjust: -75), guaranteeing perfect contrast and separation regardless of the underlying map colors or active Light/Dark themes.
        

V. Instructions for Execution
-----------------------------

This application requires no installation, package manager, or local server.

1.  Ensure the directory structure is intact:
    
    *   MidtermLab2-Hanginon.html (or your main HTML file)
        
    *   media/Cavite.png
        
    *   media/Travelling.gif
        
    *   media/Travelling\_right.gif
        
2.  Double-click the HTML file (MidtermLab2-Hanginon.html) to open it in any modern web browser (Google Chrome, Firefox, Edge, or Safari).
    
3.  Use the floating control panel to select your start and end nodes, choose your optimization criteria, and click **Calculate Route**.