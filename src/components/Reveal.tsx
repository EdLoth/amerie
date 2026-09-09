import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Direction = 'up' | 'left' | 'right' | 'none'

interface RevealProps {
  children: ReactNode
  direction?: Direction
  delay?: number
  duration?: number
  distance?: number
  className?: string
  scale?: boolean
}

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 24 },
  left: { x: -30 },
  right: { x: 30 },
  none: {},
}

export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  distance,
  className,
  scale = false,
}: RevealProps) {
  const offset = offsets[direction]
  const initial = {
    opacity: 0,
    x: offset.x !== undefined ? (distance ?? offset.x) : 0,
    y: offset.y !== undefined ? (distance ?? offset.y) : 0,
    scale: scale ? 0.97 : 1,
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
