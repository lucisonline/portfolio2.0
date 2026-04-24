import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PasswordGate from '../components/PasswordGate.jsx'
import CardStack from '../components/CardStack.jsx'

// sha256("lucgotthejob")
// Change password: run `node -e 'const c=require("crypto"); console.log(c.createHash("sha256").update("NEW_PW").digest("hex"))'`
const PASSWORD_HASH = 'a4de26d4501d7c8490b9eaaea6a8eebf9eeab01bbbcd5a63c4b9bcd2d6bab17d'

const caseStudies = [
  { year: 2025, title: 'Yousign — Reducing errors in QES', slug: 'yousign-qes', tagline: 'Research + Design · Mobile + Desktop' },
  { year: 2023, title: 'Ignition Program — Reshaping sign-up', slug: 'ignition-program', tagline: 'Research + Design · Mobile first' },
]

const uiCarousel = [
  { src: '/takehome/CleanShot%20Dec%2017%20from%20Portfolio%20Copy.png', alt: 'Yousign — Verify your first and last name screen' },
  { src: '/takehome/CleanShot%20Dec%2016%20from%20Portfolio%20Copy.png', alt: 'Yousign — Before starting identification, desktop and mobile' },
  { src: '/takehome/Ignition%20Renders.png', alt: 'Ignition Program — mobile UI set' },
  { src: '/takehome/Ignition%20Renders%203.png', alt: 'Ignition Program — mobile UI set' },
  { src: '/takehome/Renders%20Ignition.png', alt: 'Ignition Program — mobile UI set' },
]

const aiCarousel = [
  { src: '', alt: 'AI example — placeholder 1' },
  { src: '', alt: 'AI example — placeholder 2' },
  { src: '', alt: 'AI example — placeholder 3' },
]

function TakeHome() {
  useEffect(() => {
    document.body.classList.add('home-page', 'takehome-page')
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)
    return () => {
      document.body.classList.remove('home-page', 'takehome-page')
      document.head.removeChild(meta)
    }
  }, [])

  let lastYear = null
  return (
    <div className="takehome">
      <header className="takehome-header">
        <h1>
          <span>Take home assignment - Luc</span>
          <span aria-hidden="true" className="takehome-header-x">×</span>
          <img src="/logos/dust.svg" alt="Dust" className="takehome-header-logo" />
          <span>Dust</span>
        </h1>
      </header>

      <section className="takehome-q">
        <h2 className="takehome-question">1) Show us your best work in terms of UI.</h2>
        <p className="takehome-answer">Here is a carousel of some of my UI work at Yousign and Ignition.</p>
        <CardStack items={uiCarousel} />
        <p className="takehome-answer">You can have a full look at the case studies here:</p>

        <div className="takehome-studies">
          <div className="takehome-studies-title">Case studies</div>
          {caseStudies.map((p) => {
            const showYear = p.year !== lastYear
            lastYear = p.year
            return (
              <div key={p.slug} className="takehome-study-row">
                <div className="takehome-study-year">{showYear ? p.year : ''}</div>
                <div className="takehome-study-title">
                  <Link to={`/${p.slug}?from=th`}>{p.title}</Link>
                </div>
                <div className="takehome-study-tagline">{p.tagline}</div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="takehome-q">
        <h2 className="takehome-question">2) What has been some constructive feedback in your career?</h2>
        <p className="takehome-answer">Answer</p>
      </section>

      <section className="takehome-q">
        <h2 className="takehome-question">3) What operating principle or cultural thing have you loved from your past experiences?</h2>
        <p className="takehome-answer">Answer</p>
      </section>

      <section className="takehome-q">
        <h2 className="takehome-question">4) What operating principle or cultural thing have you loved from your past experiences?</h2>
        <p className="takehome-answer">Answer</p>
      </section>

      <section className="takehome-q">
        <h2 className="takehome-question">5) What is the most interesting use of AI you have seen recently?</h2>
        <p className="takehome-answer">This</p>
        <CardStack items={aiCarousel} />
        <p className="takehome-answer">Which responds to this.</p>
      </section>
    </div>
  )
}

export default function TakeHomeGated() {
  return (
    <PasswordGate hash={PASSWORD_HASH} storageKey="take-home">
      <TakeHome />
    </PasswordGate>
  )
}
