import { Link, useSearchParams } from 'react-router-dom'

// Keep in sync with the take-home route in App.jsx
const TAKE_HOME_PATH = '/th-7k9a2xq4'

export default function PostLayout({ sections, children }) {
  const [searchParams] = useSearchParams()
  const fromTakeHome = searchParams.get('from') === 'th'
  const backHref = fromTakeHome ? TAKE_HOME_PATH : '/'
  const backLabel = fromTakeHome ? 'Back to take-home' : 'Index'
  return (
    <article className="post">
      <a href="#post-content" className="skip-link">Skip to content</a>
      <aside className="post-sidebar">
        <Link to={backHref} className="back">&#8617; {backLabel}</Link>
        <details className="post-toc" open>
          <summary>On this page</summary>
          <ul>
            {sections.map((s) => (
              <li key={s}>
                <a href={`#${slugify(s)}`}>{s}</a>
              </li>
            ))}
          </ul>
        </details>
      </aside>
      <div className="post-content" id="post-content">{children}</div>
    </article>
  )
}

export function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}
