# Srivaari Agencies — Industrial Web Platform

A modern, high-performance web platform for **Srivaari Agencies**, a leading B2B supplier of industrial steam boilers, combustion burners, rotary gear & hydraulic pumps, road machinery spares, and pollution control equipment based in Secunderabad, India.

## Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/)
- **Bundler / Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Animation & Interactivity**: [GSAP](https://gsap.com/), [Lenis](https://lenis.darkroom.engineering/), [Three.js](https://threejs.org/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/gargisingh9310-ops/Srivaari-agencies-layout.git
   cd Srivaari-agencies-layout
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the local development server:

```bash
npm run dev
```

Visit the local URL shown in your terminal (typically `http://localhost:5173`).

### Production Build

To build the project for production:

```bash
npm run build
```

The output will be generated in the `dist` directory. You can preview the production build locally with:

```bash
npm run preview
```

## Project Structure

```text
├── assets/             # Raw & source brand and product media
├── public/             # Static public assets (icons, optimized images)
│   └── assets/         # Product and hero imagery served directly
├── src/
│   ├── components/     # Modular UI and section components
│   ├── data/           # Product and brand catalogs
│   ├── pages/          # Routed page views (Home, Products, Contact, etc.)
│   ├── utils/          # Helper utilities
│   ├── App.jsx         # App routing and shell
│   ├── index.css       # Global styles and Tailwind configuration
│   └── main.jsx        # Entrypoint
├── index.html          # HTML shell with SEO meta tags & web fonts
├── package.json        # Dependencies and scripts
└── vite.config.js      # Vite configuration
```

## License

Private / Proprietary to Srivaari Agencies.
