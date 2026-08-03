import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle, Copy, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { Brand } from '../components/Brand'
import { minecraftPlans } from '../data/siteData'

const DISCORD_INVITE = 'https://discord.gg/5AspwFP8Yj'
const JAZZCASH_NUMBER = '03235053047'

export default function PaymentPage() {
  const { planName } = useParams<{ planName: string }>()
  const navigate = useNavigate()
  const [copied, setCopied] = useState(false)

  const plan = minecraftPlans.find(
<<<<<<< HEAD
    (p) => p.slug === planName?.toLowerCase() || p.name.toLowerCase() === planName?.toLowerCase()
=======
    (p) => p.name.toLowerCase() === planName?.toLowerCase()
>>>>>>> 8d632e05e8c5dbab8d8dff9c2c1cba94f214d189
  )

  useEffect(() => {
    if (!plan) {
      navigate('/', { replace: true })
    }
  }, [plan, navigate])

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(JAZZCASH_NUMBER)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!plan) return null

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08080b] px-5 py-24 sm:py-32">
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(52,211,153,.1),transparent_22%),radial-gradient(circle_at_80%_15%,rgba(16,185,129,.08),transparent_18%)]" />
      
      <div className="relative mx-auto max-w-2xl">
        {/* Back link */}
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.18em] text-zinc-400 transition hover:text-emerald-300"
        >
          <ArrowLeft size={14} /> Back to Plans
        </Link>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-[2rem] border border-white/[.08] bg-[#0b120f]/95 p-8 shadow-[0_30px_120px_rgba(0,0,0,.35)] backdrop-blur-xl sm:p-12"
        >
          {/* Brand */}
          <div className="mb-10">
            <Brand />
          </div>

          {/* Plan summary */}
          <div className="mb-10 rounded-xl border border-lime-300/15 bg-lime-300/[.03] p-6">
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-lime-300">
              Selected Plan
            </p>
            <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {plan.name} Plan
            </h1>
            <div className="mt-3 flex items-baseline gap-1">
<<<<<<< HEAD
              <span className="text-lg font-semibold text-lime-300">{plan.price === 'Coming Soon' ? '' : '₹'}</span>
              <span className="font-display text-4xl font-bold tracking-[-.06em] text-white">
                {plan.price}
              </span>
              <span className="text-sm text-zinc-500">{plan.price === 'Coming Soon' ? '' : '/14 days'}</span>
=======
              <span className="text-lg font-semibold text-lime-300">₹</span>
              <span className="font-display text-4xl font-bold tracking-[-.06em] text-white">
                {plan.price}
              </span>
              <span className="text-sm text-zinc-500">/week</span>
>>>>>>> 8d632e05e8c5dbab8d8dff9c2c1cba94f214d189
            </div>
          </div>

          {/* Payment Section */}
          <div className="mb-10">
            <h2 className="mb-6 font-display text-xl font-semibold text-white">
              Complete Your Payment
            </h2>

            {/* JazzCash Number */}
            <div className="mb-8 rounded-xl border border-emerald-300/20 bg-emerald-300/[.04] p-5">
              <p className="text-[10px] font-bold uppercase tracking-[.2em] text-emerald-300">
                Send Payment to JazzCash
              </p>
              <p className="mt-1 text-xs font-medium text-emerald-300/70">
                Account: Sumaira Naseer
              </p>
              <div className="mt-3 flex items-center gap-3">
                <span className="font-display text-2xl font-bold tracking-tight text-white">
                  {JAZZCASH_NUMBER}
                </span>
                <button
                  onClick={handleCopyNumber}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/[.08] bg-white/[.04] px-3 py-1.5 text-xs font-semibold text-zinc-300 transition hover:border-emerald-400/50 hover:text-emerald-300"
                >
                  {copied ? (
                    <>
                      <CheckCircle size={14} className="text-emerald-400" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={14} /> Copy
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Instructions */}
            <div className="mb-8 space-y-3 text-sm text-zinc-400">
              <h3 className="font-semibold text-zinc-300">Steps:</h3>
              <ol className="list-inside list-decimal space-y-1.5">
                <li>Open your JazzCash app</li>
                <li>Send <span className="font-semibold text-white">₹{plan.price}</span> to <span className="font-semibold text-white">{JAZZCASH_NUMBER}</span></li>
                <li>Take a screenshot of the payment confirmation</li>
                <li>Click the button below to join Discord and submit proof</li>
              </ol>
            </div>

            {/* Payment Done Button */}
            <a
              href={DISCORD_INVITE}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-emerald-300 to-lime-300 px-6 py-4 text-sm font-bold uppercase tracking-[.12em] text-emerald-950 shadow-[0_0_32px_rgba(52,211,153,.18)] transition hover:from-emerald-200 hover:to-lime-200"
            >
              <CheckCircle size={18} />
              Payment Done — Join Discord for Verification
              <ExternalLink size={16} className="transition group-hover:translate-x-0.5" />
            </a>
<<<<<<< HEAD

            <a
              href={DISCORD_INVITE}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center gap-3 rounded-xl border border-white/[.08] bg-white/[.04] px-6 py-4 text-sm font-semibold uppercase tracking-[.12em] text-zinc-300 transition hover:border-emerald-400/40 hover:text-emerald-300"
            >
              <ExternalLink size={16} />
              Other Payment Method — Join Discord
            </a>
=======
>>>>>>> 8d632e05e8c5dbab8d8dff9c2c1cba94f214d189
          </div>

          {/* Footer note */}
          <p className="text-center text-[10px] uppercase tracking-[.12em] text-zinc-600">
            After payment, our team will verify and activate your server within 24 hours
          </p>
        </motion.div>
      </div>
    </main>
  )
}

