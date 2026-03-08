export interface Project {
  id: string
  number: string
  name: string
  description: string
  longDescription: string
  tags: string[]
  screenshot?: string
  screenshots?: string[]
  imageScales?: number[]
  github?: string
  demo?: string
  inDevelopment?: boolean
  mockupType?: 'telegram'
}

export const projects: Project[] = [
  {
    id: 'expensivo',
    number: '01',
    name: 'Expensivo',
    description: 'Gestión financiera personal.',
    longDescription:
      'Full-stack app para control de gastos, ingresos e inversiones. Backend FastAPI con autenticación JWT y API REST completa; frontend Next.js con gráficos interactivos; PostgreSQL como base de datos. Soporta múltiples usuarios, categorías jerárquicas, seguimiento de activos (crypto, ETFs, acciones) e importación de datos desde CSV y Excel.',
    tags: ['FastAPI', 'Next.js', 'PostgreSQL', 'Docker'],
    screenshots: [
      '/assets/screenshots/expensivo-dashboard.png',
      '/assets/screenshots/expensivo-expenses.png',
      '/assets/screenshots/expensivo-wallet.png',
    ],
    imageScales: [1, 0.85, 1],
    github: 'https://github.com/cmd69/expensivo',
  },
  {
    id: 'proxmox_dashboard',
    number: '02',
    name: 'Proxmox Dashboard',
    description: 'Visualización interactiva de la arquitectura del homelab.',
    longDescription:
      'Dashboard visual para documentar y explorar la arquitectura del homelab Proxmox. Muestra VMs, servicios y recursos (CPU/RAM físico vs asignado) en un diagrama interactivo con ReactFlow. Panel de administración para editar la configuración; modo visualización público sin login.',
    tags: ['React', 'Node.js', 'ReactFlow', 'Docker'],
    screenshot: '/assets/screenshots/proxmox-diagram.png',
    github: 'https://github.com/cmd69/proxmox_dashboard',
    demo: 'https://proxmox.arianzs.one',
  },
  {
    id: 'luz_informer_bot',
    number: '03',
    name: 'Luz Informer Bot',
    description: 'Bot de Telegram para el precio PVPC con IA local.',
    longDescription:
      'Bot de Telegram que obtiene el precio PVPC por scraping de tarifaluzhora.es, guarda historial en SQLite y envía alertas diarias sobre franjas baratas/caras según umbrales configurables. Incluye integración con Ollama para responder preguntas sobre precios en lenguaje natural.',
    tags: ['Python', 'Telegram Bot', 'Ollama', 'Docker'],
    screenshots: [
      '/assets/screenshots/luz-informer-prices-now.jpg',
      '/assets/screenshots/luz-informer-general.jpg',
    ],
    imageScales: [0.75, 0.75],
    github: 'https://github.com/cmd69/luz_informer_bot',
    demo: 'https://t.me/luz_informer_bot',
  },
  {
    id: 'hermesbot',
    number: '04',
    name: 'HermesBot',
    description: 'Agente IA para automatización personal.',
    longDescription:
      'Bot inteligente con acceso a herramientas del homelab. Gestiona tareas, consulta APIs internas y automatiza flujos de trabajo mediante lenguaje natural.',
    tags: ['Python', 'LLM', 'Telegram', 'Docker'],
    inDevelopment: true,
    github: 'https://github.com/cmd69',
  },
]
