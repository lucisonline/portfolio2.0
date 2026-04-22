import PostLayout from '../components/PostLayout.jsx'

const sections = [
  'Context',
  'The problem',
  'Research',
  'Ideation',
  'UI and prototype',
  'Key design decisions',
  'Reflections',
]

export default function IgnitionProgram() {
  return (
    <PostLayout title="Ignition Program - Reshaping sign-up" sections={sections}>
      <h1>Ignition Program - Reshaping the sign-up</h1>
      <p className="date">
        Freelance &middot; UX Research &middot; UX Design &middot; UI Design
      </p>
      <p className="caption" style={{ textAlign: 'left', margin: '-28px 0 32px' }}>
        Case study 1 of 2
      </p>

      <img
        src="/ignition/Ignition_Renders.png"
        alt="Ignition Program sign-up screens shown on three mobile devices"
      />

      <h2 id="context">Context</h2>
      <p>
        <em>How can applying for a job be as simple as opening your fridge?</em>
      </p>
      <p>
        Ignition Program is the leading recruitment agency for startups in France.
        With the boom of the tech scene, the company saw a sharp increase in both
        companies and talents using the service - and realized they needed a
        dedicated digital product to streamline recruiting and improve matching
        between the two sides.
      </p>
      <p>That&rsquo;s where I came in.</p>
      <p>
        Over five months, I worked with the Ignition team to build two digital
        experiences: one to help talents apply to the program, and one to match them
        with the right companies. This case study covers the first - the
        complete redesign of the sign-up process.
      </p>

      <h2 id="the-problem">The problem</h2>
      <p>
        To apply to the program, talents have to answer a series of questions so
        Ignition can assess fit. The existing flow was hurting them on two fronts:
        the quality of the data coming in, and the experience of getting through it.
      </p>
      <p>I was hired to make the sign-up more efficient, more complete, and more guided.</p>

      <h2 id="research">Research</h2>
      <p>
        With Arthur, my PM, I sat down with more than 25 talents to understand their
        pain and joy points in the existing sign-up: what worked, what they liked,
        and where they struggled.
      </p>
      <p>Two insights stood out:</p>
      <ul>
        <li>The sign-up was extremely long - average completion time was around one hour.</li>
        <li>
          The questions lacked guidance and clarity. Their open-ended nature left
          users unsure of what &ldquo;a good answer&rdquo; even looked like.
        </li>
      </ul>
      <p>From the interviews, we built two personas, using nicknames already in use internally at Ignition:</p>

      <div className="research-row">
        <img src="/ignition/Pink.png" alt="Sarah the Shiny persona card - a young graduate discovering the tech ecosystem" />
        <img src="/ignition/Switcher.png" alt="Sasha the Switcher persona card - an experienced professional ready for the next step" />
      </div>
      <p className="caption">Sarah the Shiny and Sasha the Switcher.</p>

      <p className="callout">
        <strong>Problem statement.</strong> Talents need guidance and efficiency when
        applying to the program, because they want to access opportunities easily.
      </p>

      <h2 id="ideation">Ideation</h2>
      <p>Three How Might We statements came out of research:</p>
      <ul>
        <li>How might we nudge users to write more nuanced answers?</li>
        <li>How might we help them understand the startup ecosystem as they sign up?</li>
        <li>How might we help users complete the questionnaire faster?</li>
      </ul>
      <p>
        From there, we sketched the moves that would make the biggest difference to
        the flow:
      </p>
      <ul>
        <li>One question per page, so no screen felt overwhelming.</li>
        <li>Strip each screen down - less data, more focus.</li>
        <li>Use color and illustration to make the experience more playful.</li>
        <li>Add clear guidance on the harder questions.</li>
        <li>Surface existing Ignition blog content inside the app, where it was actually relevant.</li>
      </ul>

      <h3>User flows</h3>
      <p>
        Mapping the questions forced a structural realization: a single flow
        wasn&rsquo;t enough. Technical and non-technical candidates needed different
        paths. And since coaches often sourced candidates directly on LinkedIn, there
        was a case for a third, personalized flow to speed up admission for sourced
        candidates.
      </p>

      <div className="flow-grid">
        <FlowCard n="1" title="Technical" sub="Engineers, product/data" />
        <FlowCard n="2" title="Non-technical" sub="Ops, growth, GTM" />
        <FlowCard n="3" title="Coach-sourced" sub="LinkedIn inbound" />
      </div>
      <p className="caption">Three distinct user flows, each asking only what&rsquo;s relevant.</p>

      <img
        src="/ignition/Screenshot_2022-10-06_at_11.46.07.png"
        alt="Parcours Classique - end-to-end user flow for the classic sign-up path"
      />
      <img
        src="/ignition/Screenshot_2022-10-06_at_11.46.40.png"
        alt="Parcours Chassée LEET - shorter flow for LinkedIn-sourced candidates"
      />
      <img
        src="/ignition/Screenshot_2022-10-06_at_11.47.32.png"
        alt="Third user flow mapping the technical candidate path"
      />
      <p>
        The flows are dense - here&rsquo;s the legend that ties the node types
        together:
      </p>
      <img
        src="/ignition/Screenshot_2022-10-08_at_17.34.57.png"
        alt="Legend for the user-flow diagrams: start, end, action, page, potential work, parcours LEET, state, delightzone"
      />

      <h2 id="ui-and-prototype">UI and prototype</h2>
      <p>
        Mid-fidelity went through two full iterations (V1 &rarr; V2 &rarr; final)
        before landing on the shipped design.
      </p>
      <div className="research-row">
        <img src="/ignition/Frame_76.png" alt="V1 mid-fidelity mockups of the sign-up questions" />
        <img src="/ignition/2.png" alt="V2 mid-fidelity mockups with clearer hierarchy and more playful visuals" />
      </div>
      <p className="caption">V1 (left) &rarr; V2 (right).</p>
      <p>And finally the high-fidelity mobile screens:</p>
      <img
        src="/ignition/Mobile.png"
        alt="Final high-fidelity mobile screen asking which technologies the candidate wants to work with"
      />
      <p>
        I pared the components down to their essence and built a mobile-first UI kit
        covering buttons, inputs, progress bar, profile picture, logo variants, CV
        upload, gradient backgrounds, and the illustration system.
      </p>
      <img
        src="/ignition/Screenshot_2022-10-08_at_20.00.27.png"
        alt="High-fidelity mobile UI kit - buttons, inputs, progress bar, profile picture, CV upload, gradients, illustrations"
      />
      <img
        src="/ignition/Screenshot_2022-10-09_at_11.47.05.png"
        alt="Color palette and typography - GT Walsheim Pro, brand, secondary, accent and neutral colors"
      />
      <p>
        We also added light onboarding and off-boarding screens to bring context at
        the entry and exit of the flow - giving users a sense of what to expect
        and what comes next, without lengthening the core questionnaire.
      </p>
      <div className="research-row">
        <img src="/ignition/Classique-1.png" alt="Onboarding screen 1 - a coach for transparency and good choices" />
        <img src="/ignition/Classique-2.png" alt="Onboarding screen 2 - tailored help to find a fulfilling job" />
        <img src="/ignition/Classique.png" alt="Entry screen - welcome to the application space" />
        <img src="/ignition/Classique%201.png" alt="Off-boarding confirmation - application is on its way" />
      </div>

      <p>See it in action:</p>
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', borderRadius: 12, overflow: 'hidden' }}>
        <iframe
          src="https://www.youtube.com/embed/4gx54i0IpH8"
          title="Ignition Program sign-up prototype"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
        />
      </div>

      <h2 id="key-design-decisions">Key design decisions</h2>
      <ul>
        <li>
          <strong>One question per page.</strong> Forced focus, removed the
          &ldquo;wall of form&rdquo; effect.
        </li>
        <li>
          <strong>Question-specific guidance.</strong> Sidecar content and examples
          on the questions that had historically produced the weakest answers.
        </li>
        <li>
          <strong>Branching flows.</strong> Technical, non-technical, and
          coach-sourced paths, each asking only what was relevant.
        </li>
        <li>
          <strong>Playful visual language.</strong> Color, illustration, and
          micro-copy aligned to the Ignition brand, to counter the usual dryness of
          recruitment forms.
        </li>
        <li>
          <strong>Onboarding and off-boarding.</strong> Short context-setting screens
          to frame the experience.
        </li>
      </ul>

      <h2 id="reflections">Reflections</h2>
      <p>
        The biggest shift on this project wasn&rsquo;t visual - it was
        structural. Moving from one long questionnaire to branching flows meant the
        product stopped treating every applicant the same way, which is what the
        original research was really telling us. Once that decision was made, the UI
        work became much simpler: every screen only had to do one job for one kind
        of person.
      </p>
    </PostLayout>
  )
}

function FlowCard({ n, title, sub }) {
  return (
    <div className="flow-card">
      <div className="flow-n">{n}</div>
      <div className="flow-title">{title}</div>
      <div className="flow-sub">{sub}</div>
    </div>
  )
}
