interface NavDotsProps {
  count: number
  activeIndex: number
  onNavigate: (index: number) => void
  dotSize?: number
  activeColor?: string
  inactiveColor?: string
  activeScale?: number
  ariaLabelPrefix?: string
}

export default function NavDots({
  count,
  activeIndex,
  onNavigate,
  dotSize = 8,
  activeColor = 'var(--accent)',
  inactiveColor = 'var(--text-muted)',
  activeScale = 1.3,
  ariaLabelPrefix = 'Imagen',
}: NavDotsProps) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          aria-label={`${ariaLabelPrefix} ${i + 1}`}
          onClick={() => onNavigate(i)}
          className="rounded-full transition-all duration-300 p-2.5 touch-manipulation"
          style={{
            width: `${dotSize}px`,
            height: `${dotSize}px`,
            background: i === activeIndex ? activeColor : inactiveColor,
            opacity: i === activeIndex ? 1 : 0.35,
            transform: i === activeIndex ? `scale(${activeScale})` : 'scale(1)',
          }}
        />
      ))}
    </>
  )
}
