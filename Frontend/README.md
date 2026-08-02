# 🌿 Batik Zahro — Luxury Borneo Artisan Heritage Web Application

A modern, high-end web application built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and dynamic **Multi-Language (ID/EN)** support. This project recreates the Stitch luxury design system for **Batik Zahro**, featuring Kalimantan Bangkirai natural dye textile heritage.

---

## 🚀 Quick Start for Collaborators

Follow these instructions to run and edit the project locally on your machine.

### Prerequisites

- **Node.js**: `v18.17.0` or higher (v20+ recommended)
- **Package Manager**: `npm` (v9+ or higher) or `pnpm` / `yarn`

---

### 1. Installation

Clone or navigate to the frontend workspace directory:

```bash
cd "e:/Zahro Project/Src/Frontend"
```

Install all required dependencies:

```bash
npm install
```

---

### 2. Running Local Development Server

Start the Next.js development server:

```bash
npm run dev
```

Open your browser and navigate to:
👉 **`http://localhost:3000`**

The server supports Hot Module Replacement (HMR). Any changes you save in `src/` will automatically update in the browser.

---

### 3. Building & Running for Production

To create an optimized production build:

```bash
npm run build
```

To run the production build locally:

```bash
npm run start
```

---

## 📁 Project Architecture & Folder Structure

```
e:\Zahro Project\Src\Frontend\
├── package.json               # Dependencies and scripts (dev, build, start, lint)
├── tsconfig.json              # TypeScript compiler configuration
├── tailwind.config.ts         # Custom design tokens (colors, typography, spacing)
├── postcss.config.js          # PostCSS configuration for Tailwind CSS
├── README.md                  # Project documentation & collaborator guide
└── src/
    ├── app/                   # Next.js App Router Pages & Layouts
    │   ├── globals.css        # Material Symbols, animations, scrollbar & motif styles
    │   ├── layout.tsx         # Root layout with LanguageProvider, fonts, Navbar & Footer
    │   ├── page.tsx           # Home Page (Hero Video, Awards Marquee, Split-grid, FAQ)
    │   ├── about/
    │   │   └── page.tsx       # About Page (Story, Philosophy, Vision, Mission, Pillars)
    │   ├── our-story/
    │   │   └── page.tsx       # Our Story Page (Borneo Motifs & Dye Process Timeline)
    │   ├── collection/
    │   │   └── page.tsx       # Collection Page (Filterable Catalog & Detail Modal)
    │   └── contact/
    │       └── page.tsx       # Contact Page (Concierge Form, Hubs, Duty-Paid Info)
    ├── components/            # Reusable UI Components
    │   ├── Navbar.tsx         # Responsive Header with ID/EN language toggle & drawer
    │   ├── Footer.tsx         # 4-Column Luxury Footer
    │   └── ScrollReveal.tsx   # IntersectionObserver scroll animation wrapper
    ├── context/
    │   └── LanguageContext.tsx# React Context for global i18n state & localStorage persistence
    └── dictionaries/
        └── translations.ts    # Bilingual (Indonesian & English) translation dictionary
```

---

## 🛠️ How to Edit & Customize This Project

### A. Editing Page Content & Translations (Indonesian & English)

All text content across the website is managed through a central, type-safe dictionary:
📄 **`src/dictionaries/translations.ts`**

To edit text or add new translations:
1. Open `src/dictionaries/translations.ts`.
2. Locate the relevant page section (`home`, `about`, `story`, `collection`, `contact`, `nav`, `footer`).
3. Update both `ID` (Indonesian) and `EN` (English) objects:

```typescript
export const translations = {
  ID: {
    home: {
      titleLine1: 'Batik Kalimantan Kontemporer',
      // ...
    }
  },
  EN: {
    home: {
      titleLine1: 'Contemporary Borneo Batik',
      // ...
    }
  }
};
```

---

### B. Modifying Design Tokens & Colors

Theme colors, fonts, spacing scales, and border radii are configured in:
📄 **`tailwind.config.ts`**

Key Color Tokens:
- **Primary (Terracotta)**: `#8e4922`
- **Secondary (Gold Accent)**: `#805529`
- **Tertiary (Forest Green)**: `#4f6149`
- **Background Cream**: `#F8F3EE`
- **Surface Tan**: `#EEE2D4`
- **Body Text**: `#5E5147`

To change a color or font token, update `tailwind.config.ts`:

```typescript
colors: {
  primary: '#8e4922',
  'background-cream': '#F8F3EE',
  // Add or modify color tokens here
}
```

---

### C. Adding a New Page Route

To create a new page in Next.js App Router (e.g. `/sustainability`):

1. Create a new directory inside `src/app/`:
   `src/app/sustainability/page.tsx`

2. Add your React component:

```tsx
'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function SustainabilityPage() {
  const { t } = useLanguage();

  return (
    <section className="py-20 max-w-container-max mx-auto px-margin-mobile">
      <h1 className="font-headline text-5xl">Sustainability Report</h1>
    </section>
  );
}
```

3. Add navigation link to `src/components/Navbar.tsx`:

```tsx
const navLinks = [
  // ...
  { name: t.nav.sustainability, href: '/sustainability' },
];
```

---

### D. Managing Components

- **Navbar (`src/components/Navbar.tsx`)**: Contains glassmorphism sticky header logic, scroll observer, mobile menu drawer, and `ID` / `EN` language switcher buttons.
- **Footer (`src/components/Footer.tsx`)**: Contains brand bio, collection links, ethos links, and copyright info.
- **ScrollReveal (`src/components/ScrollReveal.tsx`)**: Controls smooth IntersectionObserver entrance animations for elements as they enter the viewport.

---

## 🎨 Typography & Fonts

This project uses Google Fonts loaded via `next/font/google` in `src/app/layout.tsx`:

- **Cormorant Garamond** (`var(--font-cormorant)` / `font-headline` / `font-display`): Used for elegant luxury display titles and serif headings.
- **Manrope** (`var(--font-manrope)` / `font-body` / `font-label`): Used for body text, UI buttons, uppercase labels, and subheadings.

---

## 🌐 Language Persistence

Language state (`ID` or `EN`) is managed by `LanguageProvider` (`src/context/LanguageContext.tsx`).
When a user selects `ID` or `EN`, their preference is saved in `localStorage.setItem('batik_zahro_lang', lang)`. Upon revisiting the website, the application automatically restores their preferred language.

---

## 📄 License & Attribution

- **Project**: Batik Zahro — Borneo Artisan Heritage Website Application
- **Design System**: Artisanal Earth & Gold (Stitch TEXT_TO_UI_PRO)
- **Built for**: High-fashion luxury Indonesian batik presentation and global ecommerce concierge.
