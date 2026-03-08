import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [isPointer, setIsPointer] = useState(false)
  const [hasFinePointer, setHasFinePointer] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)')
    if (!fine.matches) return
    setHasFinePointer(true)

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    const checkCursor = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer')
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mousemove', checkCursor)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousemove', checkCursor)
    }
  }, [])

  if (!hasFinePointer) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      animate={{ x: pos.x - 8, y: pos.y - 8 }}
      transition={{ type: 'tween', duration: 0.04, ease: 'linear' }}
    >
      <div
        style={{
          width: isPointer ? 20 : 16,
          height: isPointer ? 20 : 16,
          borderRadius: '50%',
          border: `1.5px solid #C5E384`,
          background: isPointer ? 'rgba(197,227,132,0.2)' : 'transparent',
          mixBlendMode: 'difference',
          transition: 'width 0.2s, height 0.2s, background 0.2s',
        }}
      />
    </motion.div>
  )
}
