# Quickstart Guide: User Authentication with Clerk and Neon

This guide provides instructions on how to set up Clerk and Neon for user authentication and data persistence, and how to integrate them into your project.

## 1. Prerequisites

-   Clerk Account (clerk.com)
-   Neon Account (neon.tech)
-   Project set up with Next.js and FastAPI.

## 2. Clerk Setup

### a. Create a Clerk Application

1.  Go to [Clerk](https://clerk.com/) and create an account or sign in.
2.  Create a new application.
3.  Configure your desired authentication strategies (Email/Password, Google, GitHub, etc.) in the Clerk Dashboard under "User Management" -> "Authentication".
4.  Set your application name and choose "Next.js" as your frontend framework.

### b. Configure Clerk Environment Variables

You will need the following API keys from your Clerk application, which can be found in your Clerk Dashboard under "API Keys".

Add these to your **root `.env.local`** file (for Next.js):

```ini
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_YOUR_PUBLISHABLE_KEY
CLERK_SECRET_KEY=sk_live_YOUR_SECRET_KEY
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

And these to your **`backend/.env`** file (for FastAPI):

```ini
CLERK_WEBHOOK_SECRET=whsec_YOUR_WEBHOOK_SECRET
```
*The `CLERK_WEBHOOK_SECRET` is found under "Webhooks" in your Clerk Dashboard.*

### c. Configure Clerk Webhook

1.  In your Clerk Dashboard, navigate to "Webhooks".
2.  Add a new endpoint.
3.  Set the **Endpoint URL** to your FastAPI backend's webhook endpoint (e.g., `http://localhost:8000/webhooks/clerk` during local development, or your deployed URL).
4.  Select the **Events** you want to subscribe to. At minimum, select:
    *   `user.created`
    *   `user.updated`
    *   `user.deleted`
5.  Copy the **Webhook Secret** and add it to your `backend/.env` file as `CLERK_WEBHOOK_SECRET`.

## 3. Neon Database Setup

### a. Create a Neon Project

1.  Go to [Neon](https://neon.tech/) and create an account or sign in.
2.  Create a new project.
3.  Note down your database connection string. This will be a `postgres://` URL.

### b. Configure Neon Environment Variable

Add your Neon database connection string to your **`backend/.env`** file:

```ini
DATABASE_URL="postgresql://user:password@host/database_name"
```
*Ensure you use the connection string provided by Neon.*

## 4. Database Schema Migration

Run the database migration script to create the `users` table in your Neon database. (Details of this script will be provided in the implementation tasks).

## 5. Running the Backend Server

Ensure your FastAPI backend is running:

```bash
cd backend
.\.venv\Scripts\python.exe -m uvicorn main:app --reload
```

## 6. Running the Frontend Server

Ensure your Next.js frontend is running:

```bash
pnpm dev # or npm run dev
```

## 7. Testing Authentication

-   Navigate to your frontend application's sign-in/sign-up pages (e.g., `http://localhost:3000/sign-in`).
-   Test the sign-up and sign-in flows using both email/password and social providers (if configured).
-   Verify that once logged in, you can access protected features (chatbot, ask agent, translation).
-   Check the Neon database to confirm new user records are created after sign-up.
