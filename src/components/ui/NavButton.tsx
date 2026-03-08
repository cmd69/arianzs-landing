interface NavButtonProps {
  direction: 'prev' | 'next'
  onClick: (e: React.MouseEvent) => void
  ariaLabel: string
  className?: string
}

export default function NavButton({ direction, onClick, ariaLabel, className = '' }: NavButtonProps) {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full ${className}`}
      style={{ background: 'rgba(0,0,0,0.55)', color: 'var(--text)' }}
    >
      {direction === 'prev' ? '←' : '→'}
    </button>
  )
}
