import { useParams, Link } from 'react-router-dom'
import { infoPages } from '../data/pageData'
import { Brand } from '../components/Brand'

type InfoPageKey = keyof typeof infoPages

type PageData = (typeof infoPages)[InfoPageKey]

export default function InfoPage() {
  const { slug } = useParams<{ slug: InfoPageKey }>()
  const page: PageData | undefined = slug ? infoPages[slug] : undefined

  if (!page) {
    return (
      <main className="relative min-h-screen overflow-hidden bg-[#08080b] px-5 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(52,211,153,.1),transparent_22%),radial-gradient(circle_at_80%_15%,rgba(16,185,129,.08),transparent_18%)]" />
        <div className="relative mx-auto max-w-4xl rounded-[2rem] border border-white/[.08] bg-[#0b120f]/95 p-8 shadow-[0_30px_120px_rgba(0,0,0,.35)] backdrop-blur-xl sm:p-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <Brand />
            <Link to="/" className="inline-flex items-center rounded-full border border-white/[.08] bg-white/[.03] px-4 py-2 text-xs font-semibold uppercase tracking-[.18em] text-zinc-300 transition hover:border-emerald-300/40 hover:text-white">Back to Home</Link>
          </div>
          <div className="mt-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-emerald-300">Page not found</p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">That page doesn’t exist.</h1>
            <p className="mt-5 text-sm leading-7 text-zinc-400">Use the footer links or go back to the homepage to continue.</p>
          </div>
          <div className="mt-10 flex justify-center"><Link to="/" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-300 to-lime-300 px-5 py-3 text-sm font-semibold text-emerald-950 transition hover:brightness-105">Return to Home</Link></div>
        </div>
      </main>
    )
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08080b] px-5 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(52,211,153,.1),transparent_22%),radial-gradient(circle_at_80%_15%,rgba(16,185,129,.08),transparent_18%)]" />
      <div className="relative mx-auto max-w-4xl rounded-[2rem] border border-white/[.08] bg-[#0b120f]/95 p-8 shadow-[0_30px_120px_rgba(0,0,0,.35)] backdrop-blur-xl sm:p-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Brand />
          <Link to="/" className="inline-flex items-center rounded-full border border-white/[.08] bg-white/[.03] px-4 py-2 text-xs font-semibold uppercase tracking-[.18em] text-zinc-300 transition hover:border-emerald-300/40 hover:text-white">Back to Home</Link>
        </div>
        <div className="mt-12">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-emerald-300">{page.title}</p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">{page.title}</h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">{page.description}</p>
        </div>
        <div className="mt-10 space-y-4 text-sm leading-7 text-zinc-300">
          {page.content.map((paragraph: string) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="mt-10 flex flex-wrap gap-3"><Link to="/" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-300 to-lime-300 px-5 py-3 text-sm font-semibold text-emerald-950 transition hover:brightness-105">Return to Home</Link></div>
      </div>
    </main>
  )
}
