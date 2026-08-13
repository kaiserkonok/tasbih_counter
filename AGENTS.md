# AGENTS.md

## Project

Single-file progressive web app (`index.html`) — a tasbih/dhikr counter for Muslims. No build tools, no dependencies, no package manager. Pure HTML + CSS + JS.

## Architecture

- The app UI lives in `index.html`: HTML structure, CSS styles, and all JS logic inline. The JS is wrapped in an IIFE (`(function(){ 'use strict'; ... })()`) — no globals leak except `window.TASBIH` (bridge for the inline `onchange`/`onclick` handlers in the settings list).
- `manifest.json` + `sw.js` add installable PWA / offline support.
- No separate app JS/CSS, no bundler, no framework.
- `SPEC.md` is the design spec; `logo.svg` and `sitemap.xml` are supporting assets.
- Deployed via GitHub Pages at `https://kaiserkonok.github.io/tasbih_counter/` (relative paths throughout so the sub-path scope works).

## Running

- Open `index.html` directly in a browser for everything except the service worker.
- The service worker only registers over `http(s)://`, so for offline/PWA testing serve it: `python3 -m http.server 8000`.
- No build step, no install step, no test suite.
- Sanity check before committing: syntax-check the inline script and `sw.js` with `node --check` (see the review workflow), and validate `manifest.json` as JSON.

## Data & State

- All state persisted to `localStorage` under key `tasbihPro`.
- `load()` handles migration: daily rollover, streak calculation, legacy tasbih migration.
- `save()` writes the full state object on every change.

## Key Gotchas

- JS is inline in `<script>` at the bottom of `index.html` — edits go there.
- `renderMain()` rebuilds `main.innerHTML` and re-attaches listeners when the tasbih list or current selection changes. Per-count updates go through the lightweight `paint()` (updates count text, bead `.lit` classes, and the goal arc) — do NOT call `renderMain()` on every tap or it will flicker and drop the ripple/breathe animations.
- `beadEls` is a cached array of the current dhikr's bead nodes, rebuilt by `renderMain()` and toggled by `paint()`.
- All user-entered text (tasbih name/arabic/meaning) MUST go through `escapeHtml()` before being injected — it is rendered via `innerHTML`.
- `load()` handles migrations (daily rollover, streak, legacy single-goal → per-dhikr goals, misspelled-ID merge, enrichment of old entries with arabic/meaning/round). Keep it backward-compatible with the `tasbihPro` localStorage key.
- Long-press decrement sets `suppressClickUntil` to swallow the ghost `click` that follows a touch release.
- Sound uses Web Audio API (needs a user gesture to init `AudioContext`).
- No linting, no typecheck, no tests exist in this repo.
