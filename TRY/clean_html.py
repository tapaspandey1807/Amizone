import re
import os

try:
    with open('source.html', 'r', encoding='utf-8') as f:
        lines = f.readlines()

    # Remove "123: " prefix
    cleaned_lines = [re.sub(r'^\d+: ', '', line) for line in lines]
    full_text = ''.join(cleaned_lines)

    # Fix paths
    full_text = full_text.replace('href="/', 'href="')
    full_text = full_text.replace('src="/', 'src="')

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(full_text)
    print("Successfully processed index.html")
except Exception as e:
    print(f"Error: {e}")
