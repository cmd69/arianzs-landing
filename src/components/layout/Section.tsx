import type { ReactNode } from 'react'

interface SectionProps {
  id?: string
  className?: string
  children: ReactNode
  /** default = section-y + section-x; hero = solo section-x, min-h-screen; tight = section-y menor (p. ej. footer) */
  variant?: 'default' | 'hero' | 'tight'
  decoLine?: boolean
  backgroundNumber?: string
  /** Clase extra para el contenedor interior (content-width). Ej: max-w-2xl, max-w-4xl */
  innerClassName?: string
  as?: 'section' | 'footer' | 'div'
  /** Contenido absoluto al final (ej. scroll hint del Hero), se renderiza como hijo directo del Tag */
  bottomSlot?: ReactNode
}

export default function Section({
  id,
  className = '',
  children,
  variant = 'default',
  decoLine = false,
  backgroundNumber,
  innerClassName = '',
  as: Tag = 'section',
  bottomSlot,
}: SectionProps) {
  const isHero = variant === 'hero'
  const isTight = variant === 'tight'

  const outerClasses = [
    'relative overflow-x-hidden',
    'section-x',
    isHero ? 'min-h-screen flex flex-col justify-center max-md:justify-start max-md:pt-[22vh]' : '',
    isTight ? 'section-y-tight' : !isHero ? 'section-y' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag
      id={id}
      className={outerClasses}
      {...(isHero && { 'data-variant': 'hero' })}
      style={{ backgroundColor: 'var(--bg)' }}
    >
      {backgroundNumber != null && (
        <div
          className="absolute inset-0 flex items-center justify-end pointer-events-none select-none overflow-hidden"
          aria-hidden
        >
          <span
            className={`section-number translate-x-1/4 ${isHero ? 'opacity-60' : ''}`}
            style={{ color: 'var(--number-bg)' }}
          >
            {backgroundNumber}
          </span>
        </div>
      )}

      <div className={`content-width relative z-10 ${innerClassName}`.trim()}>
        {decoLine && (
          <div
            className="deco-line"
            style={{ marginBottom: 'calc(2 * var(--block-gap))' }}
          />
        )}
        {children}
      </div>
      {bottomSlot}
    </Tag>
  )
}
