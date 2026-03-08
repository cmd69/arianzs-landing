import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import NavButton from '../ui/NavButton'
import NavDots from '../ui/NavDots'

interface Props {
  images: string[]
  currentIndex: number
  projectName: string
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function ImageLightbox({ images, currentIndex, projectName, onClose, onNavigate }: Props) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % images.length)
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + images.length) % images.length)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [currentIndex, images.length, onClose, onNavigate])

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        style={{ backgroundColor: 'rgba(10, 5, 3, 0.92)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-5 font-mono text-xs tracking-widest transition-opacity hover:opacity-60"
          style={{ color: 'var(--text-muted)' }}
          onClick={onClose}
        >
          ✕ cerrar
        </button>

        {/* Counter */}
        {images.length > 1 && (
          <span
            className="absolute top-4 left-5 font-mono text-xs tracking-widest"
            style={{ color: 'var(--text-muted)' }}
          >
            {currentIndex + 1} / {images.length}
          </span>
        )}

        {/* Image */}
        <motion.div
          className="relative max-w-5xl w-full flex flex-col items-center"
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[currentIndex]}
            alt={`${projectName} screenshot ${currentIndex + 1}`}
            className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
          />

          {/* Prev / Next / Dots */}
          {images.length > 1 && (
            <>
              <NavButton
                direction="prev"
                ariaLabel="Imagen anterior"
                onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
                className="left-0 -translate-x-3 md:-translate-x-10 w-9 h-9 transition-opacity hover:opacity-70"
              />
              <NavButton
                direction="next"
                ariaLabel="Imagen siguiente"
                onClick={() => onNavigate((currentIndex + 1) % images.length)}
                className="right-0 translate-x-3 md:translate-x-10 w-9 h-9 transition-opacity hover:opacity-70"
              />
              <div className="flex gap-2 mt-5">
                <NavDots
                  count={images.length}
                  activeIndex={currentIndex}
                  onNavigate={onNavigate}
                  dotSize={6}
                  inactiveColor="rgba(255,255,255,0.35)"
                  activeScale={1.4}
                />
              </div>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  )
}
