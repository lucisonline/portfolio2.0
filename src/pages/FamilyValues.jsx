import PostLayout from '../components/PostLayout.jsx'

const sections = ['What we built', 'What we valued', 'What\u2019s next']

export default function FamilyValues() {
  return (
    <PostLayout title="Family Values" sections={sections}>
      <h1>Family Values</h1>
      <p className="date">8 July, 2024</p>

      <p>
        A short retrospective on Family, the self-custody wallet we built at Los Feliz
        Engineering, and the values that shaped it.
      </p>

      <h2 id="what-we-built">What we built</h2>
      <p>
        A wallet that felt more like a consumer app than a piece of crypto
        infrastructure. Careful typography, careful motion, and a relentless focus on
        the moments that usually break &mdash; sending, receiving, and recovering.
      </p>

      <h2 id="what-we-valued">What we valued</h2>
      <p>
        Interface quality above feature breadth. A small team that cared about the same
        details. Shipping slower than we could have, so every release felt finished.
      </p>

      <h2 id="whats-next">What&rsquo;s next</h2>
      <p>
        Family lives on at Avara. The values that shaped it still shape how I think
        about consumer software today.
      </p>
    </PostLayout>
  )
}
