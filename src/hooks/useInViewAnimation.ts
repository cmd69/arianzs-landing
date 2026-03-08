import { useRef } from 'react'
import { useInView, type UseInViewOptions } from 'framer-motion'
import { useReducedMotion } from './useReducedMotion'

interface UseInViewAnimationResult {
  ref: React.RefObject<HTMLDivElement>
  isInView: boolean
  noTransition: { duration: 0 } | undefined
}

export function useInViewAnimation(options?: UseInViewOptions): UseInViewAnimationResult {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, options)
  const reducedMotion = useReducedMotion()
  const noTransition: { duration: 0 } | undefined = reducedMotion ? { duration: 0 } : undefined
  return { ref, isInView, noTransition }
}
