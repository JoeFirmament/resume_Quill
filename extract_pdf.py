from pypdf import PdfReader

try:
    reader = PdfReader("我的简历-乔宇.pdf")
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    
    print("--- START EXTRACTED TEXT ---")
    print(text)
    print("--- END EXTRACTED TEXT ---")
except Exception as e:
    print(f"Error extracting text: {e}")
