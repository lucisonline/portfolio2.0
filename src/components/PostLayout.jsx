import { Link } from 'react-router-dom'

export default function PostLayout({ title, sections, children }) {
  return (
    <article className="post">
      <aside className="post-sidebar">
        <Link to="/" className="back">&#8617; Index</Link>
        <div className="title">{title}</div>
        <ul>
          {sections.map((s) => (
            <li key={s}>
              <a href={`#${slugify(s)}`}>{s}</a>
            </li>
          ))}
        </ul>
      </aside>
      <div className="post-content">{children}</div>
    </article>
  )
}

export function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}
