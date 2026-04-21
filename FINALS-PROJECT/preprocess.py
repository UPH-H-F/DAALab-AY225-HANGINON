import pandas as pd
import json
import re

# Helper function to strip ₹ symbols and commas, converting to pure numbers
def clean_number(x):
    if pd.isna(x): 
        return None
    # Remove anything that isn't a digit or a decimal point
    val = re.sub(r'[^\d.]', '', str(x))
    return float(val) if val else None

def main():
    # 1. Load the raw Kaggle dataset
    # Ensure 'Amazon-Products.csv' is inside the 'raw data' folder
    print("Loading dataset...")
    try:
        df = pd.read_csv('raw data/Amazon-Products.csv', low_memory=False)
    except FileNotFoundError:
        print("Error: 'raw data/Amazon-Products.csv' not found. Please check your folder structure.")
        return

    # Handle variations in column names from the raw data
    if 'no of ratings' in df.columns:
        df.rename(columns={'no of ratings': 'no_of_ratings'}, inplace=True)

    # 2. Select the required columns (Including main_category and sub_category)
    columns_to_keep = [
        'name', 'main_category', 'sub_category', 
        'ratings', 'no_of_ratings', 'discount_price', 'actual_price'
    ]
    
    # Ensure only existing columns are selected
    columns_to_keep = [c for c in columns_to_keep if c in df.columns]
    df = df[columns_to_keep]

    # 3. Clean the numerical columns
    print("Cleaning numbers and currency...")
    if 'ratings' in df.columns:
        df['ratings'] = df['ratings'].apply(clean_number)
    if 'no_of_ratings' in df.columns:
        df['no_of_ratings'] = df['no_of_ratings'].apply(clean_number)
    if 'discount_price' in df.columns:
        df['discount_price'] = df['discount_price'].apply(clean_number)
    if 'actual_price' in df.columns:
        df['actual_price'] = df['actual_price'].apply(clean_number)

    # 3.5 REMOVE ALL ROWS WITH ANY BLANK CELLS
    print("Filtering out products with any missing values...")
    df.dropna(inplace=True)

    # 4. Extract a random sample of exactly 3,000 products
    print("Sampling 3000 records...")
    sample_size = min(3000, len(df))
    df_sampled = df.sample(n=sample_size, random_state=42) # random_state ensures consistent sampling

    # Replace Pandas NaN with Python None so JSON outputs it cleanly as 'null'
    df_sampled = df_sampled.where(pd.notnull(df_sampled), None)

    # 5. Export to JavaScript format
    print("Exporting to amazon_sample_3000.js...")
    records = df_sampled.to_dict(orient='records')
    
    with open('amazon_sample_3000.js', 'w', encoding='utf-8') as f:
        f.write("const RAW_DATA = \n")
        json.dump(records, f, indent=2)
        f.write(";\n")
        
    print("✅ Success! 'amazon_sample_3000.js' has been updated with strictly complete data.")

if __name__ == "__main__":
    main()