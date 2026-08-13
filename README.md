<h1 align="center">
  <img src="logo.svg" alt="Dhikr" width="64" />
  <br/>
  Dhikr
</h1>

<p align="center">
  A serene digital tasbih for the remembrance of Allah 🕌
  <br/>
  <em>“Verily, in the remembrance of Allah do hearts find rest.” — Qur’an 13:28</em>
</p>

<p align="center">
  <a href="https://kaiserkonok.github.io/tasbih_counter/">
    <img src="https://img.shields.io/badge/Live%20Demo-238636?style=for-the-badge" alt="Live Demo">
  </a>
  <a href="https://github.com/kaiserkonok/tasbih_counter">
    <img src="https://img.shields.io/badge/Made%20with-HTML%20%26%20CSS-2541b2?style=for-the-badge&logo=html5" alt="HTML/CSS">
  </a>
  <a href="https://github.com/kaiserkonok/tasbih_counter">
    <img src="https://img.shields.io/badge/PWA-Offline%20Ready-e9c46a?style=for-the-badge" alt="PWA / Offline">
  </a>
  <a href="https://github.com/kaiserkonok/tasbih_counter">
    <img src="https://img.shields.io/badge/No%20Dependencies-4ECDC4?style=for-the-badge" alt="No Dependencies">
  </a>
</p>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📿 **Prayer-bead ring** | A ring of beads lights up as you count, just like a physical misbaha — one full round (33 / 34 / 100) at a time |
| 🕌 **Arabic + meaning** | Every dhikr shown in beautiful Amiri Arabic with transliteration and its English meaning |
| 🌙 **Serene design** | A calm night-sky palette, warm gold light, and a gentle "breathing" counter made for focus |
| 🎯 **Per-dhikr goals** | Set a daily target for each dhikr and watch the golden progress ring fill |
| 📊 **Statistics** | Today's total, day streak, this week, all-time count, and a 7-day chart |
| ✏️ **Custom dhikr** | Add your own dhikr with Arabic, meaning, and beads-per-round |
| 🔔 **Sound & haptics** | An optional soft chime and gentle vibration on every count |
| 📴 **Offline PWA** | Installs to your home screen and works with no internet — all data stays on your device |
| 📖 **Reminders** | A rotating verse or hadith on remembrance to keep the heart present |

---

## 🚀 Quick Start

[**Try it now →**](https://kaiserkonok.github.io/tasbih_counter/)

Or run locally:

```bash
# Just open it — no build, no install
open index.html

# For full PWA/offline testing, serve over http:
python3 -m http.server 8000   # then visit http://localhost:8000
```

> The service worker (offline support) only activates when served over `http(s)://`, not from a `file://` path. Opening `index.html` directly still works for everything else.

---

## 📱 How to use

- **Tap** the big circle to count (+1). Beads light up around the ring.
- Complete a full round (33 / 34 / 100) for a soft chime and a stronger buzz.
- **Long-press** the circle (mobile) or press **Backspace** to go back one.
- **Swipe up** on the circle, press **↑**, or tap **− undo one** to undo.
- Tap **↺ reset** to clear the current dhikr (undoable).
- Tap a **pill** at the bottom to switch dhikr; tap **+** to add your own.

### ⌨️ Keyboard (desktop)

| Key | Action |
|-----|--------|
| <kbd>Enter</kbd> / <kbd>Space</kbd> | Count +1 |
| <kbd>Backspace</kbd> | Count −1 |
| <kbd>↑</kbd> | Undo last action |
| <kbd>Esc</kbd> | Close a dialog |

---

## 🔧 Customization

1. Open **⚙️ Settings**.
2. Under **Your Tasbihs**, tap **+ Add a dhikr** — give it a name, and optionally Arabic, a meaning, and how many beads make one round.
3. Set a **Daily Goal** per dhikr (or tap the ✏️ next to the goal on the main screen).
4. Toggle **Sound** and **Vibration** to taste.

---

## 🛠️ Tech

- Pure **HTML5, CSS3, JavaScript** — zero runtime dependencies.
- **LocalStorage** for persistence (with automatic migration across versions).
- **Web Audio API** for the chime; **Vibration API** for haptics.
- **Service worker + manifest** for offline use and home-screen install.
- Fonts: **Amiri** (Arabic), **Cormorant Garamond** & **Quicksand** (UI), cached for offline after first load.

See [AGENTS.md](AGENTS.md) for architecture notes and [SPEC.md](SPEC.md) for the design spec.

---

## 📄 License

MIT License — free to use, modify, and share.

---

<p align="center">
  Made with ❤️ for the ummah — <em>may it be a means of continuous reward.</em>
</p>
