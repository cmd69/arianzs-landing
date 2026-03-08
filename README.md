# arianzs-landing

> Landing personal con Vite, React y Tailwind. Glassmorphism, proyectos del homelab y deploy con Docker.

Sitio de presentación y portfolio de [Arian Zaghi](https://landing.arianzs.one): una página única que muestra rol, enlaces y proyectos personales (homelab, bots, dashboards). Diseño oscuro con estética editorial y glassmorphism.

## Stack


| Capa         | Tecnología                                                                                                   |
| ------------ | ------------------------------------------------------------------------------------------------------------ |
| Framework    | [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Estilos      | [Tailwind CSS v4](https://tailwindcss.com/) vía `@tailwindcss/vite`                                          |
| Animaciones  | [Framer Motion](https://www.framer.com/motion/)                                                              |
| Fuentes      | Syne · DM Sans · JetBrains Mono (Google Fonts)                                                               |
| Runtime      | [nginx](https://nginx.org/) (producción) · servidor dev de Vite (desarrollo)                                 |
| Contenedores | Docker multi-stage                                                                                           |


## Diseño

Estética glassmorphism oscura con aire editorial futurista.

- **Paleta:** Midnight Espresso `#200F07` · Pistachio Frost `#C5E384`
- **Textura de ruido** para profundidad
- **Cursor personalizado** con `mix-blend-mode: difference`
- **Animaciones al scroll** con soporte de movimiento reducido

## Cómo empezar

```bash
make setup    # copia .env.example → .env (solo la primera vez)
make up       # arranca el servidor de desarrollo Vite en http://localhost:5173
```

Build de producción:

```bash
make build    # construye la imagen Docker multi-stage con nginx
make up-prod  # sirve el build estático en PROD_PORT (por defecto: 8090)
```

## Estructura del proyecto

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

## Contenido

Para cambiar el contenido del sitio, edita:

- `src/data/profile.ts` — nombre, rol, enlaces sociales
- `src/data/projects.ts` — lista de proyectos, capturas, tags, enlaces
- `src/data/content.ts` — textos de la UI (hero, about, sección proyectos)
- `public/assets/screenshots/` — imágenes de captura de los proyectos

## Variables de entorno

```env
PORT=5173       # Puerto del servidor de desarrollo Vite
PROD_PORT=8090  # Puerto del host para nginx (producción)
```

Copia `.env.example` a `.env` y ajústalo si hace falta.