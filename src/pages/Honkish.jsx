import PostLayout from '../components/PostLayout.jsx'

const sections = [
  'The premise',
  'Presence over history',
  'What I\u2019d do differently',
]

export default function Honkish() {
  return (
    <PostLayout title="Honkish" sections={sections}>
      <h1>Honkish</h1>
      <p className="date">23 May, 2025</p>

      <p>
        Some thoughts on Honk, two years on. What the app got right, what it got wrong,
        and what a &ldquo;Honk-ish&rdquo; messaging experience could look like today.
      </p>

      <h2 id="the-premise">The premise</h2>
      <p>
        Honk had no send button. What you typed was visible character by character to
        the other person. There was no history &mdash; when you left a room, the
        messages were gone.
      </p>

      <h2 id="presence-over-history">Presence over history</h2>
      <p>
        The idea was that most conversation doesn&rsquo;t need to be archived. The
        magic of Honk was the feeling of being <em>with</em> someone, live.
      </p>

      <h2 id="what-id-do-differently">What I&rsquo;d do differently</h2>
      <p>
        Make presence optional rather than the default. Not every conversation wants to
        be that intense. The best version of Honk lets you move between presence and
        history without switching apps.
      </p>
    </PostLayout>
  )
}
