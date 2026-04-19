import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './pages/Home.jsx'
import Liveline from './pages/Liveline.jsx'
import Agentation from './pages/Agentation.jsx'
import AnnotatingForAgents from './pages/AnnotatingForAgents.jsx'
import MorphingIcons from './pages/MorphingIcons.jsx'
import Honkish from './pages/Honkish.jsx'
import FamilyValues from './pages/FamilyValues.jsx'
import YousignQES from './pages/YousignQES.jsx'

const pageVariants = {
  initial: { opacity: 0, y: 8 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -4, transition: { duration: 0.2, ease: [0.4, 0, 1, 1] } },
}

function Page({ children }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="enter" exit="exit">
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Page><Home /></Page>} />
        <Route path="/liveline" element={<Page><Liveline /></Page>} />
        <Route path="/agentation" element={<Page><Agentation /></Page>} />
        <Route path="/annotating-for-agents" element={<Page><AnnotatingForAgents /></Page>} />
        <Route path="/morphing-icons-with-claude" element={<Page><MorphingIcons /></Page>} />
        <Route path="/honkish" element={<Page><Honkish /></Page>} />
        <Route path="/family-values" element={<Page><FamilyValues /></Page>} />
        <Route path="/yousign-qes" element={<Page><YousignQES /></Page>} />
      </Routes>
    </AnimatePresence>
  )
}
