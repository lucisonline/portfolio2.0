export default function NewBadge() {
  return (
    <span className="new-badge">
      New
      <svg viewBox="0 0 60 30" preserveAspectRatio="none" aria-hidden>
        <path
          d="M 52 15 C 52 4, 35 3, 28 3 C 14 3, 4 9, 4 16 C 4 24, 18 27, 30 27 C 44 27, 54 22, 54 15 C 54 10, 48 6, 42 4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  )
}
