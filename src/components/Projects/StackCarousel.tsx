import { useState, useRef, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import NavButton from '../ui/NavButton'
import NavDots from '../ui/NavDots'

interface Props {
  images: string[]
  projectName: string
  imageScales?: number[]
  maxDesktopWidth?: number
  onImageClick: (index: number) => void
}

export default function StackCarousel({ images, projectName, imageScales, maxDesktopWidth = 420, onImageClick }: Props) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [imageSizes, setImageSizes] = useState<Record<number, { w: number; h: number }>>({})
  const scrollRef = useRef<HTMLDivElement>(null)
  const desktopWrapRef = useRef<HTMLDivElement>(null)

  const handleImageLoad = useCallback((index: number, e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget
    setImageSizes((prev) => ({ ...prev, [index]: { w: img.naturalWidth, h: img.naturalHeight } }))
  }, [])

  const navigate = useCallback(
    (next: number) => {
      setDirection(next > activeIndex ? 1 : -1)
      setActiveIndex(next)
      const el = scrollRef.current
      if (el && el.clientWidth > 0) {
        el.scrollTo({ left: next * el.clientWidth, behavior: 'smooth' })
      }
    },
    [activeIndex]
  )

  const handleScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el || images.length <= 1) return
    const slideWidth = el.clientWidth
    const index = Math.round(el.scrollLeft / slideWidth)
    setActiveIndex(Math.min(index, images.length - 1))
  }, [images.length])

  const prev = () => navigate((activeIndex - 1 + images.length) % images.length)
  const next = () => navigate((activeIndex + 1) % images.length)

  const isMultiImage = images.length > 1

  const scale = imageScales?.[activeIndex] ?? 1
  const desktopWidth =
    imageSizes[activeIndex] != null
      ? Math.min(maxDesktopWidth, Math.round(imageSizes[activeIndex].w * scale))
      : undefined

  return (
    <div className="w-full flex flex-col items-end">
      {/* Móvil: scroll horizontal con scroll-snap para múltiples imágenes */}
      {isMultiImage ? (
        <>
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="md:hidden overflow-x-auto overflow-y-hidden snap-x snap-mandatory flex rounded-xl glass gradient-border scanlines cursor-pointer group"
            style={{
              WebkitOverflowScrolling: 'touch',
              overscrollBehaviorX: 'contain',
              touchAction: 'manipulation',
            }}
          >
            {images.map((src, i) => {
              const scale = imageScales?.[i] ?? 1
              return (
                <div
                  key={i}
                  className="flex-none w-full min-w-full snap-start flex justify-center items-start"
                >
                  <img
                    src={src}
                    alt={`${projectName} screenshot ${i + 1}`}
                    className="h-auto max-h-[70vh] w-auto max-w-full object-contain block"
                    style={{ width: `${scale * 100}%` }}
                    loading="lazy"
                    onClick={() => onImageClick(i)}
                  />
                </div>
              )
            })}
          </div>
          {/* Desktop: contenedor con ancho según imagen para que no quede más ancho que la imagen */}
          <div
            ref={desktopWrapRef}
            className="hidden md:block w-fit max-w-full md:mr-8"
          >
            <div
              className="relative glass gradient-border scanlines rounded-xl overflow-hidden cursor-pointer group"
              style={
                desktopWidth != null
                  ? { width: `${desktopWidth}px`, maxWidth: '100%' }
                  : undefined
              }
            >
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeIndex}
                  className="flex justify-center items-start"
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -40 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <img
                    src={images[activeIndex]}
                    alt={`${projectName} screenshot ${activeIndex + 1}`}
                    className="block w-full h-auto"
                    loading="lazy"
                    onLoad={(e) => handleImageLoad(activeIndex, e)}
                    onClick={() => onImageClick(activeIndex)}
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center pointer-events-none">
                <span
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-mono text-xs tracking-widest"
                  style={{ color: 'var(--accent)' }}
                >
                  ↗ ampliar
                </span>
              </div>
              <NavButton
                direction="prev"
                ariaLabel="Imagen anterior"
                onClick={(e) => { e.stopPropagation(); prev() }}
                className="left-2 w-7 h-7 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              />
              <NavButton
                direction="next"
                ariaLabel="Imagen siguiente"
                onClick={(e) => { e.stopPropagation(); next() }}
                className="right-2 w-7 h-7 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              />
            </div>
          </div>
        </>
      ) : (
        /* Una sola imagen: mismo layout en todos los tamaños */
        <div className="relative glass gradient-border scanlines rounded-xl overflow-hidden cursor-pointer group">
          <img
            src={images[0]}
            alt={`${projectName} screenshot 1`}
            className="w-full h-auto block"
            loading="lazy"
            onClick={() => onImageClick(0)}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center pointer-events-none">
            <span
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-mono text-xs tracking-widest"
              style={{ color: 'var(--accent)' }}
            >
              ↗ ampliar
            </span>
          </div>
        </div>
      )}

      {/* Navigation dots — centrados con la imagen (mismo ancho que el carrusel en desktop) */}
      {isMultiImage && (
        <div className="flex gap-3 justify-center items-center mt-8 mb-6 md:mb-4 min-h-[44px] lg:mt-10 lg:gap-4 w-full md:mr-8" style={{ maxWidth: `${maxDesktopWidth}px` }}>
          <NavDots
            count={images.length}
            activeIndex={activeIndex}
            onNavigate={navigate}
            dotSize={10}
            inactiveColor="var(--text-muted)"
            activeScale={1.3}
          />
        </div>
      )}
    </div>
  )
}
