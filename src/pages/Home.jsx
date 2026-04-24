import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const caseStudies = [
  { year: 2025, title: 'Yousign - Reducing errors in QES', slug: 'yousign-qes', tagline: 'Research + Design · Mobile + Desktop' },
  { year: 2023, title: 'Ignition Program - Reshaping sign-up', slug: 'ignition-program', tagline: 'Research + Design · Mobile first' },
]

const writings = []

const sideProjects = []

const tabs = [
  { id: 'case-studies', label: 'Case studies', items: caseStudies },
  { id: 'writings', label: 'Writings', items: writings },
  { id: 'side-projects', label: 'Side projects', items: sideProjects },
]

function PostList({ items }) {
  if (items.length === 0) {
    return <p className="writing-empty">Nothing here yet.</p>
  }
  let lastYear = null
  return (
    <>
      {items.map((p) => {
        const showYear = p.year !== lastYear
        lastYear = p.year
        return (
          <div key={p.slug} className="writing-row">
            <div className="writing-year">{showYear ? p.year : ''}</div>
            <div className="writing-title">
              <Link to={`/${p.slug}`}>{p.title}</Link>
            </div>
            <div className="writing-tagline">{p.tagline}</div>
          </div>
        )
      })}
    </>
  )
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('case-studies')
  const active = tabs.find((t) => t.id === activeTab)

  useEffect(() => {
    document.body.classList.add('home-page')
    return () => document.body.classList.remove('home-page')
  }, [])

  return (
    <div className="home">
      <header className="home-header">
        <h1>Bonjour!<br />my name is Luc</h1>
      </header>

      <div className="home-body">
        <p>I&rsquo;m an Anthropologist turned Designer.</p>

        <p>
          I drive product design from insight to impact -
          research, strategy, and shipped product.
        </p>

        <p>
          I grew up between Paris, Beirut, and Scotland,
          so &ldquo;where are you from?&rdquo; usually turns into a story.
        </p>

        <p>
          Now at{' '}
          <a href="https://criteo.com" className="company-link">
            <svg
              className="company-logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden="true"
            >
              <rect width="32" height="32" rx="4" fill="#FE5000" />
              <path
                d="M24 16C24 20.4183 20.4183 24 16 24C11.5817 24 8 20.4183 8 16C8 11.5817 11.5817 8 16 8C20.4183 8 24 11.5817 24 16Z"
                fill="white"
              />
            </svg>
            Criteo
          </a>, on the Design Strategy team, working on what&rsquo;s next
          for our AI products.
        </p>

        <p>
          Before that i was at{' '}
          <a href="https://yousign.com/" className="company-link">
            <img src="/logos/yousign.svg" alt="" className="company-logo" />
            Yousign
          </a>,{' '}
          <a href="https://www.multiverse.io/en-GB" className="company-link">
            <img src="/logos/multiverse.svg" alt="" className="company-logo" />
            Multiverse
          </a>, and{' '}
          <a href="https://ignition-program.com/" className="company-link">
            <img src="/logos/ignition-program.svg" alt="" className="company-logo" />
            Ignition Program
          </a>.
        </p>

        <p>Let&rsquo;s build together.</p>

        <p>
          You can reach me on{' '}
          <a href="https://www.linkedin.com/in/lucaractingi/">LinkedIn</a>{' '}
          or by{' '}
          <a href="mailto:luc.aractingi@gmail.com">email</a>.
        </p>

        <p className="updated">Updated Apr 22, 2026</p>
      </div>

      <section className="writing">
        <div className="writing-tabs" role="tablist">
          {tabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={activeTab === t.id}
              className={`writing-tab${activeTab === t.id ? ' is-active' : ''}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
        <PostList items={active.items} />
      </section>
    </div>
  )
}
