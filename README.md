# Shopping Cart UI (React + TypeScript)

A simple Shopping Cart UI project built with **React 18** and **TypeScript**, inspired by [Traversy Media’s new React Udemy course](https://www.udemy.com/course/modern-react-from-the-beginning/).

## 🛒 Live Demo

- **Frontend:**  
  [https://moehein13.github.io/ShoppingCart-React-TypeScript/](https://moehein13.github.io/ShoppingCart-React-TypeScript/)
- **API (Vercel serverless):**  
  [https://shoppin-cart-vercel-api.vercel.app/api/products](https://shoppin-cart-vercel-api.vercel.app/api/products)

---

## Overview

This project follows the Traversy Media React course, with a few personal improvements:

- **TypeScript (TSX)** was used throughout (instead of JSX).
- Swapped the default fetch API for **axios** for all data fetching.
- **Product data is fetched from a public Vercel serverless API**—no local backend required.
- Added a custom hook (mainly for useContext) for practice and code clarity.
- The rest of the logic and structure closely follows the course for learning purposes.

## Features

- 🛒 Product listing and shopping cart functionality
- 📦 Fetches product data from a live Vercel API using **axios**
- ⚛️ Written in **React 18** with **TypeScript**
- 🎣 Includes a simple custom hook for context state
- 📱 Responsive design
- 🚀 Deployed on GitHub Pages (frontend) and Vercel (backend/API)

---

## Getting Started

1. **Clone this repo:**
   ```bash
   git clone https://github.com/MoeHein13/ShoppingCart-Ui-TypeScript.git
   cd ShoppingCart-Ui-TypeScript
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start the development server**
   ```bash
   npm run dev
   # or
   npm start
   ```

## Deployment

- **Frontend:**  
  Built and deployed to GitHub Pages using:
  ```bash
  npm run build
  npm run deploy
  ```
- [https://MoeHein13.github.io/ShoppingCart-Ui-TypeScript/](https://MoeHein13.github.io/ShoppingCart-Ui-TypeScript/)

Backend API:

- Product data is served from a Vercel serverless function:
- [https://shoppin-cart-vercel-api.vercel.app/api/products](https://shoppin-cart-vercel-api.vercel.app/api/products)

## Tech Stack

- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [GitHub Pages](https://pages.github.com/)
- [Vercel](https://vercel.com/)

## Differences from the Original Course

- Migrated to TypeScript (TSX) for all components
- Used axios instead of fetch for HTTP requests
- Added a simple custom hook for useContext
- Product data is fetched from a public Vercel API (no local backend)
- Deployed frontend on GitHub Pages and backend API on Vercel

## Credits

- Original tutorial by [Traversy Media](https://www.udemy.com/course/modern-react-from-the-beginning/)
- TypeScript and custom implementation by [Moe Hein Kyaw]

---
