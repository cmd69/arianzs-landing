# arianzs-landing

Personal portfolio landing page for [Arian Zaghi](https://landing.arianzs.one) — DevOps Engineer & Builder.

## Stack

| Layer | Technology |
|---|---|
| Framework | [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Styles | [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite` |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Fonts | Syne · DM Sans · JetBrains Mono (Google Fonts) |
| Runtime | [nginx](https://nginx.org/) (production) · Vite dev server (development) |
| Containerization | Docker multi-stage build |

## Design

Dark glassmorphism aesthetic with a futuristic editorial feel.

- **Palette:** Midnight Espresso `#200F07` · Pistachio Frost `#C5E384`
- **Noise texture** overlay for depth
- **Custom cursor** with `mix-blend-mode: difference`
- **Scroll-triggered animations** with reduced-motion support

## Getting Started

```bash
make setup    # copy .env.example → .env (first time only)
make up       # start Vite dev server at http://localhost:5173
```

Production build:

```bash
make build    # build nginx multi-stage Docker image
make up-prod  # serve static build at PROD_PORT (default: 8090)
```

## Project Structure

```
src/
├── data/           # profile.ts · projects.ts · content.ts
├── components/
│   ├── Hero/
│   ├── Projects/   # ProjectCard · StackCarousel · ImageLightbox
│   ├── About/
│   ├── Footer/
│   ├── layout/     # Section wrapper
│   └── ui/         # CustomCursor · NavButton · NavDots
└── hooks/          # useScrollAnimation · useReducedMotion · useInViewAnimation
```

## Content

Edit these files to update the site content:

- `src/data/profile.ts` — name, role, social links
- `src/data/projects.ts` — project list, screenshots, tags, links
- `src/data/content.ts` — UI text strings (hero, about, projects section)
- `public/assets/screenshots/` — project screenshot images

## Environment Variables

```env
PORT=5173       # Vite dev server port
PROD_PORT=8090  # nginx host port (production)
```

Copy `.env.example` to `.env` and adjust as needed.
