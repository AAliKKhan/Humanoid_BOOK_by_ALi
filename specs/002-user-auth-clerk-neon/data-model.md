# Data Model for User Authentication

This document defines the data models for user authentication and user profiles in the Neon (PostgreSQL) database.

## 1. User Profile

This table will store user-specific data that is managed by our application, linking back to Clerk's user ID.

-   **Table Name:** `users`
-   **Description:** Stores application-specific profile information for each user authenticated via Clerk.
-   **Fields:**
    *   `id`: (Primary Key, UUID) Unique identifier for the user in our database.
    *   `clerk_user_id`: (String, Unique, Not Null) The unique identifier for the user provided by Clerk. This will be used as a foreign key to Clerk's user management system.
    *   `email`: (String, Unique, Not Null) The primary email address of the user.
    *   `created_at`: (Timestamp, Default: `NOW()`) Timestamp when the user record was created.
    *   `updated_at`: (Timestamp, Default: `NOW()`, On Update: `NOW()`) Timestamp when the user record was last updated.
    *   `first_name`: (String, Nullable) User's first name, optionally provided during sign-up or via Clerk.
    *   `last_name`: (String, Nullable) User's last name, optionally provided during sign-up or via Clerk.
    *   `profile_picture_url`: (String, Nullable) URL to the user's profile picture.
    *   `metadata`: (JSONB, Nullable) Flexible field for storing additional, unstructured user data specific to our application.

## 2. Relationships

-   **Clerk User to Neon User:** A one-to-one relationship where each Clerk user ID (`clerk_user_id`) corresponds to exactly one `users` record in our Neon database. This link is established when a new user signs up via Clerk, and a webhook triggers the creation of the Neon record.
