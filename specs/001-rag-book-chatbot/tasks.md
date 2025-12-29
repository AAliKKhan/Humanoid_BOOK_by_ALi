# Tasks: RAG Chatbot

**Input**: Design documents from `specs/001-rag-book-chatbot/`
**Prerequisites**: plan.md (required), spec.md (required for user stories)

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)

## Phase 1: Setup

**Purpose**: Project initialization and basic structure for the backend.

- [x] T001 Create `backend/src/` directory.
- [x] T002 [P] Create `backend/src/core/` directory for RAG pipeline logic.
- [x] T003 [P] Create `backend/src/models/` directory for Pydantic models.
- [x] T004 [P] Create empty `backend/src/__init__.py`, `backend/src/core/__init__.py`, `backend/src/models/__init__.py` files.
- [x] T005 Create `backend/tests/` directory.
- [x] T006 [P] Create `backend/tests/unit/` and `backend/tests/integration/` directories.
- [x] T007 [P] Create empty `backend/tests/__init__.py`, `backend/tests/unit/__init__.py`, `backend/tests/integration/__init__.py` files.

---

## Phase 2: Foundational (Data Ingestion)

**Purpose**: Build the script to process and embed book content into the vector database.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [x] T008 Create `backend/ingest.py` file for the data ingestion script.
- [x] T009 In `ingest.py`, implement logic to read the book's markdown content from `app/book/page.tsx`.
- [x] T010 [P] In a new file `backend/src/core/text_splitter.py`, implement a function to split markdown text into semantic chunks using `langchain`.
- [x] T011 [P] In a new file `backend/src/core/embedding_client.py`, implement a client to connect to the Cohere API.
- [x] T012 [P] In a new file `backend/src/core/vector_store_client.py`, implement a client to connect to Qdrant Cloud and manage collection creation.
- [x] T013 Integrate text splitting, embedding, and vector store clients into `backend/ingest.py` to create and store embeddings.
- [x] T014 [P] Create `backend/tests/unit/test_text_splitter.py` to test the text chunking logic.
- [x] T015 Add environment variable loading using `python-dotenv` in `backend/ingest.py`.

**Checkpoint**: Data ingestion script is complete and book content is loaded into Qdrant.

---

## Phase 3: User Story 1 - Ask a Question about the Book (Priority: P1) 🎯 MVP

**Goal**: Implement the core RAG pipeline to answer user questions based on book content.
**Independent Test**: The `/chat` endpoint can be called with a question, and it returns a relevant answer derived from the book.

### Tests for User Story 1 ⚠️

- [x] T016 [P] [US1] In `backend/tests/unit/`, create `test_rag_service.py` with mock tests for the RAG service logic.
- [x] T017 [P] [US1] In `backend/tests/integration/`, create `test_chat_endpoint.py` to test the `/chat` endpoint with a live (or mocked) Qdrant instance.

### Implementation for User Story 1

- [x] T018 [P] [US1] In a new file `backend/src/models/chat.py`, create Pydantic models for the `/chat` endpoint's request (`ChatRequest`) and response (`ChatResponse`).
- [x] T019 [P] [US1] In a new file `backend/src/core/llm_client.py`, implement a client to connect to the Google Gemini API.
- [x] T020 [US1] In a new file `backend/src/core/rag_service.py`, implement the main RAG service. This service will:
    -   Take a user query.
    -   Embed the query using the `embedding_client`.
    -   Search for relevant context in Qdrant using the `vector_store_client`.
    -   Construct a prompt for the `llm_client`.
    -   Return the generated response from the `llm_client`.
- [x] T021 [US1] In `backend/main.py`, create the FastAPI app and the `/chat` endpoint which uses the `rag_service`.
- [x] T022 [US1] Add environment variable loading to `backend/main.py` and the service clients.

**Checkpoint**: The `/chat` endpoint is functional and delivers the core RAG experience.

---

## Phase 4: User Story 2 - Receive Clarification on Unclear Topics (Priority: P2)

**Goal**: Improve the chatbot to handle ambiguous queries by asking for clarification.
**Independent Test**: Sending an ambiguous query (e.g., "Tell me about the conflict") returns a clarifying question instead of a direct answer.

### Tests for User Story 2 ⚠️

- [x] T023 [P] [US2] In `backend/tests/unit/test_rag_service.py`, add tests for ambiguity detection logic.

### Implementation for User Story 2

- [x] T024 [US2] In `backend/src/core/rag_service.py`, modify the main service logic to include a step that detects if a query is too broad.
- [x] T025 [US2] If a query is ambiguous, the service should return a pre-defined clarifying question or generate one.

**Checkpoint**: The chatbot now handles ambiguous queries gracefully.

---

## Phase 5: User Story 3 - Get Information Beyond the Book (Priority: P3)

**Goal**: Ensure the chatbot informs the user when a question cannot be answered from the book's content.
**Independent Test**: Asking an out-of-scope question (e.g., "What is the weather today?") returns a message indicating the chatbot's limitations.

### Tests for User Story 3 ⚠️

- [x] T026 [P] [US3] In `backend/tests/unit/test_rag_service.py`, add tests for out-of-scope detection.

### Implementation for User Story 3

- [x] T027 [US3] In `backend/src/core/rag_service.py`, add logic to check the relevance score of retrieved documents from Qdrant.
- [x] T028 [US3] If no sufficiently relevant documents are found, the service should return a pre-defined message stating it cannot answer the question.

**Checkpoint**: The chatbot correctly identifies and responds to out-of-scope questions.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories.

- [x] T029 Add robust error handling middleware to the FastAPI app in `backend/main.py`.
- [ ] T030 [P] Implement structured logging throughout the backend services.
- [x] T031 [P] Create a `README.md` in the `backend/` directory with detailed setup and usage instructions.
- [x] T032 Review and refactor code for clarity, performance, and adherence to Python best practices.
- [x] T033 Validate the full user flow by running the `quickstart.md` guide.

---

## Dependencies & Execution Order

- **Foundational (Phase 2)** must be completed before any User Story phase can begin.
- **User Story 1 (Phase 3)** is the MVP and depends only on the Foundational phase.
- **User Story 2 & 3 (Phases 4 & 5)** depend on User Story 1 being complete, as they modify the core RAG service.
- **Polish (Phase 6)** can be worked on after the MVP is complete.
