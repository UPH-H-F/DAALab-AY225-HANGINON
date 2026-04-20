# Amazon Product Insights Dashboard
**Group 7 - Hanginon (Student 1) & Castillo (Student 2)**

## Project Overview
This project is a collaborative web-based data science dashboard built with Vanilla JavaScript and Python. It analyzes a randomized sample of 3,000 e-commerce products extracted from the **Amazon Products Sales Dataset 2023**. The dashboard dynamically computes summary statistics, applies filters, and visualizes the relationships between product pricing, ratings, and review counts.

## Division of Labor

**Student 1 (Hanginon - Repo Owner)**
* **Data Engine:** Built `preprocess.py` to extract, clean (remove ₹ and commas), and randomize 3,000 products from the raw 184MB CSV file into a lightweight JavaScript array.
* **UI Integration:** Adapted the base HTML/CSS template to fit the e-commerce theme.
* **Interactive Table:** Implemented `loadDataset()`, `renderTable()`, and search/sort filtering functionality.
* **Summary Stats:** Programmed logic to calculate Average Rating, Most Reviewed Product, Highly Rated Pass Rate, and Average Discount Price.

**Student 2 (Castillo - Collaborator)**
* **Visualizations:** Implemented Chart.js to render a Top 10 Products Bar Chart, an Attendance vs. Score Scatter Plot (adapted for Price vs. Rating), and a Doughnut Chart for Grade distributions.
* **Deep Statistical Analysis:** Programmed algorithms for Standard Deviation, Variance, Pearson Correlation, and Linear Regression.
* **Insights:** Developed the data narrative and automated statistical readout panels.

## How to Run the Project (Local Setup)
To view the dashboard and run the code locally:

1. **Clone the repository:**
   `git clone https://github.com/UPH-H-F/DAALab-AY225-HANGINON.git`
2. **Navigate to the project folder:**
   `cd FINALS-PROJECT`
3. **Launch the Dashboard:**
   Simply double-click `index.html` to open it in any modern web browser. No local server is required as the data is loaded via `amazon_sample_3000.js`.

*(Optional) To rerun the data preprocessing:*
1. Ensure you have Python installed.
2. Install dependencies: `pip install -r requirements.txt`
3. Place the `Amazon-Products.csv` file inside the `raw_data/` folder.
4. Run the script: `python preprocess.py`