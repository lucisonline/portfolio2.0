import PostLayout from '../components/PostLayout.jsx'

const sections = [
  'Overview',
  'The challenge',
  'Research',
  'Design process',
  'Batch 1 - Verification errors',
  'Batch 2 - Condition errors',
  'Batch 3 - Sender-side data',
  'Results',
  'Reflections',
]

export default function YousignQES() {
  return (
    <PostLayout title="Yousign - Reducing errors in QES" sections={sections}>
      <div className="post-title-row">
        <h1>Yousign - Reducing errors in the QES flow</h1>
        <span className="post-tags">Research + Design &middot; Mobile + Desktop</span>
      </div>
      <p className="date">19 April, 2025</p>

      <img
        src="/yousign/CleanShot_2024-12-18_at_12.56.412x.png"
        alt="La Signature Électronique Qualifiée de Yousign"
      />

      <h2 id="overview">Overview</h2>
      <p>
        At Yousign, I reimagined the Qualified Electronic Signature (QES) experience
        - a process known for its complexity and strict security standards. QES
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
        the first try wasn&rsquo;t just a UX goal - it was a business one.
      </p>

      <h2 id="research">Research</h2>
      <p>
        Yousign relies on a third-party provider (Ubble) to run identity verification.
        We then double-check the data on our end.
      </p>
      <p>Looking at the error data, two causes dominated:</p>
      <ul>
        <li>
          <strong>~10%</strong> - Signers submitting documents that didn&rsquo;t
          meet Ubble&rsquo;s quality standards (blurred images, expired IDs, etc.),
          especially among less tech-savvy users.
        </li>
        <li>
          <strong>~13%</strong> - Mismatches between declared first/last names
          and the ID document, causing verification failures on Yousign&rsquo;s side.
        </li>
      </ul>
      <p>Here is a graph with the data set:</p>
      <img
        src="/yousign/CleanShot_2024-12-17_at_17.32.242x.png"
        alt="Funnel showing Ubble identifications processed, Ubble OK (86.57%), and Identity OK (74.22%)"
      />
      <p>
        We then turned to Ubble, our provider, to understand the core reasons behind
        the failed identifications.
      </p>
      <img
        src="/yousign/CleanShot_2024-12-17_at_16.25.562x.png"
        alt="Stacked bar chart: invalid reasons evolution across four weekly cohorts"
      />
      <p>
        I collaborated with various teams across the business-from Customer Care
        to Engineering-to map out every step of the experience. This helped me
        gather insights about user friction points, evaluate current features, and
        identify potential improvements.
      </p>
      <p>
        I mapped the complete experience from the creation of a signature request
        (SR) to its signature.
      </p>
      <img
        src="/yousign/image.png"
        alt="Customer Journey QES spanning signature request creation to signature"
      />
      <img src="/yousign/Flow_QES.png" alt="End-to-end service blueprint of the QES flow" />
      <p className="caption">Note - some info has been blurred to respect the privacy of the company.</p>

      <p>
        Gathering feedback early in the process gave me a clear understanding of both
        the technical limitations and possibilities within the flow.
      </p>

      <div className="research-row">
        <img
          src="/yousign/CleanShot_2024-12-11_at_16.33.102x.png"
          alt="Board clustering frictions, current features, and ideas"
        />
        <img
          src="/yousign/387893b7-3c82-4b35-9cc1-1e16bef6a3d7.png"
          alt="Signer persona: as a signer, I have to wait for the result of my identification"
        />
        <img
          src="/yousign/CleanShot_2024-12-18_at_13.00.392x.png"
          alt="Workshop sticky notes exploring parsing rules and identity-document variation"
        />
      </div>

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
          - at the QES request stage.
        </li>
      </ol>
      <p>
        Because of legacy system constraints, we couldn&rsquo;t A/B test inside the
        signature flow (it would compromise the integrity of signature data). So we
        took an iterative approach: ship a change, observe conversion, refine. The
        work was split into three batches.
      </p>

      <h2 id="batch-1-verification-errors">Batch 1 - Reducing identity verification errors</h2>
      <p>
        The first focus was the information-verification step, where signers confirm
        the details the sender shared about them. Research showed signers were
        rushing through this screen, leading to mismatches with their ID.
      </p>
      <img src="/yousign/CleanShot_2024-12-18_at_13.42.192x.png" alt="Original Verify your information screen on desktop" />
      <p className="caption">This was the legacy page.</p>
      <p>
        First attempts were mobile-first concepts that deliberately added friction to
        slow users down.
      </p>
      <img
        src="/yousign/CleanShot_2024-12-18_at_13.52.492x.png"
        alt="Concept 1, Concept 2, and Concept 3 mobile-first explorations"
      />
      <p>
        What we learned in live testing: too much friction made the experience worse
        without meaningfully reducing errors. The better approach was
        <em> guided attention</em> - showing signers exactly where to look on
        their ID document at the moment they needed it.
      </p>
      <img
        src="/yousign/CleanShot_2024-12-16_at_15.19.332x.png"
        alt="Mobile screens highlighting where to look on a French ID for full name and separators"
      />
      <p>
        With the concept in mind, we collaborated closely with the Brand team to
        develop custom illustrations and unique names for each country represented by
        Yousign. We also refined the UX writing - &ldquo;Verify your
        information&rdquo; became &ldquo;Verify your first and last name.&rdquo;
      </p>
      <img
        src="/yousign/CleanShot_2024-12-16_at_15.40.202x.png"
        alt="Final desktop screen: Verify your first and last name, with example ID"
      />
      <img
        src="/yousign/afwef.png"
        alt="Before and after comparison of the Batch 1 screens, localized per country"
      />

      <h2 id="batch-2-condition-errors">Batch 2 - Reducing condition-based errors</h2>
      <p>
        The second problem was environmental: poor lighting, weak internet, outdated
        phones, expired documents. These weren&rsquo;t about the signer&rsquo;s
        identity - they were about the setup.
      </p>
      <img
        src="/yousign/CleanShot_2024-12-16_at_17.45.482x.png"
        alt="Original identification start screen with a single Start verification button"
      />
      <p className="caption">Before - a single &ldquo;Start verification&rdquo; button, no pre-flight guidance.</p>
      <p>We sat down and looked at the error rates in regards to the conditions:</p>
      <img
        src="/yousign/CleanShot_2024-12-17_at_16.08.242x.png"
        alt="Bar chart of identifications per month, broken down by error reason codes"
      />
      <p className="caption">For privacy reasons, the content has been blurred.</p>
      <p>Our recommendations for reducing errors focused on four key conditions:</p>
      <ul>
        <li>A valid, up-to-date ID document</li>
        <li>A stable internet connection</li>
        <li>A well-lit environment</li>
        <li>A recent smartphone</li>
      </ul>
      <p>
        Based on these recommendations, we designed a series of UI tests -
        including a quick Maze test - to figure out how much information to
        show and what users actually retained.
      </p>
      <img
        src="/yousign/CleanShot_2024-12-17_at_16.52.062x.png"
        alt="Solutions 1 and 2: information-dense desktop layouts"
      />
      <img
        src="/yousign/CleanShot_2024-12-17_at_16.07.132x.png"
        alt="Solutions 3 and 4: icon-driven card layouts"
      />
      <p>
        We realized the first solutions provided too much information and overwhelmed
        signers. We refined the UX writing and redesigned the cards into larger,
        icon-driven cards with stripped-down copy - enough to guide, not enough
        to overload. Here&rsquo;s the final version:
      </p>
      <img
        src="/yousign/CleanShot_2024-12-17_at_16.43.522x.png"
        alt="Final Before starting identification screen on desktop and mobile"
      />

      <h2 id="batch-3-sender-side-data">Batch 3 - Getting accurate information from senders</h2>
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
        environment.
      </p>
      <img
        src="/yousign/CleanShot_2024-12-17_at_17.21.142x.png"
        alt="Early explorations: warnings in the invitation email and in SR settings"
      />
      <p>
        The better approach was detecting error-prone cases early and letting senders
        edit signer information directly in the settings. Here are the approaches we
        considered:
      </p>
      <img
        src="/yousign/QES_Err.png"
        alt="Setting space explorations: modale to edit contact and modale to warn users"
      />
      <img
        src="/yousign/CleanShot_2024-12-17_at_17.22.152x.png"
        alt="How it could work: confirmation modal listing contact names to verify"
      />
      <img
        src="/yousign/CleanShot_2024-12-17_at_17.22.272x.png"
        alt="Full preparation screen with the confirmation modal shown inline"
      />
      <p>Then after much pondering, here is the final result:</p>
      <img
        src="/yousign/ewfwef.png"
        alt="Batch 3 before and after: contact adding and signature level"
      />
      <p>
        We implemented a notification system to inform senders, during the process of
        adding a contact, that the signer&rsquo;s name must match the one on their ID
        document.
      </p>
      <img
        src="/yousign/CleanShot_2024-12-18_at_12.13.322x.png"
        alt="Before and after of the preparation screen, with When to display annotation"
      />
      <p>
        We also designed a modal that appears only when a signer&rsquo;s name could
        potentially cause an identification error due to parsing issues.
      </p>
      <img
        src="/yousign/CleanShot_2024-12-18_at_12.12.592x.png"
        alt="Signature level settings with the confirmation modal shown only for risky names"
      />
      <p>
        Alongside these initiatives, we rebuilt the{' '}
        <a
          href="https://help.yousign.app/en/articles/103573-sign-documents-with-the-qualified-electronic-signature-qes"
          target="_blank"
          rel="noreferrer"
        >
          help center page
        </a>{' '}
        to provide clearer guidance on error cases for signers.
      </p>

      <h2 id="results">Results</h2>
      <div className="stat-grid">
        <Stat value="−20%" label="Identity verification errors" />
        <Stat value="−15%" label="Condition-based errors" />
        <Stat value="+10%" label="Overall completion rate" />
      </div>
      <p>
        Small copy changes carried real weight - &ldquo;Verify your first and
        last name&rdquo; gave users the confidence to move through the step
        correctly. Adding gentle friction at the right moments prevented errors
        without making the flow feel heavier.
      </p>

      <h2 id="reflections">Reflections</h2>
      <p>
        Cross-functional collaboration was central - Customer Care surfaced the
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
