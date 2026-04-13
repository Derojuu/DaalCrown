'use client'

import { useRef, type RefObject } from 'react'
import { useInView } from 'framer-motion'

/** Mirrors desktop hover cards on touch: active while the element crosses the center band of the viewport. */
export function useScrollActive(margin = '-40% 0px -40% 0px') {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { margin: margin as any })
  return { ref: ref as RefObject<HTMLDivElement | null>, isInView }
}
