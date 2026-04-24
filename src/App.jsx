import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './pages/Home.jsx'
import YousignQES from './pages/YousignQES.jsx'
import IgnitionProgram from './pages/IgnitionProgram.jsx'
import TakeHome from './pages/TakeHome.jsx'

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
        <Route path="/yousign-qes" element={<Page><YousignQES /></Page>} />
        <Route path="/ignition-program" element={<Page><IgnitionProgram /></Page>} />
        <Route path="/th-7k9a2xq4" element={<Page><TakeHome /></Page>} />
      </Routes>
    </AnimatePresence>
  )
}
