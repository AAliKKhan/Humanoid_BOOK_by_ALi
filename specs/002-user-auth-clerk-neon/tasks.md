# Tasks: User Authentication with Clerk and Neon

**Input**: Design documents from `specs/002-user-auth-clerk-neon/`
**Prerequisites**: plan.md (required), spec.md (required for user stories)

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)

## Phase 1: Setup - Clerk and Neon Environment

**Purpose**: Configure Clerk and Neon accounts and set up initial environment variables.

- [x] T001 Create a Clerk account and a new Clerk Application. (Manual: User Action)
- [x] T002 Configure Clerk environment variables in root `.env.local` for Next.js. (Manual: User Action)
- [x] T003 Create a Neon project and obtain the database connection string. (Manual: User Action)
- [x] T004 Configure Neon database environment variable (`DATABASE_URL`) in `backend/.env`. (Manual: User Action)
- [x] T005 Install Clerk SDK for Next.js in the frontend project: `npm install @clerk/nextjs` (Frontend)
- [x] T006 Install necessary Python packages for backend database interaction and JWT validation: `uv pip install psycopg2-binary sqlalchemy python-jose python-multipart` (Backend)

---

## Phase 2: Foundational - Database and Middleware

**Purpose**: Set up the Neon database connection, define the user model, and implement Clerk middleware.

- [x] T007 Create `backend/src/database.py` for Neon database connection and SQLAlchemy session management.
- [x] T008 Create `backend/src/models/user.py` for the SQLAlchemy User model, mapping to the `users` table in Neon.
- [x] T009 Implement Alembic migrations for database schema management (initial migration to create `users` table).
- [x] T010 Run initial database migration to create the `users` table in Neon.
- [x] T011 Implement `app/middleware.ts` for Clerk authentication and routing protection. (Frontend)
- [x] T012 Wrap `app/layout.tsx` with `<ClerkProvider>` to enable Clerk in the Next.js application. (Frontend)

---

## Phase 3: User Story 1 - User Sign-Up and Access Protected Features (Priority: P1)

**Goal**: Enable new users to sign up via custom UI and access the protected AI features.

**Independent Test**: A new user can successfully sign up (email/password or social), log in, and then use the chatbot, "Ask Agent," and translation features.

### Implementation for User Story 1 (Frontend)

- [x] T013 Create `app/(auth)/sign-up/[[...sign-up]]/page.tsx` for the custom sign-up page. (Frontend)
- [x] T014 Implement custom sign-up UI in `app/(auth)/sign-up/[[...sign-up]]/page.tsx` using Clerk's `useSignUp` hook. (Frontend)
- [x] T015 Create `app/(auth)/sign-in/[[...sign-in]]/page.tsx` for the custom sign-in page. (Frontend)
- [x] T016 Implement custom sign-in UI in `app/(auth)/sign-in/[[...sign-in]]/page.tsx` using Clerk's `useSignIn` hook. (Frontend)
- [x] T017 Update global UI components (e.g., `components/header.tsx`) to conditionally render based on user login status (using Clerk's `useUser` or `SignedIn`/`SignedOut` components). (Frontend)
- [x] T018 Conditionally render/enable chatbot, Ask Agent, and translation features based on user authentication status. (Frontend)

### Implementation for User Story 1 (Backend - Clerk Webhook)

- [x] T019 Create `backend/src/api/webhooks.py` to handle Clerk webhooks.
- [x] T020 Implement webhook verification logic in `backend/src/api/webhooks.py` using `CLERK_WEBHOOK_SECRET`.
- [x] T021 Implement `user.created` webhook handler to create a new user record in the Neon `users` table (`backend/src/api/webhooks.py`).
- [x] T022 Implement `user.updated` webhook handler to update user details (e.g., email, name) in the Neon `users` table.
- [x] T023 Implement `user.deleted` webhook handler to delete user records from the Neon `users` table.
- [ ] T024 Register the webhook endpoint (`/webhooks/clerk`) in Clerk Dashboard. (Manual: User Action)

---

## Phase 4: User Story 2 - User Sign-In and Session Management (Priority: P1)

**Goal**: Ensure returning users can securely sign in and maintain their session. (Much of this is handled by Clerk's core, but frontend integration is key).

**Independent Test**: A registered user can successfully log in, close the browser, reopen it, and still be logged in.

### Implementation for User Story 2

- [x] T025 Ensure Clerk's session management is configured for persistence (usually default but verify). (Frontend - Configuration)
- [x] T026 Add a "Sign Out" option (e.g., in a user menu or header) that correctly calls Clerk's `signOut` function. (Frontend)
- [x] T027 Secure the backend `/chat` endpoint by implementing JWT validation using Clerk's public keys. (Backend `backend/src/api/auth.py` and `backend/main.py`)
- [x] T028 Update `backend/main.py` to apply the authentication middleware to the `/chat` endpoint.

---

## Phase 5: User Story 3 - User Profile Management (Priority: P2)

**Goal**: Provide a dedicated page for users to manage their account.

**Independent Test**: A logged-in user can navigate to `/user-profile` and update their password, profile information, or connect social accounts.

### Implementation for User Story 3

- [x] T029 Create `app/(auth)/user-profile/page.tsx` for the custom user profile page. (Frontend)
- [x] T030 Implement custom user profile UI in `app/(auth)/user-profile/page.tsx` using Clerk's `UserProfile` component or `useUser` and `useAuth` hooks to manage account details. (Frontend)
- [x] T031 Add navigation to the `/user-profile` page (e.g., from the header user menu). (Frontend)

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Enhance user experience, add error handling, and finalize documentation.

- [x] T032 Implement robust error handling and user feedback for all authentication flows (e.g., invalid credentials, network errors). (Frontend)
- [x] T033 Ensure all protected UI elements (chatbot, ask agent, translation) provide a clear call to action for logged-out users (e.g., "Sign in to use"). (Frontend)
- [x] T034 Update project-level `README.md` with instructions on setting up Clerk and Neon. (Documentation)
- [x] T035 Review and refactor all new authentication code for security best practices and maintainability.

---

## Dependencies & Execution Order

### Phase Dependencies

-   **Phase 1 (Setup)**: Must be completed first, involves manual user actions.
-   **Phase 2 (Foundational)**: Depends on Phase 1 completion.
-   **Phase 3 (User Story 1 - Sign-Up)**: Depends on Phase 2 completion.
-   **Phase 4 (User Story 2 - Sign-In)**: Depends on Phase 3 completion (signing up creates a user to sign in).
-   **Phase 5 (User Story 3 - Profile Management)**: Depends on Phase 4 completion.
-   **Phase 6 (Polish)**: Can run throughout or at the end.

### User Story Dependencies

-   **User Story 1 (P1)**: Sign-up is foundational for any user interaction.
-   **User Story 2 (P1)**: Sign-in requires a user to be signed up.
-   **User Story 3 (P2)**: Profile management requires a user to be signed in.

### Parallel Opportunities

-   Frontend UI tasks (e.g., creating sign-in/sign-up page layouts) can run in parallel with backend database setup tasks.
-   Clerk webhook handlers can be implemented while frontend auth components are being built.

---

## Implementation Strategy

### Incremental Delivery

1.  Complete Phase 1: Setup (User manually configures Clerk/Neon).
2.  Complete Phase 2: Foundational (Database schema, Clerk middleware).
3.  Complete Phase 3 (Sign-Up): Implement sign-up, webhook handling, and basic feature protection. Test end-to-end for new users.
4.  Complete Phase 4 (Sign-In): Implement sign-in, session management, and backend API protection. Test end-to-end for returning users.
5.  Complete Phase 5 (Profile Management): Implement user profile features.
6.  Complete Phase 6: Polish and finalize.

This phased approach ensures core authentication functionality is verified at each step before moving to more advanced features.
