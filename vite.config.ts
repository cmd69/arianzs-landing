import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  server: {
    // Escuchar en todas las interfaces (útil en Docker)
    host: true,
    // Aceptar peticiones con este Host (evita "Invalid Host header" con proxy/dominio)
    allowedHosts: true, // permite cualquier host; o ej.: ['landing.arianzs.one', 'localhost']
  },
})
