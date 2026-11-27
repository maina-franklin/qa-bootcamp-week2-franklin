# QA Bootcamp Week 2 Starter

This repo holds my Week 2 work for the QA bootcamp. It contains a Playwright suite (UI tests, a page object test and API tests) against the Toolshop website and API, plus my TypeScript practice files.

- TypeScript
- Playwright (UI and API testing)
- Postman (API testing)
- The Toolshop REST API

## Prerequisites

Install these before you start:

- [Node.js](https://nodejs.org/) (the current LTS version)
- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/)

## Quick start (3 steps)

1. Install: `npm install`, then `npx playwright install chromium`
2. Copy the environment file: `cp .env.example .env` (PowerShell: `Copy-Item .env.example .env`)
3. Run the tests: `npm test`

Full details are in Setup below.

## Setup

Run these steps in order from a terminal.

1. Clone the repo and open the folder:

   ```bash
   git clone <repo-url>
   cd qa-bootcamp-week2-starter
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Install the Chromium browser for Playwright:

   ```bash
   npx playwright install chromium
   ```

4. Copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

   `.env` already contains the Toolshop website URL (`TOOLSHOP_URL`) and the Toolshop API URL (`TOOLSHOP_API_URL`). Only change them if your trainer gives you different URLs.

5. Check that your setup works:

   ```bash
   npm run check
   ```

   This sends a GET request to the Toolshop API's `/products` endpoint (no login needed). If everything is set up correctly, it prints your Node version, the HTTP status (200), the number of products, and a last line that says `PASS`.

> **Warning:** never commit `.env`. It is where your own settings and, later in the course, your secrets (keys, tokens, passwords) live. It is listed in `.gitignore` so Git ignores it. Do not remove it from there.

## What the suite contains

| File | What it checks |
|---|---|
| `tests/home.spec.ts` | The home page title |
| `tests/login.spec.ts` | An invalid login is rejected with an error message |
| `tests/search.spec.ts` | Searching "pliers" returns only products with "pliers" in the name (uses the `SearchPage` page object) |
| `tests/products-api.spec.ts` | GET products returns 200 and a non-empty list |
| `tests/cart-api.spec.ts` | Create a cart, add a product and read it back; a missing cart returns 404. Each test deletes its own cart |

The optional Cucumber scenario was not written.

## Folders

| Folder     | What it is for |
|------------|----------------|
| `tests/`   | The Playwright tests (UI and API). |
| `pages/`   | Page objects. `search-page.ts` holds the search locators and actions. |
| `src/`     | TypeScript practice files (Day 6). |
| `scripts/` | Helper scripts. `check.ts` checks your setup and is run by `npm run check`. |

## Scripts

- `npm run check`: checks your `.env` and that you can reach the Toolshop API.
- `npm test`: runs all the Playwright tests in `tests/`.

## Day 6 – TypeScript Basics & Profile Validator

- `src/ts-basics/` contains one practice file per TypeScript topic (types, tuples, functions, objects, type aliases, union types, optional chaining).
- `src/profile-validator.ts` defines a `UserProfile` type and `isNotified()`, which safely returns `false` when `settings` or `notifications` is missing.

Run any file with: `npx tsx src/ts-basics/<file>.ts` or `npx tsx src/profile-validator.ts`