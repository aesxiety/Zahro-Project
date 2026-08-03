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

<<<<<<< HEAD
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
=======
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
>>>>>>> ad8b59f8793352dff1ba9b5a83267cc779cb1c6a
```

---

<<<<<<< HEAD
## 🛠️ How to Edit & Customize This Project

### A. Editing Page Content & Translations (Indonesian & English)

All text content across the website is managed through a central, type-safe dictionary:
📄 **`src/dictionaries/translations.ts`**

To edit text or add new translations:
1. Open `src/dictionaries/translations.ts`.
2. Locate the relevant page section (`home`, `about`, `story`, `collection`, `contact`, `nav`, `footer`).
3. Update both `ID` (Indonesian) and `EN` (English) objects:
=======
## 📖 Development Guide

### **1. Editing Text Content & Translations**

All text across the website is centralized in a single, type-safe dictionary:

📄 **`Frontend/src/dictionaries/translations.ts`**

**To edit or add translations:**

1. Open `Frontend/src/dictionaries/translations.ts`
2. Locate the relevant section (`home`, `about`, `story`, `collection`, `contact`, `nav`, `footer`)
3. Update both `ID` (Indonesian) and `EN` (English) keys:
>>>>>>> ad8b59f8793352dff1ba9b5a83267cc779cb1c6a

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

<<<<<<< HEAD
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
=======
Then use in components:
```tsx
import { useLanguage } from '@/context/LanguageContext';

export default function MyComponent() {
  const { t } = useLanguage();
  return <h1>{t.home.titleLine1}</h1>;
>>>>>>> ad8b59f8793352dff1ba9b5a83267cc779cb1c6a
}
```

---

<<<<<<< HEAD
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
=======
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
>>>>>>> ad8b59f8793352dff1ba9b5a83267cc779cb1c6a
  );
}
```

<<<<<<< HEAD
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
=======
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
>>>>>>> ad8b59f8793352dff1ba9b5a83267cc779cb1c6a
