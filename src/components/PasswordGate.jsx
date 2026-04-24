import { useEffect, useState } from 'react'

async function sha256(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text))
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

export default function PasswordGate({ hash, storageKey, children }) {
  const [unlocked, setUnlocked] = useState(() => {
    try {
      return sessionStorage.getItem(`pg:${storageKey}`) === '1'
    } catch {
      return false
    }
  })
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)
  const [checking, setChecking] = useState(false)

  useEffect(() => {
    if (unlocked) return
    document.body.classList.add('home-page', 'gate-page')
    return () => document.body.classList.remove('gate-page')
  }, [unlocked])

  if (unlocked) return children

  async function onSubmit(e) {
    e.preventDefault()
    setChecking(true)
    const digest = await sha256(input)
    setChecking(false)
    if (digest === hash) {
      try {
        sessionStorage.setItem(`pg:${storageKey}`, '1')
      } catch {}
      setUnlocked(true)
    } else {
      setError(true)
      setInput('')
    }
  }

  return (
    <div className="gate">
      <form className="gate-form" onSubmit={onSubmit}>
        <label className="gate-label" htmlFor="gate-password">Password</label>
        <input
          id="gate-password"
          className="gate-input"
          type="password"
          autoFocus
          autoComplete="current-password"
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
            setError(false)
          }}
        />
        <button type="submit" className="gate-submit" disabled={checking || !input}>
          {checking ? '...' : 'Enter'}
        </button>
        {error && <p className="gate-error">Wrong password.</p>}
      </form>
    </div>
  )
}
