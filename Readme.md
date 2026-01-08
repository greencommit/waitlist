# GreenCommit Waitlist

[![Build Status](https://img.shields.io/github/actions/workflow/status/greencommit/waitlist/ci.yml?branch=main)](https://github.com/greencommit/waitlist/actions)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)
[![Contributors](https://img.shields.io/github/contributors/greencommit/waitlist)](https://github.com/greencommit/waitlist/graphs/contributors)
[![Stars](https://img.shields.io/github/stars/greencommit/waitlist?style=social)](https://github.com/greencommit/waitlist/stargazers)

<p align="center">
  <a href="https://greencommit-kappa.vercel.app/en">
    <img src="/public/opengraph-image.png" alt="GreenCommit" width="760">
  </a>
</p>

GreenCommit is a modern, developer-focused waitlist application that helps open-source maintainers and contributors sign up for early access, discover community activity, and validate interest before launch. This repository contains a responsive Next.js app, authentication via GitHub, and a simple Drizzle/Neon-backed persistence layer.

**Highlights**
- Early access signup with GitHub OAuth and email.
- Dynamic avatar group showing waitlist participants.
- Clean design with accessibility and dark-mode support.
- Ready for deployment on Vercel; includes tests (Jest + Playwright).

Contents
- Overview & features
- Quick start
- Environment & OAuth configuration
- Testing & development
- API summary
- Contributing
- License

## Features

- Hero + early-access call to action
- GitHub OAuth sign-in (next-auth)
- Avatar group (social proof) generated from GitHub profiles
- Drizzle ORM for type-safe DB access (Neon/Postgres)
- i18n using next-intl
- Tailwind CSS + shadcn/ui components

## Quick Start

Prerequisites
- Node.js 18+ and npm or pnpm
- A PostgreSQL-compatible database (Neon recommended)
- GitHub OAuth App credentials

Install and run locally

```bash
git clone https://github.com/greencommit/waitlist.git
cd waitlist
npm install
cp .env.example .env.local
# fill .env.local with database and GitHub OAuth values
npm run dev
```

Open http://localhost:3000 to view the app.

## Environment Variables

Create `.env.local` with at least:

- `DATABASE_URL` — Postgres/Neon connection string
- `NEXTAUTH_SECRET` — a long random string
- `GITHUB_ID` and `GITHUB_SECRET` — for GitHub OAuth provider
- `NEXT_PUBLIC_APP_URL` — e.g. `http://localhost:3000`

See `src/lib/auth.ts` and `drizzle.config.ts` for how these are used.

## OAuth / GitHub App Setup

1. In GitHub, create a new OAuth App (Settings → Developer settings → OAuth Apps).
2. Set the Authorization callback URL to `http://localhost:3000/api/auth/callback/github`.
3. Add `GITHUB_ID` and `GITHUB_SECRET` to `.env.local`.

## Development & Tests

- Run unit tests:

```bash
npm test
```

- Run Playwright e2e:

```bash
npm run e2e
```

- Format (check and write):

```bash
npm run format:check   # verify formatting
npm run format:write   # apply formatting
```

- Lint:

```bash
npm run lint
```

## API Summary

Primary endpoints (see `API.md` for details):
- `GET  /api/members` — list members (for avatar group)
- `GET  /api/hero-members` — featured members for hero UI (returns `{ members, totalCount }`)
- `POST /api/auth/*` — next-auth routes for GitHub OAuth and session management

Note: There is no `POST /api/members` route in the current codebase — user creation and provider account linking are handled by NextAuth (see `src/lib/auth.ts` and `src/lib/schema.ts`). If you need a manual signup endpoint, add a `POST` route that inserts into the `user` table.

## Contributing

See `CONTRIBUTING.md` for contribution guidelines, branch and PR workflow, and commit conventions.

## Troubleshooting

- If migrations fail, ensure `DATABASE_URL` is set and reachable.
- For OAuth errors, confirm callback URL matches GitHub App settings.

If you hit other issues, open an issue with a reproducible description and logs.

## License

MIT — see `LICENSE.md`.

----
