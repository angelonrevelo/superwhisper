<p align="center">
  <img src="public/og.jpg" alt="Superwhisper" width="100%">
</p>

# Superwhisper

**An unofficial recreation of superwhisper.com — the marketing site, pricing and docs for an AI voice-to-text app.**

> **Unofficial.** This is a study/clone project that recreates the look and flow of [Superwhisper](https://superwhisper.com). It is not affiliated with, endorsed by, or connected to Superwhisper. Names, logos and copy belong to their owners; nothing here is a real Superwhisper service.

Recreates the Superwhisper website: the landing page, pricing, a sign-in page, and a documentation section with search (⌘K) and an assistant panel (⌘I).

There is no dictation app here — only the website around it.

## What's in it

- `/` marketing landing page
- `/pricing`
- `/docs/*` — documentation (search ⌘K, assistant ⌘I)
- `/login` — sign in

## Quick start

```bash
npm install
npm run dev        # http://localhost:8080
```

Other scripts:

| Command | What it does |
| --- | --- |
| `npm run build` | production build (also runs `db:migrate`) |
| `npm run preview` | serve the production build |
| `npm run typecheck` | TypeScript check |
| `npm test` | unit tests |
| `npm run lint` | ESLint |

## Configuration

Nothing is required — it runs with no `.env` at all. Optional keys:

- `DATABASE_URL` — Postgres (Neon) connection string. Unset = an embedded PGLite database, so the app still has a working DB locally.
- `VITE_AUTH_ENABLED` — turn the sign-in gate on or off (`false` = demo user, no login).
- `VITE_PUBLIC_HOSTNAME` — public hostname used for absolute share/OG URLs.
- `VITE_STUN_URLS` — comma-separated STUN servers for the peer-to-peer layer (defaults to Google's public STUN).

`BROWSER_*` and `PREVIEW_*` variables are read only by the dev tooling in `scripts/`.

## How it works

Built with Grok's app builder on **TanStack Start** (React 19, Vite) with **Tailwind v4** and **Zustand** for client state. Pages are file-based routes in `src/routes/`, shared logic is in `src/lib/`, `server/` holds request middleware, and `migrations/` holds the auth tables that `npm run db:migrate` applies.

```
browser ──▶ TanStack Start (Vite, :8080) ──▶ src/lib (server functions) ──▶ Postgres (Neon) or PGLite
```

## Links

- [AGENTS.md](AGENTS.md) — the build-sandbox contract the app was generated under (for agents, not people)
