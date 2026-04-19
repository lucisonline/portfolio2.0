import PostLayout from '../components/PostLayout.jsx'

const sections = [
  'The problem',
  'The prototype',
  'What worked',
  'What didn\u2019t',
  'Where it\u2019s going',
]

export default function AnnotatingForAgents() {
  return (
    <PostLayout title="Annotating for agents" sections={sections}>
      <h1>Annotating for agents</h1>
      <p className="date">16 January, 2026</p>

      <p>
        This is the prototype that would eventually become Agentation. I&rsquo;m
        writing it up a few days after I built it, while the why is still fresh.
      </p>

      <h2 id="the-problem">The problem</h2>
      <p>
        Coding agents are remarkably good at generating UI. They&rsquo;re less good at
        knowing when it looks wrong. Describing visual feedback in words (&ldquo;move
        this left by 4px, make it a bit lighter&rdquo;) is slow and error-prone. We
        needed a better loop.
      </p>

      <h2 id="the-prototype">The prototype</h2>
      <p>
        A single script that lets me click anything on the page, type a note, and copy
        out a structured blob of markdown. That blob includes a stable selector, the
        computed styles that matter, the note, and a screenshot.
      </p>

      <h2 id="what-worked">What worked</h2>
      <p>
        The selector. A stable selector turns ambiguous feedback (&ldquo;that button
        on the third card&rdquo;) into something an agent can act on immediately.
      </p>

      <h2 id="what-didnt">What didn&rsquo;t</h2>
      <p>
        The first version captured too much context. Screenshots plus DOM plus
        computed styles overwhelmed the model on simple edits. I trimmed it down.
      </p>

      <h2 id="where-its-going">Where it&rsquo;s going</h2>
      <p>
        A proper npm package with multi-select, area selection, and animation pause.
        See <a href="/agentation">Agentation</a>.
      </p>
    </PostLayout>
  )
}
