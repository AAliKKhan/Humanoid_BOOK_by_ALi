# Data Model for Chat History

This document defines the new `ChatMessage` entity for persisting user conversations in the Neon (PostgreSQL) database.

## 1. Chat Message

-   **Table Name:** `chat_messages`
-   **Description:** Stores a single message (either from the user or the assistant) as part of a conversation.
-   **Fields:**
    *   `id`: (Primary Key, UUID) The unique identifier for the message.
    *   `user_id`: (Foreign Key, UUID, Not Null) The `id` of the user from the `users` table to whom this message belongs. This links the message to a specific user.
    *   `role`: (String, Not Null) The role of the message's author. Will be either `'user'` or `'assistant'`.
    *   `content`: (Text, Not Null) The text content of the chat message.
    *   `created_at`: (Timestamp, Default: `NOW()`) Timestamp when the message record was created.

## 2. Relationships

-   **User to ChatMessage:** A one-to-many relationship. One user from the `users` table can have many `chat_messages`. The `chat_messages.user_id` field links back to the `users.id` field.
