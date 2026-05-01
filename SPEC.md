# Tasbih Counter - Best in the World

## Project Overview
- **Project name**: Tasbih Pro
- **Type**: Progressive Web App (Single HTML)
- **Core functionality**: Beautiful, feature-rich tasbih (dhikr) counter with multiple tasbih types, statistics, goals, and satisfying interactions
- **Target users**: Muslims who want to track their daily dhikr

## UI/UX Specification

### Layout Structure
- **Header**: App title, settings icon, stats button
- **Main Area**: Large circular counter display (tap target)
- **Bottom**: Tasbih type selector, goal progress
- **Navigation**: Bottom sheet for stats/settings

### Responsive Breakpoints
- Mobile: < 480px (primary target)
- Tablet: 480px - 768px
- Desktop: > 768px

### Visual Design

#### Color Palette
- **Background**: #0D1117 (deep night)
- **Card/Surface**: #161B22
- **Primary**: #58A6FF (luminous blue)
- **Secondary**: #238636 (emerald green)
- **Accent**: #F0883E (warm amber)
- **Text Primary**: #F0F6FC
- **Text Secondary**: #8B949E
- **Glow effect**: rgba(88, 166, 255, 0.4)

#### Typography
- **Font Family**: "Amiri" for Arabic, "Quicksand" for UI
- **Counter Display**: 96px, bold
- **Tasbih Name**: 24px
- **Body**: 16px

#### Spacing System
- Base unit: 8px
- Card padding: 24px
- Section gaps: 32px

#### Visual Effects
- Counter button: Pulsing glow on tap
- Ripple effect on tap
- Subtle floating animation for counter
- Gradient background with subtle pattern
- Glassmorphism for cards

### Components

1. **Counter Button**
   - Large circular (200px diameter)
   - Arabic text of current tasbih
   - Count display in center
   - Ripple animation on tap
   - Scale bounce on increment

2. **Tasbih Selector**
   - Horizontal scrollable pills
   - Tasbih types: SubhanAllah, Alhmadulillah, Allahu Akbar, La ilaha illallah, Astaghfirullah
   - Active state with glow

3. **Stats Panel**
   - Today's total
   - Streak (consecutive days)
   - Weekly chart (simple bar)
   - All-time count

4. **Goal Tracker**
   - Circular progress ring
   - Daily goal (default: 100)
   - Celebration animation on goal reached

5. **Settings Modal**
   - Reset counter
   - Change daily goal
   - Sound toggle
   - Vibration toggle

## Functionality Specification

### Core Features
1. **Tap to count**: Tap counter button increments count
2. **Long press to decrement**: Long press decreases count
3. **Tasbih selection**: Switch between 5 tasbih types
4. **Auto-save**: Save state to localStorage on every change
5. **Daily reset option**: Reset daily count at midnight
6. **Statistics tracking**:
   - Store daily counts with dates
   - Calculate streak
   - Show weekly summary

### User Interactions
- Single tap: +1 count with haptic feedback (mobile)
- Long press (500ms): -1 count
- Swipe up on counter: Undo last count
- Tap tasbih pill: Switch tasbih type

### Data Handling
- LocalStorage for:
  - Current tasbih type
  - Current count
  - Today's date
  - Daily history (last 30 days)
  - Settings (goal, sound, vibration)
  - Streak data

### Edge Cases
- Count cannot go below 0
- Handle midnight rollover gracefully
- Handle first-time user (show onboarding)
- Handle corrupted localStorage

## Acceptance Criteria
1. ✅ Counter increments on tap with visual/haptic feedback
2. ✅ Can switch between 5 tasbih types
3. ✅ Data persists across page reloads
4. ✅ Shows daily goal progress
5. ✅ Displays streak and statistics
6. ✅ Beautiful, smooth animations
7. ✅ Works offline
8. ✅ Mobile-responsive with touch-friendly targets