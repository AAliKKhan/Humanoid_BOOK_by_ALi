<!--
---
Sync Impact Report:
  - Version change: 1.1.0 → 1.2.0
  - Added sections:
    - IX. Stateful User Experience
    - X. Performant Interfaces
---
-->
# Book RAG Chatbot Constitution

## Core Principles

### I. Modular API-First Backend
The backend will be built as a modular service using FastAPI. It will interact with other components (Qdrant, Cohere, Gemini) via clearly defined API contracts. This promotes separation of concerns and independent testability.

### II. Secure by Design
All secrets, API keys, and environment-specific configurations MUST be managed via environment variables and a `.env` file. No secrets shall be hardcoded or committed to version control. The `.gitignore` file must be configured to exclude `.env` files.

### III. Retrieval-Augmented Generation (RAG) Architecture
The primary mechanism for answering user queries is Retrieval-Augmented Generation. The system MUST first retrieve relevant context from the Qdrant vector database before using the Gemini model to generate a final response. This ensures answers are grounded in the provided book content.

### IV. Test-Driven Development (TDD)
New features and bug fixes should, whenever possible, follow a Test-Driven Development approach. Write a failing test that captures the requirement, then write the code to make the test pass, and finally refactor. A high level of test coverage is expected.

### V. Clear Dependency Management
The project's Python dependencies are managed using `uv` and a `requirements.txt` file. This ensures a reproducible and consistent development environment. All new dependencies must be added to `requirements.txt`.

### VI. Secure Authentication (Clerk)
User authentication MUST be handled by a specialized, secure third-party provider, **Clerk**. Clerk will manage user identities, sessions, and issue JWTs. All authentication-related logic, including sign-up, sign-in, and session management, MUST rely on Clerk's services.

### VII. Data Persistence (Neon)
User-specific data and persistent application state MUST be stored in a PostgreSQL database provided by **Neon**. The backend will interact with this database to manage user profiles and other application-specific data.

### VIII. Custom UI / UX
Frontend user interfaces, particularly for authentication flows (sign-up, sign-in, user profile), MUST be custom-built to ensure a cohesive brand experience and specific design requirements. Clerk's flexible APIs and hooks will be utilized to integrate authentication functionality seamlessly with these custom UIs.

### IX. Stateful User Experience
The application MUST persist user-specific data, such as chat history, to provide a continuous and personalized experience across sessions. This enhances user engagement and makes the application feel more intelligent.

### X. Performant Interfaces
User interfaces SHOULD prioritize perceived performance. For long-running operations like AI model generation, responses MUST be streamed to the client to provide immediate feedback and create a more dynamic and responsive user experience.

## Technology Stack

The project will utilize the following technical stack:
- **Backend Framework**: FastAPI
- **Package Management**: uv
- **Vector Database**: Qdrant Cloud
- **Embedding Model**: Cohere
- **Generative Model**: Google Gemini Series (e.g., 2.5 Flash)
- **Frontend**: Next.js (existing)
- **Authentication**: Clerk
- **User Database**: Neon (PostgreSQL)

## Development Workflow

Development shall follow a feature-branching model. All new work should be done on a separate branch and merged into the main branch via a pull request. Code reviews are required before merging to ensure compliance with this constitution.

## Governance

This Constitution is the authoritative source for project standards and practices. All development work, code reviews, and architectural decisions must align with these principles. Amendments to this constitution require documentation and team consensus.

**Version**: 1.2.0 | **Ratified**: 2025-12-20 | **Last Amended**: 2025-12-23