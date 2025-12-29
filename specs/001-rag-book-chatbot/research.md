# Research & Decisions for RAG Chatbot

This document records the key technology decisions for the RAG Chatbot feature.

## 1. Backend Framework

-   **Decision**: FastAPI
-   **Rationale**: The user explicitly requested a FastAPI backend. It is a modern, fast (high-performance) web framework for building APIs with Python 3.7+ based on standard Python type hints. Its simplicity, speed, and automatic interactive documentation generation make it a strong choice for this project.
-   **Alternatives considered**: Flask, Django. FastAPI was chosen based on the user's initial request.

## 2. Vector Database

-   **Decision**: Qdrant Cloud
-   **Rationale**: The user specified Qdrant Cloud. Qdrant is a vector database built for similarity search, making it ideal for the "retrieval" part of our RAG architecture. A cloud-hosted solution simplifies setup and maintenance.
-   **Alternatives considered**: Pinecone, Weaviate. Qdrant was chosen based on the user's initial request.

## 3. Embedding Model

-   **Decision**: Cohere (`embed-english-v3.0`)
-   **Rationale**: The user requested Cohere. The `embed-english-v3.0` model is a powerful and popular choice for generating high-quality text embeddings for English content. This is a critical component for ensuring the semantic search in Qdrant is accurate.
-   **Alternatives considered**: OpenAI `text-embedding-ada-002`, other open-source sentence-transformer models. Cohere was chosen based on the user's initial request.

## 4. Generative Model

-   **Decision**: Gemini 1.5 Flash
-   **Rationale**: The user specified Gemini 1.5 Flash. This is a powerful and cost-effective large language model from Google, suitable for the "generation" part of our RAG architecture. It can take the user's query and the retrieved context to synthesize a coherent and accurate answer.
-   **Alternatives considered**: Other Gemini models, OpenAI's GPT series. Gemini 1.5 Flash was chosen based on the user's initial request.

## 5. Python Environment Management

-   **Decision**: uv
-   **Rationale**: The user specified `uv`. It is an extremely fast Python package installer and resolver, written in Rust. It's a modern replacement for `pip` and `venv` and will provide a fast and reliable development environment.
-   **Alternatives considered**: `venv` + `pip`, `conda`, `poetry`. `uv` was chosen based on the user's initial request.
