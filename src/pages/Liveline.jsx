import PostLayout from '../components/PostLayout.jsx'
import CodeBlock from '../components/CodeBlock.jsx'
import LivelineDemo from '../components/Liveline.jsx'

const sections = [
  'Getting started',
  'Momentum',
  'Value overlay',
  'Time windows',
  'Reference line',
  'Orderbook',
  'Candlestick',
  'Multi-series',
  'States',
  'Theming',
  'More features',
  'How it works',
  'Props',
  'Stress testing',
  'Just a line',
  'Acknowledgements',
]

export default function Liveline() {
  return (
    <PostLayout title="Liveline" sections={sections}>
      <p>
        I built this because every charting library I tried was either too heavy for a
        simple live feed, or too rigid to feel alive. Liveline does one thing: draw a
        line that moves smoothly as new data arrives. Everything else is opt-in.
      </p>

      <h2 id="getting-started">Getting started</h2>
      <CodeBlock>
        {[<><span className="tok-fn">npm</span> install liveline</>]}
      </CodeBlock>

      <p>The component fills its parent container. Set a height on the wrapper.</p>
      <CodeBlock>
        {[
          <><span className="tok-keyword">import</span>{' { '}Liveline{' } '}<span className="tok-keyword">from</span> <span className="tok-string">'liveline'</span></>,
          '',
          <><span className="tok-keyword">function</span> <span className="tok-fn">Chart</span>({'({ data, value })'} {'{'}</>,
          <>{'  '}<span className="tok-keyword">return</span> (</>,
          <>{'    '}<span className="tok-tag">&lt;div</span> <span className="tok-attr">style</span>={'{{ height: '}<span className="tok-number">200</span>{' }}'}<span className="tok-tag">&gt;</span></>,
          <>{'      '}<span className="tok-tag">&lt;Liveline</span> <span className="tok-attr">data</span>={'{data}'} <span className="tok-attr">value</span>={'{value}'} <span className="tok-tag">/&gt;</span></>,
          <>{'    '}<span className="tok-tag">&lt;/div&gt;</span></>,
          '  )',
          '}',
        ]}
      </CodeBlock>

      <p>
        <code>data</code> is an array of <code>{'{ time, value }'}</code> points.{' '}
        <code>value</code> is the latest number.
      </p>

      <LivelineDemo />

      <h2 id="momentum">Momentum</h2>
      <p>
        Under the hood the line is animated with a spring that tracks each new point.
        It overshoots subtly on fast moves and settles on stable ones. The feeling you
        want is &ldquo;alive&rdquo; &mdash; not &ldquo;jittery&rdquo;.
      </p>

      <h2 id="value-overlay">Value overlay</h2>
      <p>
        A minimal floating pill shows the current value and tracks the end of the line.
        It avoids collisions with the edges by nudging itself out of the way.
      </p>

      <h2 id="time-windows">Time windows</h2>
      <p>
        Pass a window prop to fix the visible timespan. Points outside the window are
        smoothly dropped off the left edge as new ones come in from the right.
      </p>

      <h2 id="reference-line">Reference line</h2>
      <p>
        An optional horizontal guide for thresholds, previous close, or entry price.
        Color comes from context so it stays out of the way.
      </p>

      <h2 id="orderbook">Orderbook</h2>
      <p>
        A vertical band on the right visualises depth bucketed around the current value.
        Purely presentational &mdash; pass the numbers and it draws.
      </p>

      <h2 id="candlestick">Candlestick</h2>
      <p>Provide OHLC data instead of points and Liveline draws candles.</p>

      <h2 id="multi-series">Multi-series</h2>
      <p>Pass an array of series. Each gets its own color; the overlay shows all values.</p>

      <h2 id="states">States</h2>
      <p>
        Loading, empty, and disconnected states are built-in. They&rsquo;re what most
        charting libraries forget about.
      </p>

      <h2 id="theming">Theming</h2>
      <p>
        Stroke, fill, and overlay colors come from CSS variables so Liveline matches
        whatever theme its parent has set.
      </p>

      <h2 id="more-features">More features</h2>
      <p>Spark mode, mini mode, haptic taps on mobile when a new high is set.</p>

      <h2 id="how-it-works">How it works</h2>
      <p>
        Two SVG paths (line + area) driven by a single requestAnimationFrame loop. A
        tiny spring solver runs per-point to keep the line honest during rapid updates.
      </p>

      <h2 id="props">Props</h2>
      <table className="table">
        <tbody>
          <tr><td>data</td><td>Array of {'{ time, value }'} points</td></tr>
          <tr><td>value</td><td>The latest number (optional)</td></tr>
          <tr><td>window</td><td>Visible timespan in ms</td></tr>
          <tr><td>color</td><td>Stroke color</td></tr>
          <tr><td>reference</td><td>Horizontal guide value</td></tr>
        </tbody>
      </table>

      <h2 id="stress-testing">Stress testing</h2>
      <p>
        Ten thousand points, updated at 60fps, with no dropped frames on a MacBook Air.
        That was the bar.
      </p>

      <h2 id="just-a-line">Just a line</h2>
      <p>
        You can also hide everything and render only the line. Handy as a background
        element, or embedded inline with text.
      </p>

      <h2 id="acknowledgements">Acknowledgements</h2>
      <p>
        Built with d3-scale for axes math, Framer Motion for springs, and a lot of
        staring at charts.
      </p>
    </PostLayout>
  )
}
