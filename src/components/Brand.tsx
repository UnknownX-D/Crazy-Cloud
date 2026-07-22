import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function Brand({ light = false }: { light?: boolean }) {
  return <Link to="/" className="group relative z-10 inline-flex items-center gap-2.5" aria-label="Crazy Cloud home">
    <motion.span whileHover={{ rotate: -5, scale: 1.08 }} className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-[10px] border border-emerald-200/30 bg-gradient-to-br from-emerald-300 via-emerald-500 to-lime-400 shadow-[0_0_24px_rgba(52,211,153,.42)]">
      <span className="absolute inset-[3px] rounded-[7px] border border-white/25" />
      <span className="absolute left-[9px] top-[10px] h-[6px] w-[6px] bg-[#06120b]" />
      <span className="absolute right-[9px] top-[10px] h-[6px] w-[6px] bg-[#06120b]" />
      <span className="absolute left-[14px] top-[15px] h-[6px] w-[8px] bg-[#06120b]" />
      <span className="absolute left-[11px] top-[21px] h-[7px] w-[14px] bg-[#06120b]" />
    </motion.span>
    <span className={`font-display text-lg font-bold tracking-tight ${light ? 'text-white' : 'text-white'}`}>Crazy <span className="text-emerald-300">Cloud</span></span>
  </Link>
}
