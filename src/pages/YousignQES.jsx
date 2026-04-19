import PostLayout from '../components/PostLayout.jsx'

const sections = [
  'Overview',
  'The challenge',
  'Research',
  'Design process',
  'Batch 1 \u2014 Verification errors',
  'Batch 2 \u2014 Condition errors',
  'Batch 3 \u2014 Sender-side data',
  'Results',
  'Reflections',
]

export default function YousignQES() {
  return (
    <PostLayout title="Yousign — Reducing errors in QES" sections={sections}>
      <h1>Yousign &mdash; Reducing errors in the QES flow</h1>
      <p className="date">19 April, 2026</p>

      <h2 id="overview">Overview</h2>
      <p>
        At Yousign, I reimagined the Qualified Electronic Signature (QES) experience
        &mdash; a process known for its complexity and strict security standards. QES
        is essential for compliance, but it came with significant friction: long
        verification times, frequent errors, and costly failed attempts. The goal was
        to create a smoother, more intuitive journey without compromising security.
      </p>

      <h2 id="the-challenge">The challenge</h2>
      <p>
        QES requires signers to verify their identity through a video call before
        signing. The process is secure by design, but this added friction and was a
        known drag on conversion.
      </p>
      <p>
        Each verification attempt has a direct cost. Failed attempts quickly
        accumulated into real expenses for senders, frustrated users, and hurt both
        customer service workload and brand perception. Successful identification on
        the first try wasn&rsquo;t just a UX goal &mdash; it was a business one.
      </p>

      <h2 id="research">Research</h2>
      <p>
        Yousign relies on a third-party provider (Ubble) to run identity verification.
        We then double-check the data on our end.
      </p>
      <p>Looking at the error data, two causes dominated:</p>
      <ul>
        <li>
          <strong>~10%</strong> &mdash; Signers submitting documents that didn&rsquo;t
          meet Ubble&rsquo;s quality standards (blurred images, expired IDs, etc.),
          especially among less tech-savvy users.
        </li>
        <li>
          <strong>~13%</strong> &mdash; Mismatches between declared first/last names
          and the ID document, causing verification failures on Yousign&rsquo;s side.
        </li>
      </ul>
      <p>
        I worked with Ubble to understand the root causes behind failed
        identifications, and collaborated across the business &mdash; Customer Care,
        Engineering, Product &mdash; to map the full experience from signature
        request creation through signing. This gave me a clear picture of the
        technical constraints and the real friction points.
      </p>

      <h2 id="design-process">Design process</h2>
      <p>Three hypotheses came out of the research:</p>
      <ol>
        <li>
          Signers need clear guidance to verify their information before starting
          identity verification, to avoid mismatches.
        </li>
        <li>
          The verification environment (lighting, device, connection) must meet
          specific conditions for success.
        </li>
        <li>
          Accurate signer information needs to be collected from senders earlier
          &mdash; at the QES request stage.
        </li>
      </ol>
      <p>
        Because of legacy system constraints, we couldn&rsquo;t A/B test inside the
        signature flow (it would compromise the integrity of signature data). So we
        took an iterative approach: ship a change, observe conversion, refine. The
        work was split into three batches.
      </p>

      <h2 id="batch-1-verification-errors">Batch 1 &mdash; Reducing identity verification errors</h2>
      <p>
        The first focus was the information-verification step, where signers confirm
        the details the sender shared about them. Research showed signers were
        rushing through this screen, leading to mismatches with their ID.
      </p>
      <p>
        First attempts were mobile-first concepts that deliberately added friction to
        slow users down. What we learned in live testing: too much friction made the
        experience worse without meaningfully reducing errors. The better approach was
        <em> guided attention</em> &mdash; showing signers exactly where to look on
        their ID document at the moment they needed it.
      </p>
      <p>Final direction:</p>
      <ul>
        <li>Custom illustrations built with the Brand team, tailored to each country represented by Yousign.</li>
        <li>Sharper UX writing &mdash; &ldquo;Verify your information&rdquo; became &ldquo;Verify your first and last name.&rdquo;</li>
        <li>Concrete visual examples of where to find names and separators (hyphens, commas, spaces) on real ID documents.</li>
      </ul>

      <h2 id="batch-2-condition-errors">Batch 2 &mdash; Reducing condition-based errors</h2>
      <p>
        The second problem was environmental: poor lighting, weak internet, outdated
        phones, expired documents. These weren&rsquo;t about the signer&rsquo;s
        identity &mdash; they were about the setup.
      </p>
      <p>We narrowed the guidance to four key conditions:</p>
      <ul>
        <li>A valid, up-to-date ID document</li>
        <li>A stable internet connection</li>
        <li>A well-lit environment</li>
        <li>A recent smartphone</li>
      </ul>
      <p>
        I then ran a series of UI tests &mdash; including a quick Maze test &mdash; to
        figure out how much information to show and what users actually retained. The
        first iterations were information-heavy and overwhelmed signers. The final
        version used larger cards with clear, attention-grabbing icons and
        stripped-down copy &mdash; enough to guide, not enough to overload.
      </p>

      <h2 id="batch-3-sender-side-data">Batch 3 &mdash; Getting accurate information from senders</h2>
      <p>
        The final batch addressed the root cause: the sender&rsquo;s side. If the
        information entered at signature request creation is already wrong, nothing
        downstream can save it.
      </p>
      <p>Two critical touchpoints:</p>
      <ol>
        <li>When the sender creates a new contact.</li>
        <li>When a contact&rsquo;s name is likely to cause parsing issues (e.g. composed names).</li>
      </ol>
      <p>
        Early explorations tried adding warnings in both the invitation email and the
        settings page. That quickly felt like noise in an already dense settings
        environment. The better approach was detecting error-prone cases early and
        letting senders edit signer information directly in the settings.
      </p>
      <p>Final solutions:</p>
      <ul>
        <li>
          A notification system that, during contact creation, reminds the sender
          that the name must match the ID document exactly.
        </li>
        <li>
          A modal that appears only when the signer&rsquo;s name is likely to cause a
          parsing issue (e.g. composed names), prompting the sender to confirm before
          sending.
        </li>
      </ul>
      <p>In parallel, we rebuilt the help center to provide clearer guidance on error cases for signers.</p>

      <h2 id="results">Results</h2>
      <div className="stat-grid">
        <Stat value="−20%" label="Identity verification errors" />
        <Stat value="−15%" label="Condition-based errors" />
        <Stat value="+10%" label="Overall completion rate" />
      </div>
      <p>
        Small copy changes carried real weight &mdash; &ldquo;Verify your first and
        last name&rdquo; gave users the confidence to move through the step
        correctly. Adding gentle friction at the right moments prevented errors
        without making the flow feel heavier.
      </p>

      <h2 id="reflections">Reflections</h2>
      <p>
        Cross-functional collaboration was central &mdash; Customer Care surfaced the
        real friction, Engineering defined what was possible within the legacy
        constraints, and Brand shaped how the guidance felt. Iteration was the only
        way through: without A/B testing, every release had to be measured, observed,
        and refined in production.
      </p>
      <p>
        The core lesson: the right amount of friction, placed at the right moment,
        reduces errors more effectively than either stripping friction out or piling
        it on.
      </p>
    </PostLayout>
  )
}

function Stat({ value, label }) {
  return (
    <div className="stat">
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}
