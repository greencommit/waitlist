# Contributing to GreenCommit Waitlist

Thank you for your interest in contributing! This document explains the preferred workflow, code standards, and how to run tests locally.

## How to contribute

- Open an issue to discuss larger changes before implementing.
- Fork the repository and create a feature branch from `main` named `feat/<short-description>` or `fix/<issue-number>-<short>`.
- Keep changes small and focused; one logical change per PR.

## Development setup

```bash
git clone https://github.com/greencommit/waitlist.git
cd waitlist
npm install
cp .env.example .env.local
# fill .env.local with DB and GitHub OAuth values
npm run dev
```

## Branching & Commits

- Branch names: `feat/...`, `fix/...`, `chore/...`, `docs/...`.
- Follow Conventional Commits for commit messages. Example:

```
feat(auth): add GitHub OAuth callback handling
```

This repository includes `commitlint` to enforce commit message conventions.

## Tests & linting

- Run unit tests: `npm test`
- Run e2e tests: `npm run e2e`
- Format (check): `npm run format:check`
- Format (write): `npm run format:write`
- Lint: `npm run lint`

Make sure tests pass and linting/formatting are clean before opening a PR.

## PR checklist

- [ ] Forked from `main` branch
- [ ] Includes tests for new behavior (when applicable)
- [ ] Linting and formatting applied
- [ ] Clear description and tagging of related issue

## Code style

We use TypeScript, Tailwind and follow patterns found in the codebase. Reuse existing utilities, hooks and components where appropriate.

## Reporting security issues

If you discover a security issue, please do not open a public issue; instead contact the maintainers directly via the repository owner's email or GitHub security advisories.

Thanks for contributing!
