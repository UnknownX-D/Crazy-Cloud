import { motion } from 'framer-motion'
import { Activity, Bot, Check, Code2, GitBranch, MessageCircle, TerminalSquare } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button, SectionHeading } from './ui'

const botFeatures = [
  ['Always online', 'Intelligent auto-restarts keep your bot present when your community needs it.', Activity],
  ['Your stack, ready', 'Deploy Node.js or Python projects with dependencies, environment variables, and logs.', Code2],
  ['Git-powered deploys', 'Connect your repository and ship updates without the manual busywork.', GitBranch],
]

export function BotHostingSpotlight() {
  return <section id="bots" className="scroll-mt-28 px-5 py-20 sm:py-28">
    <div className="section-shell relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-400/[.11] via-[#0d1510] to-[#080b09] p-6 shadow-[0_0_75px_rgba(52,211,153,.08)] sm:p-10 lg:p-12">
      <div aria-hidden className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-lime-400/10 blur-[100px]" />
      <div className="relative grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <div><SectionHeading align="left" eyebrow="DISCORD BOT HOSTING" title={<>Your Discord bot, <span className="text-gradient">always awake.</span></>}>Give your community a reliable companion with fast, always-on infrastructure designed for modern Node.js and Python bots.</SectionHeading>
          <div className="mt-8 space-y-4">{botFeatures.map(([title, description, Icon]) => { const FeatureIcon = Icon as typeof Bot; return <div key={title as string} className="flex gap-3"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-emerald-300/15 bg-emerald-400/[.08] text-emerald-200"><FeatureIcon size={17} /></span><div><p className="text-sm font-bold text-white">{title as string}</p><p className="mt-1 text-xs leading-5 text-zinc-500">{description as string}</p></div></div> })}</div>
          <div className="mt-9 flex flex-wrap gap-3"><Link to="/signup"><Button>Deploy a Bot <Bot size={16} /></Button></Link><a href="#bot-pricing"><Button variant="secondary">Bot Plans</Button></a></div>
        </div>
        <motion.div initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative rounded-2xl border border-white/[.1] bg-[#080d0a] p-4 shadow-2xl shadow-black/40 sm:p-5">
          <div className="flex items-center justify-between border-b border-white/[.07] pb-4"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#5865F2]/15 text-[#aeb5ff]"><MessageCircle size={19} /></span><div><p className="text-sm font-bold text-white">crazy-status-bot</p><p className="mt-0.5 text-[10px] text-emerald-300">● ONLINE · 42 servers</p></div></div><span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-[10px] font-bold text-emerald-300">DEPLOYED</span></div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2"><div className="rounded-xl border border-white/[.07] bg-white/[.025] p-4"><div className="flex items-center justify-between"><TerminalSquare size={16} className="text-lime-300" /><span className="text-[10px] text-zinc-500">PROCESS</span></div><p className="mt-5 font-mono text-xs font-bold text-white">node index.js</p><p className="mt-2 text-[10px] text-emerald-300">● running for 8d 14h</p></div><div className="rounded-xl border border-white/[.07] bg-white/[.025] p-4"><div className="flex items-center justify-between"><Activity size={16} className="text-emerald-300" /><span className="text-[10px] text-zinc-500">MEMORY</span></div><p className="mt-5 text-xl font-bold text-white">384<span className="ml-1 text-xs font-medium text-zinc-500">MB</span></p><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[.06]"><div className="h-full w-[38%] rounded-full bg-gradient-to-r from-emerald-400 to-lime-300" /></div></div></div>
          <div className="mt-3 rounded-xl border border-white/[.07] bg-black/20 p-4 font-mono text-[10px] leading-5 text-zinc-500"><p><span className="text-emerald-300">[bot]:</span> Logged in as Crazy Status#0420</p><p><span className="text-lime-300">[api]:</span> Serving 2,816 members · 46ms latency</p><p><span className="text-emerald-200">[git]:</span> Deployment complete from main</p></div>
          <div className="mt-4 flex items-center gap-2 text-xs text-zinc-400"><span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-400/10 text-emerald-300"><Check size={12} /></span>Automated backups enabled</div>
        </motion.div>
      </div>
    </div>
  </section>
}
