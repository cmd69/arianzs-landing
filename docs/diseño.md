# Diseño — arianzs-landing

## Concepto visual

**Futurista × Apple Cinematic**

- Hero editorial con tipografía masiva que rompe la cuadrícula
- Projects con sticky full-screen scroll (mecánica Apple) + tratamiento editorial
- Micro-detalles: noise texture, cursor personalizado, scanlines en hover, border gradients animados

## Paleta de color

| Token CSS | Valor | Uso |
|---|---|---|
| `--bg` | `#200F07` | Fondo principal (Midnight Espresso) |
| `--accent` | `#C5E384` | CTAs, highlights, bordes activos (Pistachio Frost) |
| `--glass-bg` | `rgba(32,15,7,0.55)` | Superficie glassmorphism |
| `--glass-border` | `rgba(197,227,132,0.15)` | Bordes de cards en reposo |
| `--glass-border-hover` | `rgba(197,227,132,0.45)` | Bordes de cards en hover |
| `--text` | `#F5F0ED` | Texto principal |
| `--text-muted` | `rgba(245,240,237,0.5)` | Texto secundario |
| `--number-bg` | `rgba(197,227,132,0.04)` | Número de proyecto gigante en fondo |

## Tipografía

| Rol | Familia | Pesos | Uso |
|---|---|---|---|
| Display | Syne | 700, 800 | Titulares, números decorativos — carácter técnico/futurista |
| Body | DM Sans | 400, 500 | Descripciones y UI |
| Mono | JetBrains Mono | 400, 500 | Tags, labels, links |

Cargadas desde Google Fonts en `index.html`.

## Elementos decorativos recurrentes

- **Líneas horizontales** (`deco-line`): 1px, `opacity: 0.15`, atraviesan la pantalla
- **Número de sección gigante**: `clamp(8rem, 20vw, 22rem)`, color `--number-bg`
- **Noise SVG** en `body::before`: `opacity: 0.035` — atmósfera, evita look plastificado
- **Custom cursor** (`CustomCursor.tsx`): círculo pistacho con `mix-blend-mode: difference`
- **Scanlines** (`.scanlines::after`): aparecen en hover sobre cards

## Componentes clave

### Hero
- Fullscreen, fondo `--bg` + noise
- Tipografía Syne 800, `clamp(3.5rem, 9vw, 9rem)`
- Número decorativo `"00"` en background (`30vw`)
- Entrada staggered con Framer Motion desde abajo

### ProjectCard
- Layout grid asimétrico, alterna izquierda/derecha
- Screenshot con rotación sutil (±1.5deg) + glass border + scanlines
- Número gigante en background por sección
- Badge "In Development" para proyectos en curso
- TelegramMockup CSS puro para `luz_informer_bot`

### About
- Número `"03"` en background
- Skills como chips con `.tag` + staggered entry

### Footer
- Iconos SVG para GitHub y LinkedIn
- Línea decorativa superior

## Animaciones (Framer Motion)

Variantes reutilizables en `src/hooks/useScrollAnimation.ts`:

- `fadeUpVariants` — fade + translateY desde abajo
- `fadeInVariants` — fade simple
- `slideLeftVariants` — slide desde la izquierda
- `staggerContainerVariants` / `staggerItemVariants` — para listas de chips/tags
- `scaleVariants` — scale desde 0.92

Todas usan `useInView` con `once: true` para dispararse una sola vez al entrar en viewport.

## Decisiones técnicas

- **Tailwind v4**: usa `@import "tailwindcss"` en CSS, plugin `@tailwindcss/vite`
- **Sin Inter/Roboto**: Syne + DM Sans + JetBrains Mono (más carácter editorial)
- **CSS custom properties** para todos los tokens de color (fácil theming futuro)
- **cursor: none en html**: el cursor nativo se oculta, se usa `CustomCursor`
- **Docker multi-stage**: imagen final solo contiene nginx + dist (sin node_modules)
