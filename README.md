# 🍔 GOOD HAMBURGER - Frontend Challenge

A modern, responsive food ordering application built with **Next.js**, **TypeScript**, and **Tailwind CSS**. This project demonstrates clean architecture, complex state management, and strict business logic implementation for a restaurant ordering system.

## 🚀 Live Demo & Features

### Core Features
- **Menu Management:** Display sandwiches and extras with category filtering.
- **Smart Cart:**
  - Real-time validation (limits: 1 sandwich, 1 fries, 1 drink per order).
  - **Automatic Discount Engine:** Calculates tiered discounts (20%, 15%, 10%) based on combo rules.
- **Order Processing:**
  - Name requirement validation.
  - Simulated asynchronous API calls (1s network delay).
  - "Loading" states and error handling.
- **Order History:** View submitted orders within the session.

### Business Logic Rules
1. **20% Off:** Sandwich + Fries + Soft Drink.
2. **15% Off:** Sandwich + Soft Drink.
3. **10% Off:** Sandwich + Fries.
4. **Restriction:** Only one item of each type is allowed per order.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State Management:** React Context API + Custom Hooks
- **Icons:** Standard UTF-8 Emojis (Lightweight approach)

---

## Getting Started

1. Run the development server:

```bash
git clone [https://github.com/YOUR_USERNAME/good-hamburger.git](https://github.com/LauraCaa/good-hamburger.git)
cd good-hamburger
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Project Architecture

The project follows a modular **"Separation of Concerns"** architecture:

```bash
src/
├── app/              # Next.js App Router (Pages & Layouts)
├── components/       # Reusable UI Components (Navbar, MenuSection, CartSection)
├── context/          # Global State Management (CartContext)
├── hooks/            # Custom Hooks (Logic encapsulation)
├── services/         # Mock API Service (Simulated delay)
├── types/            # TypeScript Interfaces (Product, CartItem, Order)
└── utils/            # Pure Business Logic (Discount calculations & Validations)
```

## 👨‍💻 Author

**[Laura Camila Cardenas Castro**]

* **Role:** Frontend Developer
* **GitHub:** [@LauraCaa](https://github.com/LauraCaa)
* **LinkedIn:** [Tu Perfil](https://www.linkedin.com/in/laura-cardenas-castro)