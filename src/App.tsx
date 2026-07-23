import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AmbientBackground } from './components/Atmosphere'
import { Navbar } from './components/Navbar'
import HomePage from './pages/HomePage'
import InfoPage from './pages/InfoPage'
import PrivacyPage from './pages/PrivacyPage'
import RefundPage from './pages/RefundPage'
import SupportPage from './pages/SupportPage'
import TermsPage from './pages/TermsPage'

function SiteLayout() { return <><AmbientBackground /><Navbar /><HomePage /></> }

export default function App() {
  const location = useLocation()
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const updateScrollState = () => {
      const scrollTop = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      const progress = height > 0 ? (scrollTop / height) * 100 : 0
      setScrollProgress(progress)
      setShowScrollTop(scrollTop > 700)
    }

    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  return <div className="relative min-h-screen"><div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent"><div className="h-full bg-gradient-to-r from-emerald-300 via-lime-300 to-cyan-300 transition-[width] duration-200" style={{ width: `${scrollProgress}%` }} /></div><AnimatePresence mode="wait"><Routes location={location} key={location.pathname}><Route path="/" element={<SiteLayout />} /><Route path="/login" element={<Navigate to="/" replace />} /><Route path="/signup" element={<Navigate to="/" replace />} /><Route path="/terms" element={<TermsPage />} /><Route path="/privacy" element={<PrivacyPage />} /><Route path="/refund" element={<RefundPage />} /><Route path="/support" element={<SupportPage />} /><Route path="/info/:slug" element={<InfoPage />} /><Route path="*" element={<SiteLayout />} /></Routes></AnimatePresence>{showScrollTop && <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" className="fixed bottom-5 right-5 z-[55] grid h-11 w-11 place-items-center rounded-full border border-emerald-400/30 bg-[#07110a]/90 text-lg text-emerald-200 shadow-[0_0_25px_rgba(52,211,153,.16)] backdrop-blur transition hover:-translate-y-0.5 hover:text-white">↑</button>}</div>
}
