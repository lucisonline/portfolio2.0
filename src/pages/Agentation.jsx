import PostLayout from '../components/PostLayout.jsx'
import BrowserMockup from '../components/BrowserMockup.jsx'

const sections = [
  'Building with pointing',
  'Text selection',
  'Element click',
  'Multi-select',
  'Area selection',
  'Animation pause',
  'What the output captures',
  'Calibrating context',
  'Now available',
  'Acknowledgements',
]

export default function Agentation() {
  return (
    <PostLayout title="Agentation" sections={sections}>
      <h1>Agentation</h1>
      <p className="date">21 January, 2026</p>

      <p>
        I&rsquo;m excited to introduce <a href="#">Agentation</a>, a visual feedback
        tool for AI coding agents. It started as the rough prototype I wrote about{' '}
        <a href="#">here</a>, and it&rsquo;s now a proper npm package that anyone can use.
      </p>

      <p>
        The best way to explain what it does is to show you. Every animation on this
        page was built with Claude Code and Agentation. In fact, so was the entire
        <a href="#"> docs site</a>, from the layout and components to every animated
        demo. I&rsquo;d describe what I wanted, watch what Claude produced, click on
        the parts that needed work, and paste the feedback back. Agentation helped
        build Agentation.
      </p>

      <BrowserMockup url="localhost:3000">
        <div style={{ display: 'grid', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 18, height: 18, background: '#eee', borderRadius: 4 }} />
            <div style={{ fontSize: 13, color: '#444' }}>Benji&rsquo;s Dashboard</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <SkeletonCard tag="1" />
            <SkeletonCard tag="2" />
          </div>
          <SkeletonRow />
          <SkeletonRow />
        </div>
      </BrowserMockup>
      <p className="caption">
        A faux example of Agentation in action, made with Agentation + Claude of course.
      </p>

      <p>
        What follows is a tour of Agentation&rsquo;s features. Every demo was made with
        the feature it&rsquo;s showing. Yes, it&rsquo;s very meta.
      </p>

      <h2 id="building-with-pointing">Building with pointing</h2>
      <p>
        The loop looks like this: Claude generates some UI. I look it over, interact
        with it a few times. Something feels off &mdash; maybe the spacing is too tight,
        or a color is slightly wrong, or a transition doesn&rsquo;t quite land. I click
        on the element, write a note like &ldquo;needs more padding&rdquo; or &ldquo;make
        this darker,&rdquo; and copy the output.
      </p>
      <p>
        That output is structured markdown with selectors, positions, and context. I
        paste it into Claude. Claude reads the selector, finds the code, makes the
        adjustment. I check again. Still not right. Another annotation. Another pass.
      </p>
      <div className="with-annotation">
        <p>
          This went on for hours. Dozens of iterations per demo. Hundreds across the
          entire docs site.
        </p>
        <span className="annotation annotation-right">thankfully I enjoy this</span>
      </div>

      <h2 id="text-selection">Text selection</h2>
      <p>
        The simplest case is text. You see a typo, you select it, you write the
        correction. The selected string goes into the output so the agent knows exactly
        what to search for. I fixed dozens of copy issues on the docs site this way.
      </p>

      <h2 id="element-click">Element click</h2>
      <p>
        Click any element. Agentation walks the DOM up to a stable ancestor and writes
        a selector that won&rsquo;t break on the next render.
      </p>

      <h2 id="multi-select">Multi-select</h2>
      <p>
        Hold shift and keep clicking to attach a note to a group of elements &mdash;
        useful when the fix applies to a row of cards, not just one.
      </p>

      <h2 id="area-selection">Area selection</h2>
      <p>
        Sometimes the feedback is regional: &ldquo;this whole area feels cramped.&rdquo;
        Drag a box and Agentation captures the region along with every element inside it.
      </p>

      <h2 id="animation-pause">Animation pause</h2>
      <p>
        You can&rsquo;t point at a frame you can&rsquo;t see. Pause any animation on the
        page and scrub through it to annotate the exact moment that feels wrong.
      </p>

      <h2 id="what-the-output-captures">What the output captures</h2>
      <p>
        Selector, bounding box, computed styles, the note you wrote, and a screenshot.
        All structured, all paste-ready.
      </p>

      <h2 id="calibrating-context">Calibrating context</h2>
      <p>
        You can toggle how much Agentation includes. Sometimes less is more &mdash; just
        the selector and the note. Sometimes everything helps.
      </p>

      <h2 id="now-available">Now available</h2>
      <p>
        Agentation is live on npm. Drop it into any React project and start annotating.
      </p>

      <h2 id="acknowledgements">Acknowledgements</h2>
      <p>
        Thanks to everyone who tested early versions and sent me feedback &mdash; using
        Agentation, of course.
      </p>
    </PostLayout>
  )
}

function SkeletonCard({ tag }) {
  return (
    <div style={{ position: 'relative', background: '#f4f4f5', borderRadius: 8, padding: 16, height: 80 }}>
      <div style={{ height: 8, width: '60%', background: '#e5e5e7', borderRadius: 4, marginBottom: 10 }} />
      <div style={{ height: 8, width: '40%', background: '#e5e5e7', borderRadius: 4 }} />
      {tag && (
        <span style={{
          position: 'absolute', top: -8, left: -8, width: 22, height: 22,
          borderRadius: '50%', background: '#3b82f6', color: '#fff',
          display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 500,
        }}>{tag}</span>
      )}
    </div>
  )
}

function SkeletonRow() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
      <div style={{ height: 10, background: '#eee', borderRadius: 4 }} />
      <div style={{ height: 10, background: '#eee', borderRadius: 4 }} />
      <div style={{ height: 10, background: '#eee', borderRadius: 4 }} />
    </div>
  )
}
