import { Link } from 'react-router-dom'
import NewBadge from '../components/NewBadge.jsx'

const posts = [
  { year: 2026, title: 'Yousign — Reducing errors in QES', slug: 'yousign-qes', date: '19/04', isNew: true },
  { year: 2026, title: 'Liveline', slug: 'liveline', date: '16/02' },
  { year: 2026, title: 'Agentation', slug: 'agentation', date: '21/01' },
  { year: 2026, title: 'Annotating for agents', slug: 'annotating-for-agents', date: '16/01' },
  { year: 2026, title: 'Morphing icons with Claude', slug: 'morphing-icons-with-claude', date: '13/01' },
  { year: 2025, title: 'Honkish', slug: 'honkish', date: '23/05' },
  { year: 2024, title: 'Family Values', slug: 'family-values', date: '08/07' },
]

export default function Home() {
  let lastYear = null
  return (
    <div className="home">
      <header className="home-header">
        <h1>Benji Taylor</h1>
        <p className="updated">Updated Mar 25, 2026</p>
      </header>

      <div className="home-body">
        <p>I was born in London, UK, and now live in Los Angeles, CA.</p>

        <p>
          I founded <a href="https://lfe.org">Los Feliz Engineering</a>, a consumer
          software company named after the first neighbourhood I moved to in the U.S.
          We created <a href="https://honk.me">Honk</a>, a real-time messaging app,
          and <a href="https://family.co">Family</a>, a self-custody crypto wallet.
          In September 2023, LFE was acquired by <a href="https://aave.com">Aave Labs</a>,
          where I served as CPO until October 2025.
        </p>

        <p>
          I currently work at <a href="https://spacex.com">SpaceX</a>/<a href="https://x.ai">xAI</a>,
          where I lead design for <a href="https://x.com">X</a>. Previously, I was Head
          of Design at <a href="https://base.org">Base</a>, a division of Coinbase.
        </p>

        <p>
          I&rsquo;m also a co-founder at <a href="#">Dip</a>, which creates and publishes
          tools for achieving interface excellence, such as <a href="#">cmdk</a> and{' '}
          <a href="#">Agentation</a>.
        </p>

        <p>I consider myself a designer at heart and enjoy building highly polished products.</p>

        <p>
          You can find me on <a href="https://x.com/benjitaylor">X</a>,{' '}
          <a href="https://instagram.com">Instagram</a>, or reach me via{' '}
          <a href="mailto:hello@benji.org">email</a>.
        </p>
      </div>

      <section className="writing">
        <h2 className="writing-heading">Writing</h2>
        {posts.map((p, i) => {
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
                {p.isNew && <NewBadge />}
              </div>
              <div className="writing-date">{p.date}</div>
            </div>
          )
        })}
      </section>
    </div>
  )
}
