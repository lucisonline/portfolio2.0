import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'

const BAKED_ROTATIONS = [-4, 3, -2, 5, -3, 4, -5, 2, -1, 6]
const GAP = 72
const SHOVE = 360
const SHOVE_ROT = 8
const ACTIVE_SCALE = 1.15
const INACTIVE_SCALE = 0.85

export default function CardStack({ items }) {
  const [active, setActive] = useState(null)
  const centerOffset = (items.length - 1) / 2
  const rotations = useMemo(
    () => items.map((_, i) => BAKED_ROTATIONS[i % BAKED_ROTATIONS.length]),
    [items.length],
  )

  return (
    <div
      className="card-stack"
      onClick={() => setActive(null)}
      role="presentation"
    >
      {items.map((item, i) => {
        const isActive = active === i
        const hasActive = active !== null

        let x, rotate, scale
        if (!hasActive) {
          x = (i - centerOffset) * GAP
          rotate = rotations[i]
          scale = 1
        } else if (isActive) {
          x = 0
          rotate = 0
          scale = ACTIVE_SCALE
        } else {
          const side = Math.sign(i - active)
          x = side * SHOVE
          rotate = side * SHOVE_ROT
          scale = INACTIVE_SCALE
        }

        const restZ = items.length - Math.abs(i - centerOffset)
        return (
          <div
            key={i}
            className="card-stack-slot"
            style={{ zIndex: isActive ? 99 : restZ }}
          >
            <motion.button
              type="button"
              className="card-stack-card"
              animate={{ x, rotate, scale }}
              transition={{ type: 'spring', stiffness: 260, damping: 26 }}
              whileHover={hasActive ? undefined : { y: -8 }}
              onClick={(e) => {
                e.stopPropagation()
                setActive(isActive ? null : i)
              }}
              aria-label={item.alt || `Card ${i + 1}`}
              aria-pressed={isActive}
            >
              {item.src ? (
                <img src={item.src} alt={item.alt} draggable="false" />
              ) : (
                <div className="card-stack-placeholder" aria-hidden="true" />
              )}
            </motion.button>
          </div>
        )
      })}
    </div>
  )
}
