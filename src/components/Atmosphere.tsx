import { motion, useReducedMotion } from 'framer-motion'

const particlePositions = [
  ['9%', '25%', 4], ['18%', '72%', 3], ['29%', '19%', 2], ['39%', '80%', 4], ['56%', '12%', 3], ['65%', '74%', 2], ['76%', '25%', 4], ['88%', '64%', 3], ['93%', '14%', 2], ['48%', '48%', 3],
]

export function AmbientBackground() {
  const reduce = useReducedMotion()
  return <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#070b08]">
    <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.022)_1px,transparent_1px)] [background-size:38px_38px]" />
    <div className="ambient-orb absolute -left-40 top-0 h-[35rem] w-[35rem] rounded-full bg-emerald-700/20 blur-[110px]" />
    <div className="ambient-orb absolute -right-32 top-[22rem] h-[32rem] w-[32rem] rounded-full bg-lime-900/15 blur-[110px]" />
    {particlePositions.map(([left, top, size], i) => <motion.span key={i} className="absolute rounded-sm bg-emerald-200/40 shadow-[0_0_12px_rgba(52,211,153,.85)]" style={{ left, top, width: size, height: size }} animate={reduce ? {} : { y: [0, -18, 0], opacity: [.2, .8, .2] }} transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * .27 }} />)}
  </div>
}

export function Cube({ className = '', delay = 0 }: { className?: string; delay?: number }) {
  const reduce = useReducedMotion()
  return <motion.div aria-hidden className={`absolute h-16 w-16 rotate-[30deg] rounded-lg border border-emerald-200/20 bg-gradient-to-br from-emerald-400/20 to-lime-300/5 shadow-[0_0_35px_rgba(52,211,153,.16)] backdrop-blur-sm ${className}`} animate={reduce ? {} : { y: [0, -14, 0], rotate: [30, 40, 30] }} transition={{ duration: 6, delay, repeat: Infinity, ease: 'easeInOut' }} />
}
