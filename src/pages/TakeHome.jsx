import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PasswordGate from '../components/PasswordGate.jsx'
import CardStack from '../components/CardStack.jsx'

const FLIPBOOK_URL = 'https://flipbook.page/'
const FLIPBOOK_VIDEO = '/Video/Paris%20Example%20Video.mp4'
const INKSWITCH_URL = 'https://www.inkandswitch.com/'
const INKSWITCH_IMG = 'https://www.inkandswitch.com/assets/images/ink-and-switch-og.png'
const AMODEI_URL = 'https://www.darioamodei.com/essay/machines-of-loving-grace'

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

function TakeHome() {
  const [inkImgOk, setInkImgOk] = useState(true)
  const [hoverLink, setHoverLink] = useState(null)
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 })

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
        <p className="takehome-intro">Bonjour !</p>
        <h1>
          <span>Welcome to my take home assignment for</span>
          <img src="/logos/dust.svg" alt="" className="takehome-header-logo" />
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
        <p className="takehome-answer">I'd flag that the work I've been shipping this year - an AI assistant layer we're rolling into Criteo's platforms - is the strongest representation of <em>where I am now</em>, but I can't share it publicly. Happy to walk through it live if we get to that stage.</p>
      </section>

      <section className="takehome-q">
        <h2 className="takehome-question">2) What has been some constructive feedback in your career?</h2>
        <p className="takehome-answer">
          My role at Criteo is to hold vision, designing two or three years out to shape how AI gets built into the
          platform.
        </p>
        <p className="takehome-answer">
          But how I bring that thinking into a room <em>matters as much as the thinking itself</em>.
        </p>
        <p className="takehome-answer">
          I used to arrive fully formed, analysis done, answer clear, which at times closes imagination rather than
          opening conversation.
        </p>
        <p className="takehome-answer">Two things have changed that.</p>
        <ol className="takehome-answer takehome-list">
          <li>Real active listening, not just nodding.</li>
          <li>
            What Michael Bungay Stanier calls the <em>advice monster</em>, the reflex to jump in with a solution when
            the better move is one more question. Naming it made it easier to catch.
          </li>
        </ol>
        <p className="takehome-answer">
          Vision is only useful once other people can <em>hold it in their own words</em>. That's the work I'm doing
          now.
        </p>
      </section>

      <section className="takehome-q">
        <h2 className="takehome-question">3) What operating principle or cultural thing have you loved from your past experiences?</h2>
        <p className="takehome-answer">Two things have really stuck with me from my time at Yousign.</p>
        <ol className="takehome-answer takehome-list">
          <li>
            "Strong opinions, loosely held." I love that it pushes you to show up with a clear point of view and defend
            it, while staying genuinely open to being convinced otherwise.
          </li>
          <li>
            <em>Salary transparency</em>. It sounds simple, but it changes so much: it builds trust, engages the company
            to be fair and intentional about compensation, and takes the awkwardness and guesswork out of career
            conversations.
          </li>
          <li>
            From Ed our current CCO who used to work at Amazon - <em>first day principle</em> allows to build with an
            open heart and fresh mind every time.
          </li>
        </ol>
      </section>

      <section className="takehome-q">
        <h2 className="takehome-question">4) What is the most interesting use of AI you have seen recently?</h2>

        <div className="takehome-ai-grid">
          <div className="takehome-ai-text">
            <p className="takehome-answer">
              Generative UI, more specifically interfaces and imagery that don't pre-exist, but get created with
              personal queries and context.
            </p>

            <p className="takehome-answer">
              I was very touched recently by Flipbook,{' '}
              <span className="takehome-ai-quote">a generative visual internet</span> that doesn't assemble pages from
              components but generates the imagery itself, live.
            </p>

            <p className="takehome-answer">
              I sense this work is inspired by{' '}
              <a
                href={INKSWITCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="takehome-ai-ink"
                onMouseEnter={() => setHoverLink('ink')}
                onMouseLeave={() => setHoverLink(null)}
                onMouseMove={(e) => setHoverPos({ x: e.clientX, y: e.clientY })}
              >
                Ink &amp; Switch
              </a>
              , who've been exploring <em>malleable software</em>, shaped by users rather than the other way around.
            </p>

            <p className="takehome-answer">
              It leaves me thinking about the future of my role, and what it looks like to design with{' '}
              <a
                href={AMODEI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="takehome-ai-ink"
                onMouseEnter={() => setHoverLink('amodei')}
                onMouseLeave={() => setHoverLink(null)}
                onMouseMove={(e) => setHoverPos({ x: e.clientX, y: e.clientY })}
              >
                <em>machines of loving grace</em>
              </a>
              .
            </p>
          </div>

          <a
            href={FLIPBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="takehome-flipbook"
            aria-label="Visit flipbook.page"
          >
            <div className="takehome-flipbook-image">
              <video
                src={FLIPBOOK_VIDEO}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Flipbook preview"
              />
            </div>
            <div className="takehome-flipbook-meta">
              <div className="takehome-flipbook-meta-left">
                <div className="takehome-flipbook-title">Flipbook</div>
                <div className="takehome-flipbook-url">flipbook.page</div>
              </div>
              <div className="takehome-flipbook-arrow" aria-hidden="true">↗</div>
            </div>
          </a>
        </div>

        <div
          className={`takehome-ink-preview${hoverLink ? ' is-visible' : ''}`}
          style={{ left: `${hoverPos.x}px`, top: `${hoverPos.y}px` }}
          aria-hidden="true"
        >
          {hoverLink === 'ink' &&
            (inkImgOk ? (
              <img
                src={INKSWITCH_IMG}
                alt=""
                onError={() => setInkImgOk(false)}
              />
            ) : (
              <div className="takehome-ink-preview-fallback">
                Ink &amp; Switch, an industrial research lab
              </div>
            ))}
          {hoverLink === 'amodei' && (
            <div className="takehome-ink-preview-card">
              <div className="takehome-ink-preview-card-title">Machines of Loving Grace</div>
              <div className="takehome-ink-preview-card-sub">Dario Amodei · Oct 2024</div>
            </div>
          )}
        </div>

        <div className="takehome-closing">
          <p>Thank you for your time !</p>
          <p>
            As always, you can reach me with any question on{' '}
            <a
              href="https://www.linkedin.com/in/lucaractingi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{' '}
            or by{' '}
            <a href="mailto:luc.aractingi@gmail.com">email</a>.
          </p>
          <p>With warmth,</p>
          <p>Luc</p>
        </div>
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
