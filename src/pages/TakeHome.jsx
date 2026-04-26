import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PasswordGate from '../components/PasswordGate.jsx'
import CardStack from '../components/CardStack.jsx'

const FLIPBOOK_URL = 'https://flipbook.page/'
const FLIPBOOK_VIDEO = '/Video/Paris%20Example%20Video.mp4'
const INKSWITCH_URL = 'https://www.inkandswitch.com/'
const INKSWITCH_IMG = 'https://www.inkandswitch.com/assets/images/ink-and-switch-og.png'
const AMODEI_URL = 'https://www.darioamodei.com/essay/machines-of-loving-grace'

// sha256("Luc@Dust")
// Change password: run `node -e 'const c=require("crypto"); console.log(c.createHash("sha256").update("NEW_PW").digest("hex"))'`
const PASSWORD_HASH = 'eed9d5e0a1abd8994487b4fccfae2293221bdcc024711d5aff26eccc9ce45bd6'

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
        <p className="takehome-answer">I'm drawn to Dust because I think the best AI tools won't just automate workflows — they'll reshape how people think alongside machines. That's the design problem I want to spend the next few years on.</p>
        <p className="takehome-answer">Four questions below. My strongest work at Criteo is under NDA, but I'm happy to walk through it live.</p>
      </section>

      <section className="takehome-q">
        <h2 className="takehome-question">1) Show us your best work in terms of UI.</h2>
        <p className="takehome-answer">Two case studies from Yousign and Ignition Program, where I owned research through shipped product.</p>
        <CardStack items={uiCarousel} />

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
        <p className="takehome-answer">The work I'm most proud of right now is the AI assistant layer we've been building into Criteo's platform this year. It's the closest representation of where I am as a designer. I can't share it publicly, but I'd welcome the chance to walk through it if we get to that stage.</p>
      </section>

      <section className="takehome-q">
        <h2 className="takehome-question">2) What has been some constructive feedback in your career?</h2>
        <p className="takehome-answer">
          At Criteo, I design two or three years ahead of the product: what AI should do for our clients, how it should
          surface in the platform, what the interaction model looks like. That means I spend a lot of time in rooms where
          the thinking matters as much as the output. For a while, I didn't make enough space for that.
        </p>
        <p className="takehome-answer">
          Two things changed it. The first is real active listening — not nodding while I wait to talk, but actually
          letting what someone says change my direction. The second is something Michael Bungay Stanier calls the{' '}
          <em>advice monster</em>: the reflex to jump in with a solution when the better move is one more question.
          Naming it made it easier to catch.
        </p>
        <p className="takehome-answer">
          Vision only matters once other people can hold it <em>in their own words</em>. That's the work I'm doing now.
        </p>
      </section>

      <section className="takehome-q">
        <h2 className="takehome-question">3) What operating principle or cultural thing have you loved from your past experiences?</h2>
        <p className="takehome-answer">Three things from past roles that still shape how I work.</p>
        <p className="takehome-answer">
          <strong>"Strong opinions, loosely held."</strong> It pushes you to commit to a clear point of view and defend
          it, while staying genuinely open to being convinced otherwise. That tension — between conviction and flexibility
          — is where the best design decisions happen.
        </p>
        <p className="takehome-answer">
          <strong>Salary transparency.</strong> It sounds simple, but it changes so much. It builds trust, forces the
          company to be fair and intentional about compensation, and removes the guesswork and awkwardness from career
          conversations.
        </p>
        <p className="takehome-answer">
          <strong>First-day principle.</strong> This one comes from Ed, our current CCO, who worked at Amazon. The idea
          is to approach every day of work with the openness and curiosity you had on your first day. Fresh mind, no
          assumptions, no territory to defend. I find it's a useful corrective for the kind of pattern-matching that
          hardens into rigidity over time.
        </p>
      </section>

      <section className="takehome-q">
        <h2 className="takehome-question">4) What is the most interesting use of AI you have seen recently?</h2>

        <div className="takehome-ai-grid">
          <div className="takehome-ai-text">
            <p className="takehome-answer">
              Generative UI. Not chatbots or co-pilots, but interfaces and imagery that don't pre-exist — that get
              created with personal queries and context.
            </p>

            <p className="takehome-answer">
              Flipbook is the clearest example I've seen:{' '}
              <span className="takehome-ai-quote">a generative visual internet</span> that doesn't assemble pages from
              components but generates the imagery itself, live. It's not a tool. It's closer to a medium.
            </p>

            <p className="takehome-answer">
              I think this work is downstream of what{' '}
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
              {' '}has been exploring with <em>malleable software</em>: interfaces shaped by their users rather than
              shipped to them. The designer's role shifts from composing screens to designing the system that generates
              them.
            </p>

            <p className="takehome-answer">
              It leaves me thinking about what it looks like to design with{' '}
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
              . That's the phrase, and the question, I keep coming back to.
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
          <p>
            If any of this sparks questions, I'm on{' '}
            <a
              href="https://www.linkedin.com/in/lucaractingi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{' '}
            or reachable by{' '}
            <a href="mailto:luc.aractingi@gmail.com">email</a>.
          </p>
          <p>
            <a
              href={AMODEI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="takehome-ai-ink"
            >
              <em>machines of loving grace</em>
            </a>
          </p>
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
