# Daal Crown King Ltd

A premium, world-class web platform built for **Daal Crown King Ltd**, showcasing excellence in construction, luxury real estate development, structural rehabilitation, and high-quality building materials.

## 🚀 Tech Stack

This project is built using modern frontend architecture to ensure maximum performance, fluid animations, and a premium user experience.

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Components**: [Radix UI](https://www.radix-ui.com/)
- **Typography**: Playfair Display (Headers) & Inter (Body)
- **Package Manager**: pnpm

## ✨ Key Features

- **Premium Aesthetic**: Completely solid interface utilizing custom backdrop blurs, glassmorphic elements, and border-based layering (Zero Gradients).
- **Fluid Interactions**: Heavy use of scroll-driven animations via Framer Motion, including edge-to-edge parallax heros, bento-grid sequential reveals, and interactive project masonry layouts.
- **Adaptive Lighting**: Full native support for seamless transitions between Light and Dark mode using semantic CSS variables.
- **Mobile-First Responsive**: Precision engineering ensures edge-to-edge scaling on mobile devices, with dynamic container bounding preventing horizontal overflow on all screen sizes.
- **Scroll-Linked Mobile UX**: Custom Framer Motion intersection observers (`useInView`) trigger hover-states automatically as users scroll down on touch devices.

## 📦 Getting Started

First, install the dependencies using the new package manager:

```bash
pnpm install
```

Start the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Project Structure

- `app/` - Next.js App Router, layout definitions, and global CSS (`globals.css`).
- `components/layout/` - Global structural components like the floating interactive `Navbar` and the massive typographic `Footer`.
- `components/sections/` - The core landing page sections (`Hero`, `About`, `Services`, `Projects`, etc.).
- `components/common/` - Reusable UI elements like `GlassCard` and `SectionHeading`.

## 🎨 Design System Constraints

This project adheres to a strict visual design system:

1. **No Gradients**: All depth is achieved through backdrop-blurs, varying solid token opacities, and border lighting.
2. **Typography Heavy**: Utilizing heavy weights of `Playfair Display` for massive, editorial-style headings.
3. **Scroll Hooks**: Use `whileInView` framer-motion animations universally instead of static loading.

## 📄 License

This project is proprietary and confidential. All rights reserved by Daal Crown King Ltd.
