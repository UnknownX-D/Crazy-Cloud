import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AmbientBackground } from './components/Atmosphere'
import { Navbar } from './components/Navbar'
import AuthPage from './pages/AuthPage'
import HomePage from './pages/HomePage'

function SiteLayout() { return <><AmbientBackground /><Navbar /><HomePage /></> }
export default function App() { const location = useLocation(); return <AnimatePresence mode="wait"><Routes location={location} key={location.pathname}><Route path="/" element={<SiteLayout />} /><Route path="/login" element={<AuthPage mode="login" />} /><Route path="/signup" element={<AuthPage mode="signup" />} /><Route path="*" element={<SiteLayout />} /></Routes></AnimatePresence> }
