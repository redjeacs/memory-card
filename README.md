# Memory Card Game

An engaging, interactive browser-based memory game built using **React** and powered by **Vite** for ultra-fast performance. 

<p align="center">
  <img width="1530" height="959" alt="127 0 0 1_5173_" src="https://github.com/user-attachments/assets/88803755-47f6-4771-aa5c-dc3cf66f5965" />
</p>

## 🌐 Live Demo
👉 **[View the Live Application](https://redjeacs.github.io/memory-card/)**

---

## 🎮 How to Play

The rules of the game are simple but challenging:
1. A grid of cards will be displayed on the screen.
2. Click on a card to earn a point.
3. Every time a card is clicked, the entire deck shuffles randomly.
4. **The Catch**: You must remember which cards you have already clicked. Clicking the same card twice resets your current score to zero!
5. Try to achieve the maximum possible high score by clicking every card exactly once.

## 🚀 Features

- **Dynamic Card Shuffling**: Smart array randomization algorithm shuffles cards instantly after every selection.
- **Score Tracking System**: Live tracking of your `Current Score` and persistent `Best Score` memory.
- **State Management**: Fluid React state handling for game tracking, reset parameters, and win/loss states.
- **Lightning Fast Build**: Developed using Vite for instantaneous Hot Module Replacement (HMR).

## 🛠️ Tech Stack

- **React** - Component-driven UI architecture.
- **JavaScript (ES6+)** (68.0%) - Core game loop logic and state mechanics.
- **CSS3** (27.9%) - Fluid grid layouts, card hover effects, and game UI styling.
- **HTML5** (4.1%) - Application mounting point.
- **Vite** - High-speed dev server and production bundler.
- **ESLint** - Code quality enforcement.

---

## 📦 Getting Started

Follow these steps to run the game locally on your development machine.

### Prerequisites

You need [Node.js](https://nodejs.org) installed (version 18.x or higher recommended).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/redjeacs/memory-card
   cd memory-card
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Project

To start the local development server with hot-reloading:
```bash
npm run dev
```
Open your browser and navigate to the local URL provided in your terminal (usually `http://localhost:5173`).

### Production Build

To compile and optimize the game for deployment:
```bash
npm run build
```
The production-ready assets will be generated in the `dist/` directory.

## 📄 License

This project is open-source. Feel free to fork, modify, and improve the game mechanics!
