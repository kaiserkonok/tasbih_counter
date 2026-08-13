# Dhikr — Design Spec

## Project Overview
- **Project name**: Dhikr
- **Type**: Installable Progressive Web App (single `index.html` + service worker + manifest)
- **Core purpose**: A serene, spiritual dhikr counter that makes remembrance of Allah feel calm, focused, and rewarding.
- **Target users**: Muslims tracking their daily dhikr.

## Experience Goals
The app should *feel like dhikr*: unhurried, warm, and reverent. Interaction is quiet and satisfying rather than gamified. Every screen keeps the remembrance — not the UI — at the center.

## Visual Design

### Palette (night + lamplight)
- **Background**: `#0a0f1c` → `#0c1424` (deep night), with soft gold and emerald radial glows and a faint starfield.
- **Gold** (primary light): `#e9c46a`, soft `#f3d9a0`, deep `#c99b3f`.
- **Emerald** (accent): `#3ddc97` / `#2a9d8f`.
- **Text**: `#f6f1e4` (warm off-white); dim `#9aa6b8`.
- **Danger**: `#f2766a`.

### Typography
- **Amiri** — Arabic dhikr (large, glowing).
- **Cormorant Garamond** — headings, meanings, verses (elegant serif).
- **Quicksand** — UI text.

### Motion
- Counter gently **breathes** at rest (5.5s glow loop).
- **Bump** + gold **ripple** on each tap.
- Beads fade to gold as they light; goal ring eases as it fills.
- All motion respects `prefers-reduced-motion`.

## Components

1. **Dhikr heading** — Arabic, transliteration, and English meaning of the current dhikr.
2. **Counter** — large circular tap target inside two SVG rings:
   - **Bead ring**: one bead per unit of the traditional round (33 / 34 / 100). Beads light gold as you count; the first (head) bead is emerald. Resets each completed round.
   - **Goal arc**: outer gradient ring showing progress toward the daily goal.
   - Center shows the running count, `lit / round · N rounds`, and a tap hint.
3. **Actions** — "− undo one", "↺ reset" chips, and an inline daily-goal editor (✏️).
4. **Reminder** — a rotating verse/hadith on remembrance.
5. **Tasbih selector** — horizontal scrollable pills; **+** to add.
6. **Journey modal (per dhikr)** — reflects the currently selected dhikr: Today, Day Streak, This Week, and Lifetime, plus its own 7-day bar chart (today highlighted emerald) and a "Lifetime by Dhikr" list ranking every dhikr. All figures are derived from the per-dhikr daily `history` already in storage — no extra data is kept.
7. **Settings modal** — Sound, Vibration, per-dhikr Daily Goal, custom-dhikr management, and data reset.

## Interactions
- **Tap / Enter / Space**: +1 (haptic + optional chime). Completing a round → richer chime + buzz. Reaching the daily goal → celebration + toast.
- **Long-press (mobile) / Backspace**: −1.
- **Swipe up / ↑ / "undo one"**: undo the last action.
- **Reset**: clear the current dhikr's count (undoable).
- Switch dhikr via pills; add/edit/delete via Settings.

## Data & Persistence
- Single `localStorage` key: `tasbihPro` — full state written on every change.
- Stored: tasbih list (id, name, arabic, meaning, round), current selection, today's counts, daily history, per-dhikr goals, goal-reached flags, streak, sound/vibrate prefs, today's date.
- `load()` handles: midnight rollover (archive → history, reset counts, recompute streak), legacy single-goal → per-dhikr goals, misspelled-ID merges, and enrichment of older entries with Arabic/meaning/round.

## Offline / PWA
- `manifest.json` — installable, standalone, portrait, themed to the night palette.
- `sw.js` — cache-first app shell; stale-while-revalidate for Google Fonts. Registers only over `http(s)://`.

## Accessibility
- Real `<button>` controls with `aria-label`s; toggles use `role="switch"` + `aria-checked`.
- Pinch-zoom allowed (no `user-scalable=no`); `viewport-fit=cover` with safe-area padding.
- All user-entered text is HTML-escaped before rendering.
- Full keyboard support incl. <kbd>Esc</kbd> to close dialogs.

## Acceptance Criteria
1. ✅ Counter increments on tap with visual, haptic, and optional audio feedback.
2. ✅ Bead ring and goal arc reflect count and round accurately.
3. ✅ Switch between multiple dhikr; add/edit/delete custom dhikr.
4. ✅ Data persists across reloads and rolls over at midnight.
5. ✅ Per-dhikr statistics (today / streak / week / lifetime / chart) are correct and independent for each dhikr.
6. ✅ Installable and works fully offline.
7. ✅ Calm, responsive, accessible on phones and desktops (320px and up).
