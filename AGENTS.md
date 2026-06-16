# AGENTS.md

## Project

Single-file progressive web app (`index.html`) — a tasbih/dhikr counter for Muslims. No build tools, no dependencies, no package manager. Pure HTML + CSS + JS.

## Architecture

- Everything lives in `index.html` (~1020 lines): HTML structure, CSS styles, and all JS logic inline.
- No separate JS/CSS files. No bundler. No framework.
- `SPEC.md` is the design spec (UI/UX, features, acceptance criteria).
- `logo.svg` and `sitemap.xml` are the only other files.
- Deployed via GitHub Pages at `https://kaiserkonok.github.io/tasbih_counter/`.

## Running

- Open `index.html` directly in a browser. No server needed.
- No build step, no install step, no test suite.

## Data & State

- All state persisted to `localStorage` under key `tasbihPro`.
- `load()` handles migration: daily rollover, streak calculation, legacy tasbih migration.
- `save()` writes the full state object on every change.

## Key Gotchas

- JS is inline in `<script>` at the bottom of `index.html` — edits go there.
- Global functions are attached to `window` (e.g. `window.addTasbih`, `window.showAddTasbih`) because they're called from inline `onclick` handlers in rendered HTML.
- `render()` rebuilds `main.innerHTML` on every state change — all event listeners are re-attached inside `render()`.
- Sound uses Web Audio API (requires user gesture to initialize `AudioContext`).
- No linting, no typecheck, no tests exist in this repo.
