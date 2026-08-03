import { AnimatePresence, motion } from 'framer-motion'
import { Menu, MessageCircle, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { navigation } from '../data/siteData'
import { Brand } from './Brand'
import { Button } from './ui'

const DISCORD_URL = 'https://discord.gg/5AspwFP8Yj'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const close = () => setOpen(false)
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (!href || !href.startsWith('#')) return
    // If we're on the home page, scroll smoothly to the target
    if (pathname === '/') {
      e.preventDefault()
      const id = href.slice(1)
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
      return
    }
    // If we're on another route, navigate to root with hash
    e.preventDefault()
    navigate('/' + href)
  }

  useEffect(() => {
    if (pathname !== '/') return

    const sections = navigation
      .map(([, href]) => href.replace('#', ''))
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    if (!sections.length) return

    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActiveSection(visible.target.id)
    }, { threshold: [0.2, 0.45, 0.7], rootMargin: '-18% 0px -32% 0px' })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [pathname])

  return <header className="fixed inset-x-0 top-0 z-50 border-b border-lime-300/10 bg-[#080c09]/80 px-4 backdrop-blur-xl sm:px-7">
    <nav className="mx-auto flex h-[70px] max-w-7xl items-center justify-between" aria-label="Main navigation">
      <Brand />
      <div className="hidden items-center gap-7 lg:flex">
        {navigation.slice(1, 6).map(([name, href]) => {
          const id = href.replace('#', '')
          const isActive = activeSection === id
          return <a key={name} href={pathname === '/' ? href : `/${href}`} onClick={(e) => handleNavClick(e, href)} className={`nav-link text-[11px] font-medium transition ${isActive ? 'text-white' : 'text-zinc-400 hover:text-white'}`}>{name.replace(' Hosting', '')}</a>
        })}
      </div>
      <div className="hidden items-center gap-2 md:flex">
        <a href={DISCORD_URL} target="_blank" rel="noreferrer" aria-label="Discord Bot Hosting"><Button variant="ghost" className="px-2 py-2 text-lime-200 hover:text-lime-100"><MessageCircle size={14} />Discord</Button></a>
        <a href={DISCORD_URL} target="_blank" rel="noreferrer"><Button variant="ghost" className="px-2 py-2 text-[11px]">Join Community</Button></a>
        <a href={DISCORD_URL} target="_blank" rel="noreferrer"><Button variant="ghost" className="px-2 py-2 text-[11px]">Free Plan</Button></a>
        <a href={pathname === '/' ? '#pricing' : '/#pricing'} onClick={(e) => handleNavClick(e, '#pricing')}><Button className="clip-button rounded-none px-5 py-3 text-[10px] uppercase tracking-wide">View Plans <span className="text-base leading-none">›</span></Button></a>
      </div>
      <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-lg text-white md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    </nav>
    <AnimatePresence>
      {open && <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mx-auto max-w-7xl overflow-hidden border-x border-b border-lime-300/10 bg-[#0c110d]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden">
        {navigation.map(([name, href]) => {
          const id = href.replace('#', '')
          const isActive = activeSection === id
          return <a key={name} onClick={(e) => { close(); handleNavClick(e, href) }} href={pathname === '/' ? href : `/${href}`} className={`block rounded-xl px-4 py-3 text-sm font-medium transition ${isActive ? 'bg-white/8 text-white' : 'text-zinc-300 hover:bg-white/5 hover:text-white'}`}>{name}</a>
        })}
        <div className="mt-2 grid grid-cols-2 gap-2 border-t border-white/10 pt-3"><a href={DISCORD_URL} target="_blank" rel="noreferrer" onClick={close}><Button variant="secondary" className="w-full"><MessageCircle size={14} />Discord</Button></a><a href={DISCORD_URL} target="_blank" rel="noreferrer" onClick={close}><Button className="w-full">Join Community</Button></a><a href={DISCORD_URL} target="_blank" rel="noreferrer" onClick={close}><Button variant="ghost" className="w-full">Free Plan</Button></a></div>
      </motion.div>}
    </AnimatePresence>
  </header>
}
