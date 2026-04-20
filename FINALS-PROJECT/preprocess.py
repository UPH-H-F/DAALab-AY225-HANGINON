import os
import json
import pandas as pd

def preprocess_single_amazon_file(input_filepath, output_filepath):
    target_columns =['name', 'ratings', 'no_of_ratings', 'discount_price', 'actual_price']
    
    print(f"Reading {input_filepath}...")
    try:
        # 1 & 2. Load the file, select columns, enforce utf-8, and skip corrupted rows
        df = pd.read_csv(
            input_filepath, 
            usecols=lambda c: c in target_columns, 
            encoding='utf-8', 
            on_bad_lines='skip',
            low_memory=False
        )
    except FileNotFoundError:
        print(f"Error: Could not find the file at {input_filepath}")
        return
    except Exception as e:
        print(f"Failed to read CSV: {e}")
        return

    print(f"Initial Dataset Shape: {df.shape[0]} rows.")
    print("Cleaning data and converting formats...")
    
    # 3. Clean prices: Remove '₹' and ',' then convert to numeric
    for col in ['discount_price', 'actual_price']:
        df[col] = df[col].astype(str).str.replace('₹', '', regex=False)
        df[col] = df[col].str.replace(',', '', regex=False)
        df[col] = pd.to_numeric(df[col], errors='coerce')

    # Clean no_of_ratings: Remove ',' and convert to numeric
    df['no_of_ratings'] = df['no_of_ratings'].astype(str).str.replace(',', '', regex=False)
    df['no_of_ratings'] = pd.to_numeric(df['no_of_ratings'], errors='coerce')
    
    # Clean ratings: convert to numeric
    df['ratings'] = pd.to_numeric(df['ratings'], errors='coerce')

    # 4. Handle missing, null, or corrupted rows via dropna()
    df = df.dropna(subset=target_columns)
    
    # Convert no_of_ratings to strict integer
    df['no_of_ratings'] = df['no_of_ratings'].astype(int)

    print(f"Shape after dropping missing/corrupted rows: {df.shape[0]} rows.")

    # 5. Extract a random sample of 3,000 rows
    print("Extracting a random sample of 3,000 products...")
    
    # We use min() just in case the cleaned dataset ends up being smaller than 3000 rows
    sample_size = min(3000, df.shape[0])
    
    # random_state=42 guarantees you get the same "random" 3000 rows every time you run this. 
    # Remove 'random_state=42' if you want a different sample on every execution.
    random_sample_df = df.sample(n=sample_size, random_state=42)

    # Convert DataFrame to a list of dictionaries
    records = random_sample_df.to_dict(orient='records')

    # Export to formatted Javascript array
    print("Formatting and exporting to JavaScript file...")
    js_content = "const RAW_DATA = " + json.dumps(records, indent=4, ensure_ascii=False) + ";"
    
    with open(output_filepath, 'w', encoding='utf-8') as f:
        f.write(js_content)
        
    print(f"Success! Exported {len(records)} random items to {output_filepath}")


if __name__ == "__main__":
    # Dynamically find the script's directory so it works from anywhere
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    
    # Point directly to the single compiled CSV file
    INPUT_FILE = os.path.join(BASE_DIR, "raw_data", "Amazon-Products.csv")
    
    # Output file (saved in the same directory as this script)
    OUTPUT_FILE = os.path.join(BASE_DIR, "amazon_sample_3000.js")
    
    preprocess_single_amazon_file(INPUT_FILE, OUTPUT_FILE)