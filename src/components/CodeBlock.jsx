import { useState } from 'react'

export default function CodeBlock({ children }) {
  const [copied, setCopied] = useState(false)
  const lines = Array.isArray(children) ? children : [children]

  async function copy() {
    const text = lines.map((l) => (typeof l === 'string' ? l : flatten(l))).join('\n')
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1200)
    } catch {}
  }

  return (
    <div className="code-block">
      <button className="copy" onClick={copy} aria-label="Copy">
        {copied ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12l5 5L20 7"/></svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 012-2h10"/></svg>
        )}
      </button>
      <pre>
        {lines.map((line, i) => (
          <Row key={i} n={i + 1} content={line} />
        ))}
      </pre>
    </div>
  )
}

function Row({ n, content }) {
  return (
    <>
      <span className="ln">{n}</span>
      <span>{content}</span>
    </>
  )
}

function flatten(node) {
  if (typeof node === 'string') return node
  if (Array.isArray(node)) return node.map(flatten).join('')
  if (node && node.props) return flatten(node.props.children)
  return ''
}
