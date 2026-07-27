import { motion } from 'framer-motion'
import { ArrowRight, GitFork as Github, MessageCircle as Twitter, RadioTower as Youtube, Send } from 'lucide-react'
import { Brand } from './Brand'
import { Link } from 'react-router-dom'
import { footerGroups } from '../data/siteData'
import { Button } from './ui'

export function CTA() {
	return (
		<section id="contact" className="scroll-mt-24 px-5 py-20 sm:py-28">
			<div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-emerald-300/20 bg-gradient-to-br from-emerald-600/20 via-[#0d1510] to-lime-900/15 px-6 py-14 text-center shadow-[0_0_80px_rgba(52,211,153,.12)] sm:px-12 sm:py-20">
				<div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-emerald-400/20 blur-[80px]" />
				<div className="absolute -bottom-28 -right-10 h-64 w-64 rounded-full bg-lime-400/15 blur-[100px]" />
				<div className="relative mx-auto max-w-2xl">
					<p className="text-xs font-bold tracking-[.2em] text-emerald-200">YOUR NEXT CHAPTER STARTS HERE</p>
					<h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">Ready to launch your server?</h2>
					<p className="mx-auto mt-5 max-w-lg text-zinc-300">Deploy your Minecraft server in under 60 seconds with Crazy Cloud.</p>
					<div className="mt-8 flex flex-wrap justify-center gap-3">
						<a href="#pricing"><Button>View Plans <ArrowRight size={16} /></Button></a>
						<a href="https://discord.gg/5AspwFP8Yj" target="_blank" rel="noreferrer"><Button variant="secondary">Join Discord</Button></a>
					</div>
				</div>
			</div>
		</section>
	)
}

export function Footer() { return <footer className="border-t border-white/[.07] px-5 pb-8 pt-14"><div className="mx-auto max-w-7xl"><div className="grid gap-10 md:grid-cols-[1.25fr_repeat(3,.65fr)]"><div><Brand /><p className="mt-4 max-w-xs text-sm leading-6 text-zinc-500">High-performance infrastructure for the worlds and communities you care about.</p><div className="mt-5 flex gap-2">{[Send, Github, Twitter, Youtube].map((Icon, i) => <a key={i} href="#home" aria-label="Social link" className="grid h-9 w-9 place-items-center rounded-lg border border-white/[.09] text-zinc-400 transition hover:border-emerald-300/30 hover:text-emerald-300"><Icon size={16} /></a>)}</div></div>{footerGroups.map(group => <div key={group.title}><p className="text-sm font-bold text-white">{group.title}</p><ul className="mt-4 space-y-3">{group.links.map((link) => <li key={link.slug}><Link to={`/info/${link.slug}`} className="text-sm text-zinc-500 transition hover:text-white">{link.label}</Link></li>)}</ul></div>)}</div><div className="mt-12 flex flex-col gap-5 rounded-2xl border border-white/[.08] bg-white/[.025] p-5 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-sm font-bold text-white">Keep up with the cloud.</p><p className="mt-1 text-xs text-zinc-500">Product updates, player tips, and zero spam.</p></div><form className="flex w-full max-w-sm gap-2" onSubmit={e => e.preventDefault()}><input aria-label="Email address" type="email" required placeholder="you@example.com" className="min-w-0 flex-1 rounded-xl border border-white/[.1] bg-[#0a0a0e] px-4 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-emerald-400" /><Button type="submit" className="px-4">Subscribe</Button></form></div><div className="mt-8 flex flex-col gap-4 border-t border-white/[.07] pt-6 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between"><p>© 2025 Crazy Cloud. Built for better worlds.</p><div className="flex flex-wrap items-center gap-x-4 gap-y-2"><Link to="/terms" className="transition hover:text-white">Terms</Link><span className="hidden text-zinc-700 sm:inline">•</span><Link to="/privacy" className="transition hover:text-white">Privacy</Link><span className="hidden text-zinc-700 sm:inline">•</span><Link to="/refund" className="transition hover:text-white">Refund Policy</Link><span className="hidden text-zinc-700 sm:inline">•</span><Link to="/support" className="transition hover:text-white">Support</Link></div></div></div></footer> }

