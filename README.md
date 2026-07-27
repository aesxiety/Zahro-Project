# 🌿 Batik Zahro — Luxury Borneo Artisan Heritage Web Application

> **A modern, high-end web application celebrating the authentic craft, sustainability, and contemporary luxury of Borneo batik.**

This repository houses the complete **Batik Zahro** platform—a bilingual (Indonesian/English) luxury ecommerce and editorial experience built with cutting-edge web technologies. It features a sophisticated Next.js frontend with dynamic multi-language support, Tailwind CSS styling, and enterprise-grade design system compliance.

**Website**: [https://zahro-project.vercel.app](https://zahro-project.vercel.app)

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Repository Structure](#repository-structure)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [Development Guide](#development-guide)
- [Collaboration Guidelines](#collaboration-guidelines)
- [Contributing](#contributing)
- [Project Status](#project-status)
- [License](#license)

---

## 🎯 Project Overview

**Batik Zahro** is a luxury heritage brand platform that:

- ✨ Showcases premium Borneo batik textiles with natural dyes
- 🌍 Provides bilingual content (Indonesian & English) for global reach
- 🎨 Maintains a cohesive, artisanal design system rooted in earth tones and contemporary elegance
- 📱 Delivers a seamless experience across desktop, tablet, and mobile devices
- ♻️ Emphasizes sustainability and authentic craftsmanship
- 🛍️ Enables luxury ecommerce interactions through a concierge model

---

## 📁 Repository Structure

```
Zahro-Project/
├── Frontend/                    # Next.js web application (TypeScript, React 19, Tailwind CSS)
│   ├── src/
│   │   ├── app/                 # App Router pages & layouts
│   │   ├── components/          # Reusable React components (Navbar, Footer, ScrollReveal)
│   │   ├── context/             # React Context for language state management
│   │   └── dictionaries/        # Centralized bilingual translation dictionary
│   ├── package.json             # Dependencies & scripts
│   ├── tailwind.config.ts       # Design tokens, colors, typography
│   ├── tsconfig.json            # TypeScript configuration
│   ├── README.md                # Frontend-specific guide
│   ├── DESIGN.md                # Design system documentation
│   └── .gitignore
│
├── Backend/                     # Backend services (planned/in-progress)
│   └── test.py                  # Placeholder for backend logic
│
├── README.md                    # **← You are here** (Root project documentation)
└── .git/                        # Git configuration

```

### **Frontend Directory Details**

| Directory | Purpose |
|-----------|---------|
| `src/app/` | Next.js App Router pages: home, about, our-story, collection, contact |
| `src/components/` | Reusable UI: Navbar, Footer, ScrollReveal animations |
| `src/context/` | LanguageContext for global i18n state & localStorage persistence |
| `src/dictionaries/` | Type-safe translation dictionary (ID/EN) |

---

## 🛠️ Tech Stack

### **Frontend**
- **Framework**: Next.js 16.2.12 (App Router)
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS 3.4.19 + PostCSS
- **Runtime**: React 19.2.8 + React DOM
- **UI Libraries**: 
  - Lucide React (icons)
  - clsx (conditional classnames)
  - Tailwind Merge (class merging utilities)
- **Node.js**: v18.17.0 or higher (v20+ recommended)

### **Design System**
- **Typography**: Cormorant Garamond (display) + Manrope (body)
- **Color Palette**: Earth tones (terracotta, gold, forest green, cream)
- **Component Library**: Tailwind utilities with custom design tokens
- **Responsive**: Mobile-first design (mobile, tablet, desktop)

### **Backend** *(Planned)*
- Python-based services (placeholder: `Backend/test.py`)

---

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have:

- **Node.js** v18.17.0 or higher installed (v20+ recommended)
  - [Download Node.js](https://nodejs.org)
  - Verify: `node --version` and `npm --version`
- **Git** for version control
- A code editor (VS Code recommended)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/aesxiety/Zahro-Project.git
   cd Zahro-Project
   ```

2. **Navigate to the Frontend directory**:
   ```bash
   cd Frontend
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```
   
   *Or with yarn/pnpm:*
   ```bash
   yarn install
   # or
   pnpm install
   ```

### Running Locally

**Start the development server**:
```bash
npm run dev
```

The application will be available at:
👉 **[http://localhost:3000](http://localhost:3000)**

Any changes you save in the `src/` directory will hot-reload automatically thanks to Next.js's Hot Module Replacement (HMR).

**Build for production**:
```bash
npm run build
npm run start
```

**Run linting**:
```bash
npm run lint
```

---

## 📖 Development Guide

### **1. Editing Text Content & Translations**

All text across the website is centralized in a single, type-safe dictionary:

📄 **`Frontend/src/dictionaries/translations.ts`**

**To edit or add translations:**

1. Open `Frontend/src/dictionaries/translations.ts`
2. Locate the relevant section (`home`, `about`, `story`, `collection`, `contact`, `nav`, `footer`)
3. Update both `ID` (Indonesian) and `EN` (English) keys:

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

Then use in components:
```tsx
import { useLanguage } from '@/context/LanguageContext';

export default function MyComponent() {
  const { t } = useLanguage();
  return <h1>{t.home.titleLine1}</h1>;
}
```

---

### **2. Customizing Design Tokens & Colors**

Theme colors, fonts, spacing, and borders are defined in:

📄 **`Frontend/tailwind.config.ts`**

**Key color tokens:**

| Token | Color | Usage |
|-------|-------|-------|
| Primary | `#8e4922` (Terracotta) | CTAs, highlights |
| Secondary | `#805529` (Dark Terracotta) | Hover states |
| Tertiary | `#4f6149` (Forest Green) | Sustainability elements |
| Background | `#F8F3EE` (Cream) | Page backgrounds |
| Surface | `#EEE2D4` (Tan) | Card surfaces |
| Body Text | `#5E5147` (Brown) | Primary text |

**To modify a color:**

```typescript
// Frontend/tailwind.config.ts
export default {
  theme: {
    colors: {
      primary: '#8e4922',
      'background-cream': '#F8F3EE',
      // Add or modify here
    }
  }
};
```

---

### **3. Creating a New Page**

To add a new route (e.g., `/sustainability`):

1. **Create the directory and file**:
   ```bash
   mkdir -p Frontend/src/app/sustainability
   touch Frontend/src/app/sustainability/page.tsx
   ```

2. **Add your React component**:
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

3. **Add navigation link** in `Frontend/src/components/Navbar.tsx`:
   ```tsx
   const navLinks = [
     // ... existing links
     { name: t.nav.sustainability, href: '/sustainability' },
   ];
   ```

4. **Add translations** in `Frontend/src/dictionaries/translations.ts`:
   ```typescript
   export const translations = {
     ID: {
       sustainability: {
         title: 'Keberlanjutan',
         // ...
       }
     },
     EN: {
       sustainability: {
         title: 'Sustainability',
         // ...
       }
     }
   };
   ```

---

### **4. Working with Components**

**Reusable components** are located in `Frontend/src/components/`:

| Component | Purpose |
|-----------|---------|
| **Navbar.tsx** | Sticky header with language toggle, mobile drawer menu, glassmorphism effect |
| **Footer.tsx** | 4-column luxury footer with links, brand info, copyright |
| **ScrollReveal.tsx** | IntersectionObserver wrapper for scroll-triggered animations |

**Example: Using ScrollReveal**

```tsx
import ScrollReveal from '@/components/ScrollReveal';

export default function MySection() {
  return (
    <ScrollReveal>
      <div className="my-content">Content animates on scroll</div>
    </ScrollReveal>
  );
}
```

---

### **5. Language Persistence**

Language preference is automatically saved to browser `localStorage` and restored on revisit:

- **Storage Key**: `batik_zahro_lang`
- **Supported Values**: `'ID'` or `'EN'`
- **Provider**: `LanguageProvider` in `Frontend/src/context/LanguageContext.tsx`

Users can toggle language via the Navbar language button without page reload.

---

## 👥 Collaboration Guidelines

### **Code Standards**

- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS utility classes
- **Naming**: camelCase for variables/functions, PascalCase for components
- **File Structure**: Follow existing directory organization
- **Imports**: Use absolute imports with `@/` prefix

### **Commit Conventions**

- Use clear, descriptive commit messages
- Format: `feat: add new feature` or `fix: resolve issue`
- Reference issue numbers when applicable: `fix: resolve issue #42`

### **Pull Request Process**

1. Create a feature branch: `git checkout -b feature/your-feature-name`
2. Make your changes and commit
3. Push to your branch: `git push origin feature/your-feature-name`
4. Open a Pull Request with a clear description
5. Request reviews from team members
6. Address feedback and iterate
7. Merge once approved

### **Documentation**

- Update `README.md` or relevant guides when adding features
- Document new components in comments or separate `.md` files
- Keep translation dictionaries synchronized across ID/EN

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'feat: add amazing feature'`)
4. **Push to your branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### **Areas for Contribution**

- 🎨 Design system enhancements
- 📝 Content & translation improvements
- 🚀 Performance optimization
- ♿ Accessibility improvements
- 📱 Responsive design refinements
- 🧪 Testing & quality assurance

---

## 📊 Project Status

| Component | Status | Notes |
|-----------|--------|-------|
| **Frontend** | ✅ Active | Next.js 16, Tailwind CSS, fully functional |
| **Backend** | 🔄 Planned | Python services (placeholder stage) |
| **Design System** | ✅ Complete | Documented in `Frontend/DESIGN.md` |
| **i18n (ID/EN)** | ✅ Complete | Centralized dictionary, localStorage persistence |
| **Deployment** | ✅ Live | [zahro-project.vercel.app](https://zahro-project.vercel.app) |

---

## 📞 Support & Questions

- **Project Lead**: [@aesxiety](https://github.com/aesxiety)
- **Issues**: [GitHub Issues](https://github.com/aesxiety/Zahro-Project/issues)
- **Discussions**: [GitHub Discussions](https://github.com/aesxiety/Zahro-Project/discussions)

---

## 📄 License

This project is licensed under the **ISC License** — see the `LICENSE` file for details.

---

## 🙏 Acknowledgments

- **Design System**: Artisanal Earth & Gold aesthetic
- **Built For**: Celebrating authentic Borneo batik heritage
- **Typography**: Google Fonts (Cormorant Garamond, Manrope)
- **Icons**: Lucide React
- **Hosting**: Vercel

---

<div align="center">

**Made with ❤️ for Batik Zahro — Borneo's Contemporary Heritage**

[Visit Live Site](https://zahro-project.vercel.app) • [GitHub Repo](https://github.com/aesxiety/Zahro-Project)

</div>
