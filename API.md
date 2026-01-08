# API Reference — GreenCommit Waitlist

This document summarizes the primary server endpoints implemented in the app and their real request/response shapes. All endpoints are implemented under the Next.js App Router `src/app/api`.

Important: user creation and updates are handled by `next-auth` (Drizzle adapter) at `/api/auth/*`; there is no `POST /api/members` endpoint in the current codebase.

## GET /api/members
- Purpose: Return a (small) list of recent user records used for avatar groups.
- Behavior: The route at `src/app/api/members/route.ts` queries the `user` table and returns up to 6 rows ordered by `emailVerified` descending (newest first).
- Example response (JSON):

```json
[
  {
    "id": "uuid-or-text-id",
    "name": "Octocat",
    "email": "octo@github.com",
    "emailVerified": "2025-09-01T12:34:56.000Z",
    "image": "https://avatars.githubusercontent.com/u/1?v=4",
    "stripeCustomerId": null,
    "isActive": false
  }
]
```

Fields come directly from the `user` table defined in `src/lib/schema.ts`:
- `id`, `name`, `email`, `emailVerified`, `image`, `stripeCustomerId`, `isActive`.

## GET /api/hero-members
- Purpose: Return a curated/random set of members and a total count used by the hero UI.
- Behavior: Implemented in `src/app/api/hero-members/route.ts`. If a session exists the endpoint includes the current user plus random other users; otherwise it returns random users. It also returns the total user count.
- Example response (JSON):

```json
{
  "members": [
    {
      "id": "uuid-or-text-id",
      "name": "Octocat",
      "email": "octo@github.com",
      "emailVerified": null,
      "image": "https://avatars.githubusercontent.com/u/1?v=4",
      "stripeCustomerId": null,
      "isActive": true
    }
  ],
  "totalCount": 123
}
```

## Auth routes (`/api/auth/*`)

Authentication is provided by `next-auth` configured in `src/lib/auth.ts` with the Drizzle adapter.
- Routes: `/api/auth/signin`, `/api/auth/callback/github`, `/api/auth/signout`, etc.
- Behavior: NextAuth + DrizzleAdapter create and update user rows and manage provider accounts in the `account` table. Provider-specific identifiers (e.g., GitHub `providerAccountId`) live in the `account` table, not on the `user` table.

See `src/lib/schema.ts` for the concrete table fields (`users`, `accounts`, `sessions`, etc.).

## Notes / Integrator guidance
- There is currently no `POST /api/members` route; signups are performed via the GitHub OAuth flow handled by NextAuth. If you need a client-side signup endpoint (email-based or manual), add a `POST` route that calls `db.insert(...)` into `users`.
- The UI components (e.g., `src/components/avatar-count.tsx`) expect `/api/hero-members` to return `{ members, totalCount }`.
- Provider-specific data (GitHub id/login) is stored in the `account` table; join that table if you need provider IDs in API responses.

## Error responses

Routes currently return plain HTTP error statuses for unexpected failures. Consumers should handle non-2xx responses. Example pattern returned by the server for unexpected errors is a `500` with a plain text body; components catch and log errors before showing UI fallbacks.

## Example curl requests

```bash
curl -sS https://your-app.example.com/api/members | jq .
curl -sS https://your-app.example.com/api/hero-members | jq .
```
