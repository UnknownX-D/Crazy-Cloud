import { AnimatePresence, motion } from 'framer-motion'
import { Menu, MessageCircle, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navigation } from '../data/siteData'
import { Brand } from './Brand'
import { Button } from './ui'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const close = () => setOpen(false)
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-lime-300/10 bg-[#080c09]/80 px-4 backdrop-blur-xl sm:px-7">
    <nav className="mx-auto flex h-[70px] max-w-7xl items-center justify-between" aria-label="Main navigation">
      <Brand />
      <div className="hidden items-center gap-7 lg:flex">
        {navigation.slice(1, 6).map(([name, href]) => <a key={name} href={pathname === '/' ? href : `/${href}`} className="nav-link text-[11px] font-medium text-zinc-400 transition hover:text-white">{name.replace(' Hosting', '')}</a>)}
      </div>
      <div className="hidden items-center gap-2 md:flex">
        <a href="#bots" aria-label="Discord Bot Hosting"><Button variant="ghost" className="px-2 py-2 text-lime-200 hover:text-lime-100"><MessageCircle size={14} />Discord</Button></a>
        <Link to="/login"><Button variant="ghost" className="px-2 py-2 text-[11px]">Client Login</Button></Link>
        <a href={pathname === '/' ? '#pricing' : '/#pricing'}><Button className="clip-button rounded-none px-5 py-3 text-[10px] uppercase tracking-wide">Deploy Server <span className="text-base leading-none">›</span></Button></a>
      </div>
      <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-lg text-white md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    </nav>
    <AnimatePresence>
      {open && <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mx-auto max-w-7xl overflow-hidden border-x border-b border-lime-300/10 bg-[#0c110d]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden">
        {navigation.map(([name, href]) => <a key={name} onClick={close} href={pathname === '/' ? href : `/${href}`} className="block rounded-xl px-4 py-3 text-sm font-medium text-zinc-300 hover:bg-white/5 hover:text-white">{name}</a>)}
        <div className="mt-2 grid grid-cols-2 gap-2 border-t border-white/10 pt-3"><a href="#bots" onClick={close}><Button variant="secondary" className="w-full"><MessageCircle size={14} />Discord</Button></a><Link to="/signup" onClick={close}><Button className="w-full">Sign Up</Button></Link></div>
      </motion.div>}
    </AnimatePresence>
  </header>
}
