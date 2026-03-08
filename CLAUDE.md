# arianzs-landing

Portfolio personal de Arian Zaghi. Landing page con glassmorphism, estilo futurista editorial.

## Descripción

Landing page desplegada en `landing.arianzs.one`. Muestra proyectos del homelab con links a demos, screenshots y referencias a GitHub. Estilo glassmorphism con paleta Midnight Espresso + Pistachio Frost.

## Stack

- **Framework:** Vite + React + TypeScript
- **Estilos:** Tailwind CSS v4 via `@tailwindcss/vite`
- **Animaciones:** Framer Motion
- **Deploy:** Docker multi-stage (builder Node → runtime nginx)

## Arrancar

```bash
make setup     # genera .env (primera vez)
make up        # dev: Vite hot-reload en http://localhost:5173
make build     # construye imagen prod
make up-prod   # prod: nginx en PROD_PORT (default 8090)
```

## Editar contenido

- **Perfil:** `src/data/profile.ts` — nombre, rol, links sociales
- **Proyectos:** `src/data/projects.ts` — lista de proyectos, tags, screenshots
- **About skills:** `src/components/About/About.tsx` — array `skills`

## Paleta

| Token | Valor |
|---|---|
| `--bg` | `#200F07` (Midnight Espresso) |
| `--accent` | `#C5E384` (Pistachio Frost) |
| `--text` | `#F5F0ED` |

## Tipografía

- Display: **Syne** (700/800) — titulares
- Body: **DM Sans** (400/500) — descripciones
- Mono: **JetBrains Mono** — tags y labels

## Estructura

```
src/
├── data/           # profile.ts, projects.ts
├── components/
│   ├── Hero/
│   ├── Projects/   # ProjectsSection, ProjectCard, TelegramMockup
│   ├── About/
│   ├── Footer/
│   └── ui/         # CustomCursor
└── hooks/          # useScrollAnimation (Framer Motion variants)
```

## Deploy

- `docker-compose.yml` → dev (Vite dev server)
- `docker-compose.prod.yml` → prod (nginx multi-stage)
- El nginx del host apunta manualmente al contenedor

## Breakpoints

- **Móvil:** estilos por defecto o `max-md:` cuando haga falta.
- **Tablet:** `md:` (768px).
- **Escritorio:** `lg:` (1024px), `xl:` (1280px).
- **Pantallas grandes (≥ 1440px):** clase `.hero-role` en CSS o `@media (min-width: 1440px)`.

## Apps Completadas → Landing

**A partir de ahora:** Toda aplicación terminada del homelab debe añadirse a esta landing page.

1. Actualizar `src/data/projects.ts` con:
   - `number`: ID secuencial
   - `demo`: URL pública (dominio, bot Telegram, etc.)
   - `inDevelopment`: false si está completada
2. Agregar screenshots a `public/assets/screenshots/`
3. Actualizar registro en `APPS_REGISTRY.md`
4. Distinguir claramente instancias pro vs dev en el registro

## Notas

- No editar `.env` directamente — usar `.env.example` como referencia
- Screenshots en `public/assets/screenshots/`
- Proyecto creado: 2026-03-08
- Última actualización: 2026-03-08 (Proxmox Dashboard → proxmox.arianzs.one)
