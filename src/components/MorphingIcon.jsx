import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Each icon is defined by three line segments so they can morph between each other.
// Coordinates are normalized to a 24x24 box.
export const ICONS = {
  menu: [
    [4, 7, 20, 7],
    [4, 12, 20, 12],
    [4, 17, 20, 17],
  ],
  cross: [
    [6, 6, 18, 18],
    [12, 12, 12, 12],
    [6, 18, 18, 6],
  ],
  plus: [
    [12, 4, 12, 20],
    [12, 12, 12, 12],
    [4, 12, 20, 12],
  ],
  minus: [
    [4, 12, 20, 12],
    [12, 12, 12, 12],
    [12, 12, 12, 12],
  ],
  equals: [
    [4, 9, 20, 9],
    [12, 12, 12, 12],
    [4, 15, 20, 15],
  ],
  check: [
    [4, 13, 10, 19],
    [10, 19, 10, 19],
    [10, 19, 20, 5],
  ],
  play: [
    [6, 4, 6, 20],
    [6, 4, 20, 12],
    [6, 20, 20, 12],
  ],
  pause: [
    [8, 4, 8, 20],
    [12, 12, 12, 12],
    [16, 4, 16, 20],
  ],
  'arrow-right': [
    [4, 12, 20, 12],
    [20, 12, 14, 6],
    [20, 12, 14, 18],
  ],
  'arrow-left': [
    [20, 12, 4, 12],
    [4, 12, 10, 6],
    [4, 12, 10, 18],
  ],
  'arrow-up': [
    [12, 20, 12, 4],
    [12, 4, 6, 10],
    [12, 4, 18, 10],
  ],
  'arrow-down': [
    [12, 4, 12, 20],
    [12, 20, 6, 14],
    [12, 20, 18, 14],
  ],
  'chev-right': [
    [9, 6, 15, 12],
    [15, 12, 15, 12],
    [15, 12, 9, 18],
  ],
  'chev-left': [
    [15, 6, 9, 12],
    [9, 12, 9, 12],
    [9, 12, 15, 18],
  ],
  'chev-up': [
    [6, 15, 12, 9],
    [12, 9, 12, 9],
    [12, 9, 18, 15],
  ],
  'chev-down': [
    [6, 9, 12, 15],
    [12, 15, 12, 15],
    [12, 15, 18, 9],
  ],
}

export default function MorphingIcon({ icon = 'menu', size = 28, cycle = false }) {
  const keys = Object.keys(ICONS)
  const [current, setCurrent] = useState(icon)

  useEffect(() => setCurrent(icon), [icon])

  useEffect(() => {
    if (!cycle) return
    const id = setInterval(() => {
      setCurrent((c) => {
        const i = keys.indexOf(c)
        return keys[(i + 1) % keys.length]
      })
    }, 900)
    return () => clearInterval(id)
  }, [cycle])

  const lines = ICONS[current] || ICONS.menu

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {lines.map((l, i) => (
        <motion.line
          key={i}
          initial={false}
          animate={{ x1: l[0], y1: l[1], x2: l[2], y2: l[3] }}
          transition={{ type: 'spring', stiffness: 260, damping: 26 }}
        />
      ))}
    </svg>
  )
}
