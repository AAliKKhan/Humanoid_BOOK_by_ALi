# Implementation Plan: Chat History and Streaming Responses

**Branch**: `003-chat-history-and-streaming` | **Date**: 2025-12-23 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `specs/003-chat-history-and-streaming/spec.md`

## Summary

This plan outlines the implementation of two major user experience enhancements: persisting user chat history in the Neon database and refactoring the backend to stream AI responses to the frontend for a more interactive, real-time feel. This will make the chatbot's functionality align with market-ready expectations.

## Technical Context

**Backend Framework**: FastAPI (Python)
**Database**: Neon (PostgreSQL)
**Data Access (Backend)**: SQLAlchemy
**Backend Streaming**: FastAPI `StreamingResponse`
**Frontend Streaming**: `ReadableStream` API (`fetch`)
**Core Task**: Modify the `/chat` endpoint to be a streaming endpoint, save conversation history to the database post-stream, and create a new `/history` endpoint to retrieve past messages.

## Constitution Check

-   **IX. Stateful User Experience**: **PASS**. The plan directly addresses this by designing a `chat_messages` table in the Neon database to persist conversations, providing a stateful experience for logged-in users.
-   **X. Performant Interfaces**: **PASS**. The plan specifies refactoring the FastAPI backend to use `StreamingResponse` and the frontend to consume a stream, directly fulfilling the requirement for a performant, real-time interface during AI generation.

## Project Structure

### Documentation (this feature)

```text
specs/003-chat-history-and-streaming/
├── plan.md              # This file
├── data-model.md        # ChatMessage data model
└── tasks.md             # (To be created by /sp.tasks)
```

### Source Code (repository root)

```text
/
├── app/
│   └── book/
│       └── page.tsx      # (Minor changes if any, chatbot is self-contained)
├── backend/
│   ├── src/
│   │   ├── models/
│   │   │   └── chat.py   # Add ChatMessage model
│   │   ├── api/
│   │   │   └── history.py # New endpoint to fetch chat history
│   │   └── core/
│   │       └── rag_service.py # Major changes to support streaming and history saving
│   └── main.py           # Add history router
├── components/
│   └── chatbot.tsx       # Major changes to handle streaming responses and history fetching
└── ...
```

**Structure Decision**: The changes are localized to the existing `backend` and `components` directories. A new `chat.py` model will be added in the backend, along with a new `history.py` API endpoint. The most significant logic changes will occur within the existing `rag_service.py` (backend) and `chatbot.tsx` (frontend) to handle the new streaming and data persistence requirements.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| *None*      | *N/A*        | *N/A*                                 |