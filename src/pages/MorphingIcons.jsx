import { useState } from 'react'
import PostLayout from '../components/PostLayout.jsx'
import MorphingIcon, { ICONS } from '../components/MorphingIcon.jsx'
import CodeBlock from '../components/CodeBlock.jsx'

const sections = [
  'Setting constraints',
  'Rotation groups',
  'Cross-group morphs',
  'Leveraging custom tools',
  'Reflections',
  'Acknowledgements',
]

const gridIcons = [
  ['menu', 'cross', 'plus', 'minus', 'equals'],
  ['check', 'play', 'pause', 'arrow-right'],
  ['arrow-down', 'arrow-left', 'arrow-up', 'chev-right', 'chev-left'],
  ['chev-up', 'chev-down'],
]

export default function MorphingIcons() {
  const [heroIcon, setHeroIcon] = useState('menu')
  const keys = Object.keys(ICONS)

  return (
    <PostLayout title="Morphing icons with Claude" sections={sections}>
      <h1>Morphing icons with Claude</h1>
      <p className="date">13 January, 2026</p>

      <p>
        I&rsquo;ve been experimenting more with Claude Code lately, trying to push the
        limits of its animation and craft skills. One thing I&rsquo;ve always loved are
        the small moments in interfaces where icons transform rather than swap. The
        hamburger menu that rotates into an <InlineIcon icon="cross" />. The play button
        that becomes pause. These transitions feel considered in a way that static
        changes don&rsquo;t.
      </p>
      <p>
        I wanted to see if Claude could help me build something like this, but with a
        twist: every icon should be able to become <em>any</em> other icon. Not through
        crossfades or opacity tricks, but through actual transformation of the underlying
        shapes.
      </p>

      <div className="with-annotation" style={{ position: 'relative' }}>
        <button
          className="morph-icon-btn"
          onClick={() => setHeroIcon(keys[(keys.indexOf(heroIcon) + 1) % keys.length])}
          aria-label="Cycle icon"
        >
          <MorphingIcon icon={heroIcon} size={28} />
        </button>
        <span
          className="annotation"
          style={{ position: 'absolute', right: -120, top: '50%', transform: 'translateY(-50%)' }}
        >
          click to cycle
        </span>
      </div>

      <p>
        This is what I ended up with. Twenty-one icons, any of which can morph into any
        other. The whole thing came together in a single session with Claude Code.
      </p>

      <h2 id="setting-constraints">Setting constraints</h2>
      <p>
        The first attempt was predictable. I asked Claude for an icon component with
        smooth transitions, and it gave me an <code>AnimatePresence</code> wrapper that
        crossfades between SVGs. Technically correct, but not what I had in mind. The
        icons fade out and fade in. There&rsquo;s no sense of <em>transformation</em>.
      </p>
      <p>
        I wanted the lines themselves to move. The three lines of a hamburger sliding
        and rotating into an <InlineIcon icon="cross" />.
      </p>
      <div className="with-annotation" style={{ position: 'relative' }}>
        <p>
          Every icon should use exactly <u>three SVG lines</u>. Icons that need fewer
          collapse the extras to invisible points. This means any icon can morph into
          any other, since they share the same underlying structure.
        </p>
        <span
          className="annotation"
          style={{ position: 'absolute', right: -110, top: '50%', transform: 'translateY(-50%)' }}
        >
          the key insight
        </span>
      </div>
      <p>
        I gave Claude this constraint and it ran with it. Every icon, regardless of
        complexity, would be represented by exactly three lines, with unused lines
        collapsing to invisible center points.
      </p>

      <div className="icon-grid">
        {gridIcons.flat().map((name) => (
          <div key={name} className="icon-cell">
            <MorphingIcon icon={name} size={22} />
            <div className="label">{name.replace(/-/g, ' ')}</div>
          </div>
        ))}
      </div>

      <h2 id="rotation-groups">Rotation groups</h2>
      <p>
        With the icons defined, I started clicking through transitions. Most looked good,
        but arrow-right to arrow-down looked janky. The lines were morphing coordinates
        when they should have been rotating.
      </p>
      <p>
        This is the sort of thing you only notice by playing with it. Arrow-right and
        arrow-down are the same shape, just rotated 90&deg;. When you morph coordinates,
        the lines bend and warp. When you rotate, it just works.
      </p>
      <p>
        I described this to Claude and we introduced the concept of <em>rotation groups</em>.
        Icons in the same group share coordinates and differ only by rotation. Arrows rotate
        in 90&deg; increments. Chevrons too. Plus and cross are the same shape, 45&deg; apart.
      </p>

      <table className="table">
        <tbody>
          <tr><td>Arrows</td><td>Four directions, 90&deg; apart.</td></tr>
          <tr><td>Chevrons</td><td>Same shape as arrows, without the shaft.</td></tr>
          <tr><td>Plus / Cross</td><td>The same perpendicular lines, 45&deg; apart.</td></tr>
        </tbody>
      </table>

      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', margin: '24px 0' }}>
        <IconChip name="arrow-right" />
        <IconChip name="chev-right" />
        <IconChip name="plus" />
      </div>
      <p>Now an arrow pointing right <em>rotates</em> to point down.</p>

      <h2 id="cross-group-morphs">Cross-group morphs</h2>
      <p>
        When transitioning between different groups, the lines interpolate through
        coordinate space. Motion handles the tweening. These are the transitions that
        feel most magical. You&rsquo;re watching shapes genuinely transform into other
        shapes.
      </p>

      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', margin: '24px 0' }}>
        {['menu', 'plus', 'arrow-right', 'play', 'equals', 'chev-right'].map((k) => (
          <IconChip key={k} name={k} />
        ))}
      </div>
      <p>Arrow-to-check is my favourite.</p>

      <h2 id="leveraging-custom-tools">Leveraging custom tools</h2>
      <p>
        I asked Claude to build this sequencer during development in order to test
        transitions, which proved to be an incredibly helpful tool for feedback. I could
        simply point to specific sequences that felt off and explain why.
      </p>

      <Sequencer />

      <h2 id="reflections">Reflections</h2>
      <p>
        I&rsquo;m genuinely impressed with what Claude was able to build here. The core
        architecture is elegant and extensible: three lines per icon, rotation groups
        for same-shape icons, coordinate morphing for everything else.
      </p>
      <p>
        With that said, there were limitations. Claude couldn&rsquo;t tell when something
        looked wrong. The insight that arrows should rotate rather than morph coordinates,
        for example, had to come from me. It optimised for <em>working</em> rather than{' '}
        <em>feeling right</em>, which meant I had to watch the transitions and describe
        what felt off. Once I did, it started to understand the why.
      </p>
      <p>The underlying approach is sound though. If you want to try something similar, here&rsquo;s a general prompt to get started:</p>

      <CodeBlock>
        {[
          'Build an icon component where any icon can smoothly morph into any other.',
          'Every icon should use exactly three SVG lines. Icons that need fewer lines',
          'collapse the extras to invisible center points. For icons that are the same',
          "shape at different rotations (like arrows), use rotation instead of coordinate",
          "morphing. Don't make mistakes plz!",
        ]}
      </CodeBlock>

      <p>From there, it&rsquo;s iteration. Play with the result, notice what&rsquo;s wrong, describe it, repeat.</p>

      <h2 id="acknowledgements">Acknowledgements</h2>
      <p>Built with Claude Code, with a little help from yours truly.</p>
    </PostLayout>
  )
}

function InlineIcon({ icon }) {
  return (
    <span style={{ display: 'inline-flex', verticalAlign: '-3px', margin: '0 2px' }}>
      <MorphingIcon icon={icon} size={16} />
    </span>
  )
}

function IconChip({ name }) {
  return (
    <div style={{
      width: 42, height: 42, borderRadius: 10,
      display: 'grid', placeItems: 'center',
      background: '#f4f4f5',
    }}>
      <MorphingIcon icon={name} size={20} />
    </div>
  )
}

function Sequencer() {
  const all = Object.keys(ICONS)
  const [selected, setSelected] = useState('menu')
  const [preview, setPreview] = useState('menu')
  return (
    <div style={{ margin: '24px auto', width: 'fit-content', textAlign: 'center' }}>
      <div
        onClick={() => {
          const i = all.indexOf(preview)
          setPreview(all[(i + 1) % all.length])
        }}
        style={{
          width: 64, height: 64, margin: '0 auto 12px',
          background: '#3b82f6', borderRadius: 14, display: 'grid', placeItems: 'center',
          cursor: 'pointer', color: '#fff',
        }}
      >
        <MorphingIcon icon={preview} size={28} />
      </div>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(6, 36px)', gap: 6,
        padding: 10, background: '#f4f4f5', borderRadius: 12,
      }}>
        {all.slice(0, 18).map((name) => (
          <button
            key={name}
            onClick={() => { setSelected(name); setPreview(name) }}
            style={{
              width: 36, height: 36, border: 'none', background: 'transparent',
              borderRadius: 8, cursor: 'pointer',
              outline: selected === name ? '1.5px solid #3b82f6' : 'none',
            }}
            aria-label={name}
          >
            <MorphingIcon icon={name} size={16} />
          </button>
        ))}
      </div>
      <div style={{ fontSize: 12, color: '#71717a', marginTop: 10 }}>
        Click icons to add/remove &middot; Click preview to cycle
      </div>
    </div>
  )
}
