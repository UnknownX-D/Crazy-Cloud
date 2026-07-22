import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onDrag' | 'onDragStart' | 'onDragEnd'> & { variant?: 'primary' | 'secondary' | 'ghost' }

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const styles = {
    primary: 'bg-gradient-to-r from-emerald-300 to-lime-300 text-emerald-950 shadow-[0_0_24px_rgba(52,211,153,.16)] hover:from-emerald-200 hover:to-lime-200',
    secondary: 'border border-white/15 bg-white/[.045] text-white backdrop-blur-sm hover:border-emerald-400/70 hover:bg-emerald-500/15',
    ghost: 'text-zinc-300 hover:text-white hover:bg-white/[.05]',
  }
  return <motion.button whileHover={{ y: -2 }} whileTap={{ scale: .97 }} className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-[#08080b] ${styles[variant]} ${className}`} {...props}>{children}</motion.button>
}

export function SectionHeading({ eyebrow, title, children, align = 'center' }: { eyebrow: string; title: ReactNode; children?: ReactNode; align?: 'center' | 'left' }) {
  return <div className={`${align === 'center' ? 'mx-auto text-center' : 'text-left'} max-w-2xl`}>
    <p className="mb-4 flex items-center gap-2 text-xs font-bold tracking-[.2em] text-emerald-300"><span className={`h-px w-7 bg-emerald-300/80 ${align === 'center' ? 'hidden' : ''}`} />{eyebrow}</p>
    <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
    {children && <p className="mt-5 text-base leading-7 text-zinc-400 sm:text-lg">{children}</p>}
  </div>
}

export function CheckLine({ children }: { children: ReactNode }) {
  return <li className="flex items-center gap-2.5 text-sm text-zinc-300"><span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-500/15 text-emerald-300"><Check size={12} strokeWidth={3} /></span>{children}</li>
}

export function TextLink({ children }: { children: ReactNode }) {
  return <a href="#contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-white transition hover:text-emerald-300">{children} <ArrowUpRight size={14} /></a>
}

export const reveal = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }
