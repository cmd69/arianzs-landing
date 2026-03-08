import { useState, useEffect } from 'react'

/**
 * Respeta prefers-reduced-motion (Web Interface Guidelines).
 * Cuando es true, las animaciones deben desactivarse o reducirse (duration: 0).
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const handler = () => setReduced(mq.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return reduced
}
