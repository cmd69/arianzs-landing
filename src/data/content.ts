export const content = {
  hero: {
    scrollLabel: 'scroll ↓',
    linkGithub: '↗ GitHub',
    linkLinkedin: '↗ LinkedIn',
  },

  projects: {
    sectionLabel: 'Proyectos',
    heading: 'Mis proyectos personales',
    intro:
      'Son proyectos desarrollados en mi propio homelab, en mi tiempo libre y con código abierto y de uso libre —no son solo demos. Los uso en el día a día y están hosteados en mi servidor. Muchos incluyen enlace a demo en vivo además del repositorio en GitHub.',
    linkGithub: '↗ GitHub',
    linkDemo: '↗ Live demo',
    badgeInDevelopment: 'In Development',
  },

  about: {
    sectionLabel: 'About',
    heading: 'Quién soy',
    lines: [
      'Ingeniero informático con experiencia Backend y apasionado por DevOps y automatización de infraestructura.',
      'En mi tiempo libre fuera del trabajo, me encanta probar nuevas tecnologías, herramientas de IA y formas de trabajo para diseñar e implementar ideas y proyectos, mezclando desarrollo, despliegue y documentación.',
      'He descubierto mi pasión desarrollando mi homelab, con el que llevo trabajando casi 3 años.',
    ],
    skillsLabel: 'Skills',
    skills: [
      'Python', 'Docker', 'Linux', 'Git', 'Bash',
      'Proxmox', 'FastAPI', 'PostgreSQL',
      'Kubernetes', 'Terraform', 'AWS', 'CI/CD',
    ],
  },
} as const
