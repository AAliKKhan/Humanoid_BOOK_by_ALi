# Implementation Plan: RAG Chatbot

**Branch**: `001-rag-book-chatbot` | **Date**: 2025-12-20 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `specs/001-rag-book-chatbot/spec.md`

## Summary

This plan outlines the implementation of a Retrieval-Augmented Generation (RAG) chatbot. The primary requirement is to answer user questions based on the content of a book. The technical approach involves a FastAPI backend that uses Cohere for embeddings, Qdrant Cloud for vector storage and retrieval, and the Gemini 1.5 Flash model for generating answers.

## Technical Context

**Language/Version**: Python 3.12+
**Primary Dependencies**: FastAPI, Uvicorn, Qdrant-client, Cohere, Google-generativeai, Langchain
**Storage**: Qdrant Cloud for vector embeddings.
**Testing**: Pytest
**Target Platform**: Cloud-hosted backend server (platform-agnostic container).
**Project Type**: Web Application (Backend service for an existing Next.js frontend).
**Performance Goals**: p95 latency for chat responses under 5 seconds.
**Constraints**: Must integrate with the existing Next.js frontend's chatbot UI.
**Scale/Scope**: Initial scope is for a single book and a moderate number of concurrent users.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

-   **I. Modular API-First Backend**: **PASS**. The plan specifies a FastAPI backend with a clear API contract (`openapi.json`), separating it from the frontend and other services.
-   **II. Secure by Design**: **PASS**. The plan requires all API keys and secrets to be managed via a `.env` file, with no hardcoded values.
-   **III. Retrieval-Augmented Generation (RAG) Architecture**: **PASS**. The core architecture is explicitly RAG, with retrieval from Qdrant preceding generation by Gemini.
-   **IV. Test-Driven Development (TDD)**: **PASS**. The plan includes a `tests/` directory structure and specifies `pytest` as the testing framework, in line with TDD principles.
-   **V. Clear Dependency Management**: **PASS**. The project uses `uv` and a `requirements.txt` file, ensuring a reproducible environment.

## Project Structure

### Documentation (this feature)

```text
specs/001-rag-book-chatbot/
├── plan.md              # This file
├── research.md          # Technology decisions
├── data-model.md        # Data entity definitions
├── quickstart.md        # Setup and run instructions
├── contracts/           # API contract
│   └── openapi.json
└── tasks.md             # (To be created by /sp.tasks)
```

### Source Code (repository root)

```text
/
├── app/                  # Existing Next.js frontend
├── backend/              # New FastAPI backend
│   ├── .env              # Environment variables (MUST be created)
│   ├── .gitignore        # Git ignore for backend
│   ├── requirements.txt  # Python dependencies
│   ├── main.py           # FastAPI app entrypoint
│   ├── ingest.py         # Data ingestion script
│   └── src/
│       ├── core/         # Core logic (embedding, qdrant interaction, llm calls)
│       └── models/       # Pydantic models for API
└── tests/                # Backend tests
    ├── integration/
    └── unit/

```

**Structure Decision**: The chosen structure is a hybrid. The root of the repository contains the existing Next.js frontend in the `app/` directory and other project-wide files. The new backend is self-contained within the `backend/` directory. This provides a clear separation of concerns between the frontend and the new backend service, aligning with the "Modular API-First Backend" principle.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| *None*      | *N/A*        | *N/A*                                 |