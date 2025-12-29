# Tasks: Chat History and Streaming Responses

**Input**: Design documents from `specs/003-chat-history-and-streaming/`
**Prerequisites**: plan.md (required), spec.md (required)

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel
- **[Story]**: Which user story this task belongs to (e.g., US1, US2)

## Phase 1: Foundational - Database and Backend Models

**Purpose**: Update the database schema and backend models to support chat history.

- [x] T001 Add a `ChatMessage` SQLAlchemy model to a new file `backend/src/models/chat.py`.
- [x] T002 Generate a new Alembic migration script for the `chat_messages` table: `alembic revision --autogenerate -m "Add chat_messages table"`
- [x] T003 Apply the migration to the Neon database: `alembic upgrade head`

---

## Phase 2: User Story 1 - View Past Conversations (Priority: P1)

**Goal**: Save and retrieve user chat history from the database.

### Implementation for User Story 1

- [x] T004 Create a new file `backend/src/api/history.py` to define an endpoint for fetching chat history. (Backend)
- [x] T005 Implement a GET endpoint in `backend/src/api/history.py` that retrieves all messages for the authenticated user from the `chat_messages` table. (Backend)
- [x] T006 Register the history router in `backend/main.py`. (Backend)
- [x] T007 Modify `components/chatbot.tsx` to fetch chat history from the `/api/history` endpoint when the component mounts for a logged-in user. (Frontend)
- [ ] T008 Update the `handleSendMessage` function in `chatbot.tsx` to save both the user's message and the assistant's final response to the database via a new endpoint. (This will be adjusted for streaming in the next phase).

---

## Phase 3: User Story 2 - Real-Time Streaming Responses (Priority: P1)

**Goal**: Refactor the chatbot to handle real-time streaming of AI responses.

### Implementation for User Story 2

- [x] T009 Update `backend/src/core/rag_service.py` to call the Gemini API in streaming mode and `yield` the response chunks. (Backend)
- [x] T010 Modify the `/chat` endpoint in `backend/main.py` to return a `StreamingResponse` that calls the refactored RAG service. (Backend)
- [x] T011 Create a new endpoint (e.g., `/api/save_message`) to save a complete message pair (user + assistant) to the database *after* a stream is finished. (Backend)
- [x] T012 Refactor `handleSendMessage` in `components/chatbot.tsx` to handle a streaming `fetch` response, updating the UI as chunks arrive. (Frontend)
- [x] T013 After the stream is complete on the frontend, make a final call to the `/api/save_message` endpoint to persist the full conversation. (Frontend)
- [x] T014 Remove any non-streaming logic from `handleSendMessage`. (Frontend)

---

## Phase 4: Polish & Cross-Cutting Concerns

**Purpose**: Finalize and clean up the implementation.

- [x] T015 Ensure that the initial message display in the chatbot gracefully handles loading the chat history.
- [x] T016 Review and refactor all new code for clarity, performance, and adherence to best practices.
- [x] T017 Update the project `README.md` to reflect the new chat history and streaming features.

---

## Dependencies & Execution Order

-   **Phase 1 (Database)** must be completed first.
-   **Phase 2 (History)** depends on Phase 1.
-   **Phase 3 (Streaming)** can be worked on in parallel with Phase 2, but the final saving logic (T013) depends on the history endpoint being ready.
-   **Phase 4 (Polish)** should be done last.
