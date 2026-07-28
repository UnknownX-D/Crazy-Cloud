import { motion } from 'framer-motion'
import { Activity, ChevronDown, CirclePlay, Cpu, Database, HardDrive, MoreHorizontal, Play, Radio, Users } from 'lucide-react'
import { useEffect, useState } from 'react'
import { SectionHeading } from './ui'

export function DashboardPreview() {
  const [cpu, setCpu] = useState(18)
  const [mem, setMem] = useState(14.8)
  const [storage, setStorage] = useState(1.2)

  useEffect(() => {
    const interval = setInterval(() => {
      setCpu((prev) => {
        const delta = Math.floor(Math.random() * 7) - 3
        return Math.min(28, Math.max(12, prev + delta))
      })
      setMem((prev) => {
        const delta = +(Math.random() * 0.4 - 0.2).toFixed(1)
        return Math.min(18.4, Math.max(13.5, +(prev + delta).toFixed(1)))
      })
      setStorage((prev) => {
        const delta = +(Math.random() * 0.1 - 0.05).toFixed(2)
        return Math.min(1.5, Math.max(1.1, +(prev + delta).toFixed(2)))
      })
    }, 1400)

    return () => clearInterval(interval)
  }, [])

  const memoryPercent = Math.round((mem / 64) * 100)
  const storagePercent = Math.round((storage / 4) * 100)

  const usage = [
    {
      label: 'CPU usage',
      value: `${cpu}%`,
      width: `${cpu}%`,
      icon: Cpu,
      style: {
        background: 'linear-gradient(90deg, #34d399, #bef264)',
        boxShadow: '0 0 12px rgba(190, 242, 100, 0.6)',
      },
    },
    {
      label: 'Memory',
      value: `${mem.toFixed(1)} / 64GB`,
      width: `${memoryPercent}%`,
      icon: Activity,
      style: {
        background: 'linear-gradient(90deg, #00f2fe, #38bdf8, #60a5fa)',
        boxShadow: '0 0 14px rgba(0, 242, 254, 0.85)',
      },
    },
    {
      label: 'Storage',
      value: `${storage.toFixed(1)}TB / 4TB`,
      width: `${storagePercent}%`,
      icon: HardDrive,
      style: {
        background: 'linear-gradient(90deg, #d946ef, #f472b6, #fb7185)',
        boxShadow: '0 0 12px rgba(244, 114, 182, 0.7)',
      },
    },
  ]

  return (
    <section className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="ONE PLACE. TOTAL CONTROL."
          title={
            <>
              A panel your players will <span className="text-gradient">never see.</span>
            </>
          }
        >
          Our beautifully simple control panel puts the complicated stuff exactly where you need it.
        </SectionHeading>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-shell mt-12 overflow-hidden rounded-2xl bg-[#0c0c11]/90 shadow-2xl shadow-black/40"
        >
          <div className="flex h-12 items-center justify-between border-b border-white/[.08] bg-white/[.03] px-4 sm:px-6">
            <div className="flex items-center gap-3">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-violet-500/20 text-violet-300">
                <CirclePlay size={15} />
              </span>
              <span className="text-sm font-semibold text-white">survival-world</span>
              <span className="hidden items-center gap-1.5 rounded-full bg-emerald-400/10 px-2 py-1 text-[10px] font-bold text-emerald-300 sm:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                RUNNING
              </span>
            </div>
            <MoreHorizontal size={18} className="text-zinc-500" />
          </div>
          <div className="grid min-h-[330px] grid-cols-[52px_1fr] sm:grid-cols-[178px_1fr]">
            <aside className="border-r border-white/[.07] p-3 sm:p-4">
              <div className="hidden text-[10px] font-bold tracking-[.16em] text-zinc-600 sm:block">
                MANAGE SERVER
              </div>
              {[
                ['Console', Radio],
                ['Files', Database],
                ['Players', Users],
                ['Network', Activity],
              ].map(([name, Icon], i) => {
                const IconComponent = Icon as typeof Radio
                return (
                  <button
                    key={name as string}
                    className={`mt-3 flex w-full items-center gap-3 rounded-lg p-2 text-left text-xs ${
                      i === 0 ? 'bg-violet-500/15 text-white' : 'text-zinc-500 hover:bg-white/5'
                    }`}
                  >
                    <IconComponent size={15} />
                    <span className="hidden sm:inline">{name as string}</span>
                  </button>
                )
              })}
            </aside>
            <main className="grid gap-4 p-4 sm:p-6 lg:grid-cols-[1.4fr_.8fr]">
              <div className="rounded-xl border border-white/[.07] bg-[#08080c] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-zinc-200">Live console</span>
                  <button className="flex items-center gap-1 text-[10px] text-zinc-500">
                    Auto-scroll <ChevronDown size={12} />
                  </button>
                </div>
                <div className="h-44 font-mono text-[10px] leading-6 text-zinc-500">
                  <p>
                    <span className="text-emerald-300">[12:11:32 INFO]:</span> Starting minecraft server version 1.20.4
                  </p>
                  <p>
                    <span className="text-violet-300">[12:11:35 INFO]:</span> Loading 47 plugins...
                  </p>
                  <p>
                    <span className="text-cyan-200">[12:11:38 INFO]:</span> Done (3.841s)! Type "help" for help
                  </p>
                  <p>
                    <span className="text-emerald-300">[12:14:07 INFO]:</span> PixelPioneer joined the game
                  </p>
                  <span className="animate-pulse text-white">_</span>
                </div>
                <div className="mt-2 flex gap-2 border-t border-white/[.06] pt-3">
                  <input
                    aria-label="Console command"
                    placeholder="Send command..."
                    className="min-w-0 flex-1 bg-transparent text-xs text-zinc-300 outline-none placeholder:text-zinc-700"
                  />
                  <button className="text-cyan-300">
                    <Play size={15} fill="currentColor" />
                  </button>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {usage.map(({ label, value, width, icon: Icon, style }) => (
                  <div key={label} className="rounded-xl border border-white/[.07] bg-white/[.025] p-3.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon size={14} className="text-zinc-400" />
                        <span className="text-[11px] font-medium text-zinc-400">{label}</span>
                      </div>
                      <span className="font-mono text-xs font-bold text-white transition-all duration-300">{value}</span>
                    </div>
                    <div className="mt-3.5 h-2 overflow-hidden rounded-full bg-white/[.08]">
                      <div
                        className="h-full rounded-full transition-all duration-700 ease-out"
                        style={{ width, ...style }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </motion.div>
      </div>
    </section>
  )
}



