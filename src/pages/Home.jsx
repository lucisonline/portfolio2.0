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
        const isYearBreak = lastYear !== null && showYear
        lastYear = p.year
        return (
          <div
            key={p.slug}
            className={`writing-row${isYearBreak ? ' year-break' : ''}`}
          >
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
        <h1>Bonjour - I&rsquo;m Luc.</h1>
      </header>

      <div className="home-body">
        <p>I&rsquo;m an Anthropologist + Designer.</p>

        <p>
          I grew up between Paris, Beirut, and Scotland,
          which mostly just means I&rsquo;m bad at answering &ldquo;where are you from.&rdquo;
        </p>

        <p>
          Currently working at{' '}
          <a href="https://criteo.com" className="company-link">
            <img src="/logos/criteo.svg" alt="" className="company-logo" />
            Criteo
          </a>, on the Design Strategy team, building on what our AI products
          will do next.
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

        <p>
          You can reach me on{' '}
          <a href="https://www.linkedin.com/in/luc-aractingi/">LinkedIn</a>,{' '}
          <a href="https://instagram.com">Instagram</a>, or by{' '}
          <a href="mailto:l.aractingi@criteo.com">email</a>.
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
