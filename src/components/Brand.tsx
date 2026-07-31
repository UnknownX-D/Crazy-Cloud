import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function Brand({ light = false }: { light?: boolean }) {
  return <Link to="/" className="group relative z-10 inline-flex items-center gap-3" aria-label="Crazy Cloud home">
    <motion.span whileHover={{ rotate: -5, scale: 1.08 }} className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-[14px] border border-emerald-200/30 bg-transparent shadow-[0_0_24px_rgba(52,211,153,.2)]">
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-emerald-300 drop-shadow-[0_0_16px_rgba(67,255,135,.35)]">
        <path fill="currentColor" d="M13.1 2.6 4.6 13.4h5.1l-1.2 8.6 8.5-10.8h-5.1l1.2-8.6Z" />
      </svg>
    </motion.span>
    <span className={`font-display text-lg font-bold tracking-tight ${light ? 'text-white' : 'text-white'}`}>Crazy <span className="text-emerald-300">Cloud</span></span>
  </Link>
}
