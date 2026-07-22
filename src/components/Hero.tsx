import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, MessageCircle, Play, Server, ShieldCheck, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from './ui'

const bars = [21, 58, 84, 32, 18, 76, 28, 18, 61]

function ServerRack() {
  const reduce = useReducedMotion()
  return <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7, delay: .2 }} className="relative mx-auto mt-12 h-[385px] w-full max-w-[460px] lg:mt-0">
    <motion.div animate={reduce ? {} : { y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="absolute left-[17%] top-4 w-[63%] border border-lime-300/20 bg-[#0b100c]/90 p-4 shadow-[18px_18px_0_rgba(12,19,13,.7),0_0_60px_rgba(163,230,53,.12)] sm:p-5">
      <div className="flex items-center gap-2 border-b border-white/[.08] pb-4"><span className="h-2 w-2 bg-lime-300 shadow-[0_0_10px_#bef264]" /><span className="h-1.5 w-1.5 bg-lime-300/40" /><span className="h-1.5 w-1.5 bg-lime-300/30" /></div>
      <div className="mt-4 border border-white/[.08] bg-black/25 p-4"><div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-zinc-300"><span className="grid h-5 w-5 place-items-center bg-lime-300 text-[#071008]"><Zap size={12} fill="currentColor" /></span>CRAZY CLOUD</div><p className="mt-1 pl-7 text-[9px] font-medium tracking-[.2em] text-zinc-500">NODE 07</p><div className="mt-6 flex h-16 items-end justify-between gap-1.5">{bars.map((height, i) => <motion.span key={i} className="flex-1 bg-gradient-to-t from-lime-600 to-lime-300 shadow-[0_0_12px_rgba(163,230,53,.35)]" style={{ height: `${height}%` }} animate={reduce ? {} : { height: [`${Math.max(12, height - 10)}%`, `${height}%`, `${Math.max(12, height - 6)}%`] }} transition={{ duration: 2 + i * .12, repeat: Infinity, repeatType: 'mirror' }} />)}</div><div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/[.07] pt-4"><Metric value="5.2" label="GHZ" /><Metric value="12" label="MS" /><Metric value="99" label="TPS" /></div></div>
      <div className="mt-4 grid grid-cols-4 gap-2">{Array.from({ length: 12 }).map((_, i) => <span key={i} className="h-5 border border-white/[.1] bg-[repeating-linear-gradient(90deg,rgba(190,242,100,.16)_0_1px,transparent_1px_4px)]" />)}</div>
      <div className="mt-3 grid grid-cols-4 gap-2">{Array.from({ length: 12 }).map((_, i) => <span key={i} className="h-5 border border-white/[.1] bg-[repeating-linear-gradient(90deg,rgba(190,242,100,.16)_0_1px,transparent_1px_4px)]" />)}</div>
    </motion.div>
    <div className="absolute left-0 top-[38%] border border-lime-300/30 bg-[#0a100b]/95 px-4 py-3 shadow-xl"><div className="flex items-center gap-2"><Zap size={15} className="text-lime-300" fill="currentColor" /><div><p className="text-[11px] font-bold text-white">LIVE</p><p className="mt-0.5 text-[9px] tracking-wide text-zinc-500">ZERO LAG DETECTED</p></div></div></div>
    <div className="absolute bottom-8 right-0 border border-lime-300/25 bg-[#0a100b]/95 px-4 py-3"><div className="flex items-center gap-2"><Server size={15} className="text-lime-300" /><div><p className="text-[11px] font-bold text-white">1,248</p><p className="mt-0.5 text-[9px] tracking-wide text-zinc-500">PLAYERS ONLINE</p></div></div></div>
    <span className="absolute right-3 top-0 h-16 w-16 rotate-[29deg] border border-lime-300/15 bg-lime-300/[.035]" /><span className="absolute bottom-1 left-[21%] h-10 w-10 rotate-[29deg] border border-lime-300/15 bg-lime-300/[.035]" />
  </motion.div>
}

function Metric({ value, label }: { value: string; label: string }) { return <div><p className="font-display text-lg font-bold leading-none text-white">{value}</p><p className="mt-1 text-[8px] tracking-wider text-zinc-500">{label}</p></div> }

export function Hero() {
  return <section id="home" className="hero-grid relative isolate overflow-hidden border-b border-lime-300/10 px-5 pb-0 pt-32 sm:pt-36">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_73%_45%,rgba(116,158,24,.14),transparent_22%),linear-gradient(115deg,rgba(9,16,11,.98),rgba(7,12,8,.72))]" />
    <div className="mx-auto grid max-w-7xl items-center gap-2 pb-16 lg:grid-cols-[1.13fr_.87fr] lg:pb-20">
      <div className="relative z-10 max-w-2xl"><motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-7 flex items-center gap-2 text-[10px] font-bold tracking-[.18em] text-zinc-300"><span className="h-2 w-2 bg-lime-300 shadow-[0_0_8px_#bef264]" />NEW-GEN GAME INFRASTRUCTURE</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .1 }} className="font-display text-[3.55rem] font-semibold uppercase leading-[.82] tracking-[-.065em] text-white sm:text-7xl lg:text-[5.3rem]"><span className="block">Power your</span><span className="outline-title mt-3 block">Minecraft</span><span className="outline-title mt-3 block">world</span></motion.h1>
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55, delay: .24 }} className="mt-8 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">Premium Minecraft servers, VPS, and bot hosting with blazing performance — built for creators who refuse to lag.</motion.p>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55, delay: .35 }} className="mt-8 flex flex-wrap gap-3"><Link to="/signup"><Button className="clip-button rounded-none px-6 py-3.5 text-[11px] uppercase tracking-wider">Get Started <ArrowRight size={15} /></Button></Link><a href="#pricing"><Button variant="secondary" className="clip-button rounded-none px-6 py-3.5 text-[11px] uppercase tracking-wider">View Plans <Play size={13} /></Button></a><a href="#bots"><Button variant="ghost" className="px-2 py-3.5 text-[11px] uppercase tracking-wider text-lime-200 hover:text-lime-100"><MessageCircle size={15} />Discord</Button></a></motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .6 }} className="mt-12 grid max-w-md grid-cols-3 gap-6"><HeroStat value="99.99%" label="Network uptime" /><HeroStat value="<20ms" label="Average latency" /><HeroStat value="12" label="Global regions" /></motion.div>
      </div>
      <ServerRack />
    </div>
    <div className="ticker -mx-5 flex h-12 items-center overflow-hidden border-t border-lime-300/10 px-5"><div className="ticker-track flex min-w-max items-center gap-11 text-[9px] font-semibold tracking-[.18em] text-zinc-600">{Array.from({ length: 2 }).flatMap(() => ['RYZEN 9 PROCESSORS', 'NVME GEN 4 STORAGE', '10GBPS NETWORK', 'ALWAYS-ON PROTECTION']).map((item, i) => <span key={i} className="flex items-center gap-4"><i className="h-1.5 w-1.5 bg-lime-300" />{item}</span>)}</div></div>
  </section>
}

function HeroStat({ value, label }: { value: string; label: string }) { return <div><p className="font-display text-xl font-bold tracking-tight text-white">{value}</p><p className="mt-2 text-[9px] font-medium uppercase tracking-[.12em] text-zinc-600">{label}</p></div> }
