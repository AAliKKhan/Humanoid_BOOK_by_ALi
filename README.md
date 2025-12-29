# Physical AI & Humanoid Robotics Website

This project is a comprehensive guide to Physical AI and Humanoid Robotics, featuring a RAG-based AI assistant.

## Features

-   **RAG Chatbot**: An AI assistant that answers questions based on the book's content.
- **Secure Authentication**: User sign-up, sign-in, and profile management powered by **Clerk**.
-   **Chat History**: Saves and loads your conversation history, providing a continuous experience.
-   **Streaming Responses**: AI answers are streamed in real-time for a more dynamic feel.
-   **Data Persistence**: User profiles and application state stored in **Neon** (Serverless PostgreSQL).
-   **Professional UI**: Built with Next.js, Tailwind CSS, and Lucide icons.

## Tech Stack

-   **Frontend**: Next.js, React, Tailwind CSS, Lucide Icons, Clerk SDK.
-   **Backend**: FastAPI, SQLAlchemy, Alembic, asyncpg, Cohere API, Google Gemini API, Qdrant Cloud.
-   **Database**: Neon (PostgreSQL).
-   **Vector DB**: Qdrant Cloud.

## Getting Started

### 1. Prerequisites

-   Node.js and npm/pnpm.
-   Python 3.9+ and `uv`.
-   Clerk Account.
-   Neon Account.
-   Qdrant Cloud Account.
-   Cohere API Key.
-   Google Gemini API Key.

### 2. Setup

#### a. Frontend (Next.js)

1.  Navigate to the root directory.
2.  Install dependencies:
    ```bash
    npm install --legacy-peer-deps
    ```
3.  Create a `.env.local` file and add your Clerk API keys:
    ```ini
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_...
    CLERK_SECRET_KEY=sk_live_...
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding # Redirect new sign-ups to onboarding
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding # Redirect new sign-ups to onboarding
    NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
    ```
    (Ensure `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` are from your Clerk app.)

#### b. Backend (FastAPI)

1.  Navigate to the `backend/` directory.
2.  Create a virtual environment and install dependencies:
    ```bash
    uv venv
    .venv\Scripts\activate
    uv pip install -r requirements.txt
    ```
3.  Create a `backend/.env` file and add your API keys and database URL:
    ```ini
    GOOGLE_API_KEY=...
    COHERE_API_KEY=...
    QDRANT_URL=...
    QDRANT_API_KEY=...
    QDRANT_COLLECTION_NAME=...
    CLERK_SECRET_KEY=sk_live_... # Your Clerk Secret Key for backend API access
    CLERK_WEBHOOK_SECRET=whsec_... # From Clerk Webhooks dashboard
    DATABASE_URL="postgresql+asyncpg://..." # Your Neon PostgreSQL connection string
    ```
4.  Run database migrations (This will create `users` and `chat_messages` tables, and add onboarding fields to `users`):
    ```bash
    .\.venv\Scripts\alembic.exe upgrade head
    ```
5.  Ingest book content (one-time setup):
    ```bash
    .\.venv\Scripts\python.exe ingest.py
    ```

#### c. Clerk Webhook Configuration (Manual)

1.  In your Clerk Dashboard, navigate to "Webhooks".
2.  Add a new endpoint.
3.  Set the **Endpoint URL** to your FastAPI backend's webhook endpoint (e.g., `http://localhost:8000/webhooks/clerk` during local development, or your deployed URL).
4.  Select the **Events** you want to subscribe to. At minimum, select:
    *   `user.created`
    *   `user.updated`
    *   `user.deleted`
5.  Copy the **Webhook Secret** and ensure it's in your `backend/.env` as `CLERK_WEBHOOK_SECRET`.


### 3. Running the Application

1.  **Start the Backend**:
    ```bash
    cd backend
    .\.venv\Scripts\python.exe -m uvicorn main:app --reload
    ```
2.  **Start the Frontend**:
    ```bash
    pnpm dev # or npm run dev
    ```

The application will be available at `http://localhost:3000`. The backend API docs are at `http://127.0.0.1:8000/docs`.

## License

MIT
