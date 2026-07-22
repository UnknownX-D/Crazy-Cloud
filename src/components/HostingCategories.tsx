import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { hostingCategories } from '../data/siteData'
import { CheckLine, SectionHeading, reveal } from './ui'

export function HostingCategories() {
  return <section id="minecraft" className="scroll-mt-28 px-5 py-20 sm:py-28">
    <div className="mx-auto max-w-7xl"><SectionHeading eyebrow="ONE PLATFORM. LIMITLESS POSSIBILITIES." title={<>Everything your <span className="text-gradient">community</span> needs.</>}>Purpose-built hosting that makes the technical side disappear, so you can get back to building incredible things.</SectionHeading>
      <motion.div className="mt-12 grid gap-4 lg:grid-cols-3" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-70px' }} variants={{ visible: { transition: { staggerChildren: .12 } } }}>
        {hostingCategories.map(({ title, eyebrow, description, icon: Icon, features, gradient }) => <motion.article key={title} variants={reveal} whileHover={{ y: -7 }} className={`group relative overflow-hidden rounded-2xl border border-white/[.09] bg-gradient-to-br ${gradient} p-6 sm:p-7 glass-card`}>
          <div className="absolute inset-0 bg-[#101015]/80" /><div className="relative"><div className="mb-8 flex items-start justify-between"><div className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/[.06] text-white shadow-lg"><Icon size={23} /></div><ArrowUpRight className="text-zinc-500 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan-300" /></div>
          <p className="text-[10px] font-bold tracking-[.16em] text-cyan-300">{eyebrow}</p><h3 className="mt-3 font-display text-2xl font-bold text-white">{title}</h3><p className="mt-3 min-h-14 text-sm leading-6 text-zinc-400">{description}</p><ul className="mt-6 grid grid-cols-2 gap-y-3">{features.map(f => <CheckLine key={f}>{f}</CheckLine>)}</ul>
          <a href={title === 'Discord Bot Hosting' ? '#bots' : '#pricing'} className="mt-8 inline-block text-sm font-semibold text-white underline decoration-emerald-400/50 underline-offset-4 transition hover:text-emerald-300">Explore hosting</a></div></motion.article>)}
      </motion.div>
    </div>
  </section>
}
