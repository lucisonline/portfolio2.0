import { Link } from 'react-router-dom'

export default function PostLayout({ title, sections, children }) {
  return (
    <article className="post">
      <a href="#post-content" className="skip-link">Skip to content</a>
      <aside className="post-sidebar">
        <Link to="/" className="back">&#8617; Index</Link>
        <div className="title">{title}</div>
        <details className="post-toc">
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
