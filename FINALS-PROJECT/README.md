# Amazon Products Insights Dashboard
**Group 7 - Hanginon (Student 1) & Castillo (Student 2)**

**Dataset Source:** [Amazon Products Sales Dataset 2023](https://www.kaggle.com/datasets/lokeshparab/amazon-products-dataset)

## How to Run and Use the Dashboard
1. **To view live:** ...github.io/
2. **To view locally:** Clone the GitHub repository to your local machine and open `index.html` in any modern web browser.
3. **Using the Dashboard:**
   * **Filtering & Sorting:** Use the search bar at the top of the data table to filter by specific product names, or use the dropdown menu to sort the 3,000 products by Name, Rating, Reviews, or Discount Price. **You must click the "Apply" button to trigger the search and update the table.**
   * **Pagination:** Navigate through the dataset using the First, Previous, Next, and Last buttons, or jump directly to a page using the input box. Hover over any long product name in the table to reveal the full title.
   * **Visualizations:** Scroll down to view the charts. You can hover over the Top 10 Most Reviewed bar chart, the Price Correlation scatter plot, and the Rating Distribution doughnut chart to see dynamic tooltips and percentages.

## Dataset Selection
We chose the `Amazon-Products.csv` file because, as stated in the dataset documentation, "This CSV file is having the data 300K+ All Combined Amazon Product's Details". This massive dataset spans 142 main categories and provides the exact numerical and categorical features we needed for our analysis, including product name, sub-category, ratings, number of ratings, discount price, and actual price.

## Data Preprocessing (`preprocess.py`)
Because the raw data contained over 300,000 rows, it was too large to render dynamically in a browser. We used a custom `preprocess.py` script on the raw data to extract a manageable **3,000 product sample size**. 

**How to use `preprocess.py`:**
1. Download the full dataset and place the `Amazon-Products.csv` file inside the `raw data/` directory.
2. Install the required Python dependencies by running `pip install -r requirements.txt` in your terminal.
3. Run the `preprocess.py` script in your terminal or Python environment.
4. The script will automatically clean the data by stripping out products that have missing ratings (`NaN` / Not a Number).
5. The script will randomly select and output the cleaned 3,000 product sample directly into the `amazon_sample_3000.js` file, ensuring our JavaScript statistical engine only processes valid, clean data.

## Data-Driven Insights
The Data-Driven Insights presented on the dashboard are **manual interpretations** derived entirely from the specific **3,000 product sample size** we used. Rather than relying on external assumptions, these insights are based strictly on the data analysis and statistical calculations generated directly from this clean subset of data. This ensures that the narrative on the dashboard perfectly aligns with the mathematical patterns, variance, and correlations calculated by our custom JavaScript engine.
