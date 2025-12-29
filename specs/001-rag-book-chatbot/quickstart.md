# Quickstart Guide: RAG Chatbot Backend

This guide provides instructions on how to set up and run the RAG chatbot's FastAPI backend.

## 1. Prerequisites

-   Python 3.9+
-   `uv` installed (`pip install uv`)
-   Access to the project's root directory.

## 2. Setup

### a. Navigate to the Backend Directory

```bash
cd backend
```

### b. Create a Virtual Environment

Use `uv` to create and activate a virtual environment.

```bash
uv venv
source .venv/bin/activate  # On Linux/macOS
.venv\Scripts\activate    # On Windows
```

### c. Install Dependencies

Install all required packages from `requirements.txt`.

```bash
uv pip install -r requirements.txt
```

### d. Configure Environment Variables

Create a `.env` file in the `backend` directory by copying the `.env.example` file (if it exists) or creating a new one. Fill in the required credentials:

```ini
# backend/.env

GOOGLE_API_KEY="YOUR_GOOGLE_API_KEY"
COHERE_API_KEY="YOUR_COHERE_API_KEY"
QDRANT_URL="YOUR_QDRANT_CLOUD_URL"
QDRANT_API_KEY="YOUR_QDRANT_API_KEY"
QDRANT_COLLECTION_NAME="your_chosen_collection_name"
```

**Note**: You must replace the placeholder values with your actual credentials.

## 3. Data Ingestion

Before running the chatbot, you need to process the book content and load it into your Qdrant database.

Run the ingestion script (the exact name may vary, e.g., `ingest.py`):

```bash
python ingest.py
```

This script will read the book content, chunk it, create embeddings using Cohere, and upload them to Qdrant. This only needs to be done once, or whenever the book content changes.

## 4. Running the Backend Server

Once the setup is complete and the data has been ingested, you can start the FastAPI server.

```bash
uvicorn main:app --reload
```

-   `main`: The file `main.py`.
-   `app`: The FastAPI object `app` in `main.py`.
-   `--reload`: Makes the server restart after code changes.

The API will be available at `http://127.0.0.1:8000`.

## 5. Accessing the API Docs

FastAPI automatically generates interactive API documentation. Once the server is running, you can access it at:

-   **Swagger UI**: `http://127.0.0.1:8000/docs`
-   **ReDoc**: `http://127.0.0.1:8000/redoc`

You can use this interface to test the `/chat` endpoint directly.
