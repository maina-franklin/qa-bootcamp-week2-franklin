# QA Bootcamp Week 2 Starter

This repo holds my Week 2 work for the QA bootcamp. It contains a Playwright suite (UI tests, a page object test, API tests and the Day 10 capstone) against the Toolshop website and API.

## Quick start (3 steps)

1. Install: `npm install`, then `npx playwright install chromium`
2. Copy the environment file: `cp .env.example .env` (PowerShell: `Copy-Item .env.example .env`)
3. Run the tests: `npm test`

Full details are in Setup below.

## Prerequisites

- [Node.js](https://nodejs.org/) (the current LTS version)
- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/)

## Setup

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

5. Check that your setup works:

   ```bash
   npm run check
   ```

> **Warning:** never commit `.env`. It is listed in `.gitignore`. Do not remove it from there.

## Capstone tests (Day 10)

| Test | What it checks |
|---|---|
| `tests/c1-search.spec.ts` (C1 Search by name) | Searching "pliers" returns at least one product and every product name contains "pliers" |
| `tests/c4-add-to-cart.spec.ts` (C4 Add to a cart) | Creating a cart returns 201, adding a product returns 200, the cart contains that product, and the cart is deleted afterwards |

C1 runs through the `SearchPage` page object in `pages/search-page.ts`. The earlier `tests/search.spec.ts` and `tests/cart-api.spec.ts` are from Tuesday to Thursday and are not the capstone tests.

## Flakiness drill (Day 10)

| Test | What it shows |
|---|---|
| `tests/drill/drill-unfixed.spec.ts` | A fixed 500ms wait plus a plain check: 9 of 20 runs passed |
| `tests/drill/drill-fixed.spec.ts` | `toHaveText` waits for the condition: 20 of 20 runs passed |

## Other tests

| File | What it checks |
|---|---|
| `tests/home.spec.ts` | The home page title |
| `tests/login.spec.ts` | An invalid login is rejected with an error message |
| `tests/search.spec.ts` | Searching "pliers" returns only products with "pliers" in the name |
| `tests/products-api.spec.ts` | GET products returns 200 and a non-empty list |
| `tests/cart-api.spec.ts` | Create a cart, add a product and read it back; a missing cart returns 404 |

The optional Cucumber scenario was not written.

## Folders

| Folder | What it is for |
|---|---|
| `tests/` | The Playwright tests (UI, API and the drill) |
| `pages/` | Page objects. `search-page.ts` holds the search locators and actions |
| `src/` | TypeScript practice files (Day 6) |
| `scripts/` | Helper scripts. `check.ts` is run by `npm run check` |

## Scripts

- `npm run check`: checks your `.env` and that you can reach the Toolshop API.
- `npm test`: runs all the Playwright tests in `tests/`.
## Day 6 – TypeScript Basics & Profile Validator

- `src/ts-basics/` contains one practice file per TypeScript topic (types, tuples, functions, objects, type aliases, union types, optional chaining).
- `src/profile-validator.ts` defines a `UserProfile` type and `isNotified()`, which safely returns `false` when `settings` or `notifications` is missing.

Run any file with: `npx tsx src/ts-basics/<file>.ts` or `npx tsx src/profile-validator.ts`