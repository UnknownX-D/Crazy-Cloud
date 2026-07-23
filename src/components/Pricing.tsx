import { motion } from 'framer-motion'
import { ArrowRight, Box, Boxes, Gem, ShieldCheck, Sparkles } from 'lucide-react'
import { minecraftPlans, miniPlans } from '../data/siteData'
import { Button, CheckLine, SectionHeading, reveal } from './ui'

const planIcons = [Box, Boxes, Gem, ShieldCheck]

export function Pricing() {
  return <section id="pricing" className="scroll-mt-24 px-5 py-24 sm:py-32"><div className="mx-auto max-w-7xl">
    <SectionHeading eyebrow="MINECRAFT HOSTING" title={<>Grows <span className="text-gradient">with your world.</span></>}>Start small, upgrade anytime, and keep every plugin, player, and chunk running smoothly.</SectionHeading>
    <motion.div className="mt-14 grid gap-3 md:grid-cols-2 xl:grid-cols-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: .09 } } }}>
      {minecraftPlans.map((plan, index) => { const Icon = planIcons[index]; return <motion.article key={plan.name} variants={reveal} whileHover={{ y: -7 }} className={`relative flex min-h-[500px] flex-col border bg-gradient-to-b p-6 ${plan.featured ? 'border-lime-300/70 from-lime-300/[.1] to-[#0b100c] shadow-[0_0_42px_rgba(163,230,53,.12)]' : 'border-lime-300/20 from-[#111811]/90 to-[#0a0e0b]'}`}>
        {plan.badge && <span className={`absolute right-0 top-0 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[.1em] ${plan.featured ? 'bg-lime-300 text-lime-950' : 'bg-lime-300/90 text-lime-950'}`}>{plan.badge}</span>}
        <span className={`grid h-10 w-10 place-items-center border ${index === 2 ? 'border-cyan-300/40 bg-cyan-300/[.06] text-cyan-200' : index === 3 ? 'border-fuchsia-300/30 bg-fuchsia-300/[.05] text-fuchsia-200' : 'border-lime-300/20 bg-lime-300/[.04] text-lime-300'}`}><Icon size={18} /></span>
        <h3 className="mt-7 font-display text-xl font-semibold uppercase tracking-tight text-white">{plan.name} Plan</h3><p className="mt-2 text-[11px] text-zinc-500">{plan.detail}.</p>
        <div className="mt-12 flex items-end gap-1"><span className="mb-1 text-xl font-semibold text-lime-300">$</span><span className="font-display text-4xl font-bold tracking-[-.06em] text-white">{plan.price}</span><span className="mb-1 text-[10px] text-zinc-500">/mo</span></div>
        <a href="https://discord.gg/5AspwFP8Yj" target="_blank" rel="noreferrer" className="mt-8"><Button variant={plan.featured ? 'primary' : 'secondary'} className={`clip-button w-full rounded-none py-3 text-[10px] uppercase tracking-wide ${!plan.featured ? 'border-lime-300/20' : ''}`}>Choose {plan.name} <ArrowRight size={14} /></Button></a>
        <div className="my-6 h-px bg-lime-300/10" /><ul className="space-y-3.5">{plan.features.map(feature => <CheckLine key={feature}>{feature}</CheckLine>)}</ul>
      </motion.article> })}
    </motion.div>
    <p className="mt-8 flex items-center justify-center gap-2 text-center text-[9px] font-medium uppercase tracking-[.1em] text-zinc-600"><ShieldCheck size={13} className="text-lime-300" />Every plan includes DDoS protection, instant setup, and unlimited databases.</p>
    <div className="mt-16 grid gap-3 lg:grid-cols-2"><MiniPlanGroup id="vps" title="VPS Hosting" description="Dedicated resources for projects that demand the room to evolve." plans={miniPlans.vps} /><MiniPlanGroup id="bot-pricing" title="Discord Bot Hosting" description="Keep your community alive with always-on bot performance." plans={miniPlans.bots} /></div>
  </div></section>
}

function MiniPlanGroup({ id, title, description, plans }: { id: string; title: string; description: string; plans: typeof miniPlans.vps }) {
  return <article id={id} className="scroll-mt-28 border border-lime-300/15 bg-[#0c110d] p-6 sm:p-7"><div className="mb-7 flex items-start justify-between"><div><p className="text-[10px] font-bold tracking-[.17em] text-lime-300">EXPAND YOUR SETUP</p><h3 className="mt-2 font-display text-2xl font-semibold uppercase text-white">{title}</h3><p className="mt-2 text-sm text-zinc-500">{description}</p></div><Sparkles className="text-lime-300" size={20} /></div><div className="space-y-2">{plans.map(plan => <div key={plan.name} className="group flex flex-col gap-3 border border-transparent bg-white/[.025] p-4 transition hover:border-lime-300/20 hover:bg-lime-300/[.035] sm:flex-row sm:items-center sm:justify-between"><div><p className="font-display text-sm font-semibold uppercase text-white">{plan.name}</p><p className="mt-1 text-xs text-zinc-500">{plan.specs.join('  ·  ')}</p></div><a href="#contact" className="flex items-center gap-1 text-sm font-semibold text-lime-300">from ${plan.price}<ArrowRight size={14} className="transition group-hover:translate-x-1" /></a></div>)}</div></article>
}

export function Comparison() {
  const rows = [['Dirt', '2GB', '2 Cores', '20GB SSD', '10', 'Basic', 'Budget Friendly'], ['Stone', '4GB', '3 Cores', '50GB SSD', '30', 'Standard', 'Most Popular'], ['Diamond', '8GB', '5 Cores', '100GB NVMe', 'Unlimited', 'Premium', 'Best Value'], ['Netherite', '16GB', '8 Cores', '200GB NVMe', 'Unlimited', 'Priority', 'High Performance']]
  return <section className="px-5 py-20 sm:py-28"><div className="mx-auto max-w-7xl overflow-hidden border border-lime-300/15 bg-[#0c110d]"><div className="flex flex-col gap-3 border-b border-lime-300/10 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8"><SectionHeading align="left" eyebrow="COMPARE PLANS" title={<>The right power for <span className="text-gradient">every world.</span></>} /><p className="max-w-xs text-sm leading-6 text-zinc-500">Every plan includes DDoS protection, instant setup, and our powerful control panel.</p></div><div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-white/[.025] text-[10px] uppercase tracking-[.14em] text-zinc-500"><tr>{['Plan', 'RAM', 'CPU', 'Storage', 'Players', 'Support', 'Performance'].map(h => <th key={h} className="px-6 py-4 font-semibold">{h}</th>)}</tr></thead><tbody>{rows.map((row, index) => <tr key={row[0]} className={`border-t border-lime-300/[.07] ${index === 1 ? 'bg-lime-300/[.04]' : ''}`}>{row.map((cell, i) => <td key={cell} className={`px-6 py-5 ${i === 0 ? 'font-display font-semibold uppercase text-white' : 'text-zinc-400'}`}>{i === 6 ? <span className={`px-2.5 py-1 text-xs font-semibold ${index === 1 ? 'bg-lime-300/15 text-lime-200' : index === 2 ? 'bg-cyan-300/15 text-cyan-200' : 'bg-white/[.06] text-zinc-300'}`}>{cell}</span> : cell}</td>)}</tr>)}</tbody></table></div></div></section>
}
