import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, Check, Eye, EyeOff, LockKeyhole, Mail, MessageCircle, Sparkles, UserRound } from 'lucide-react'
import { FormEvent, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Brand } from '../components/Brand'
import { Button } from '../components/ui'

type AuthProvider = 'google' | 'discord'

type AuthSession = {
  provider: AuthProvider
  displayName: string
  email: string
  signedInAt: string
}

const AUTH_STORAGE_KEY = 'crazy-cloud-auth-session'

function persistProviderSession(provider: AuthProvider): AuthSession {
  const session: AuthSession = {
    provider,
    displayName: provider === 'google' ? 'Google User' : 'Discord User',
    email: provider === 'google' ? 'google.user@example.com' : 'discord.user@example.com',
    signedInAt: new Date().toISOString(),
  }

  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session))
  return session
}

function ProviderButton({ children, isLoading = false, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode; isLoading?: boolean }) {
  return <button type="button" disabled={isLoading} className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-white/[.1] bg-white/[.035] text-xs font-semibold text-zinc-300 transition hover:border-white/20 hover:bg-white/[.06] disabled:cursor-not-allowed disabled:opacity-70" {...props}>{isLoading ? 'Signing in…' : children}</button>
}

function Input({ label, icon: Icon, error, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string; icon: typeof Mail; error?: string }) { return <label className="block"><span className="mb-2 block text-xs font-semibold text-zinc-300">{label}</span><span className={`flex h-12 items-center gap-3 rounded-xl border bg-white/[.025] px-3 transition focus-within:border-violet-400/80 ${error ? 'border-rose-400/70' : 'border-white/[.1]'}`}><Icon size={16} className="shrink-0 text-zinc-500" /><input className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-zinc-600" {...props} /></span><AnimatePresence>{error && <motion.span initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mt-1.5 block text-xs text-rose-300">{error}</motion.span>}</AnimatePresence></label> }

export default function AuthPage({ mode }: { mode: 'login' | 'signup' }) {
  const isSignup = mode === 'signup'; const navigate = useNavigate(); const [showPassword, setShowPassword] = useState(false); const [submitted, setSubmitted] = useState(false)
  const [values, setValues] = useState({ username: '', email: '', password: '', confirm: '', terms: false, remember: false })
  const [authPending, setAuthPending] = useState<AuthProvider | null>(null)
  const validation = useMemo(() => ({ email: !/^\S+@\S+\.\S+$/.test(values.email) ? 'Enter a valid email address.' : '', password: values.password.length < 8 ? 'Use at least 8 characters.' : '', confirm: isSignup && values.confirm !== values.password ? 'Passwords do not match.' : '', username: isSignup && values.username.trim().length < 3 ? 'Use at least 3 characters.' : '', terms: isSignup && !values.terms ? 'Please accept the terms to continue.' : '' }), [values, isSignup])
  const errors = submitted ? validation : { email: '', password: '', confirm: '', username: '', terms: '' }
  const hasErrors = Object.values(validation).some(Boolean)
  const strength = Math.min(4, (values.password.length >= 8 ? 1 : 0) + (/[A-Z]/.test(values.password) ? 1 : 0) + (/\d/.test(values.password) ? 1 : 0) + (/[^A-Za-z0-9]/.test(values.password) ? 1 : 0))
  function update(key: keyof typeof values, value: string | boolean) { setValues(v => ({ ...v, [key]: value })) }
  function submit(e: FormEvent) { e.preventDefault(); setSubmitted(true); if (!hasErrors) navigate('/') }
  function handleProviderAuth(provider: AuthProvider) {
    setAuthPending(provider)
    persistProviderSession(provider)
    window.setTimeout(() => navigate('/'), 500)
  }
  return <main className="relative grid min-h-screen overflow-hidden bg-[#08080b] lg:grid-cols-[1.05fr_.95fr]"><div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_80%_30%,rgba(139,92,246,.18),transparent_25%),radial-gradient(circle_at_15%_80%,rgba(34,211,238,.1),transparent_20%)]" />
    <section className="relative z-10 flex min-h-screen flex-col border-r border-white/[.06] p-5 sm:p-8 lg:p-10"><div className="flex items-center justify-between"><Brand /><Link to="/" className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500 transition hover:text-white"><ArrowLeft size={15} />Back to site</Link></div><div className="mx-auto flex w-full max-w-md flex-1 items-center py-12"><motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="w-full"><div className="mb-8"><p className="text-xs font-bold tracking-[.18em] text-cyan-300">{isSignup ? 'CREATE YOUR ACCOUNT' : 'WELCOME BACK'}</p><h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-white">{isSignup ? 'Start building today.' : 'Your world is waiting.'}</h1><p className="mt-3 text-sm leading-6 text-zinc-500">{isSignup ? 'Deploy your next great idea in just a few clicks.' : 'Sign in to manage your servers and projects.'}</p></div><form onSubmit={submit} noValidate className="space-y-4">{isSignup && <Input label="Username" icon={UserRound} placeholder="pixelpioneer" autoComplete="username" value={values.username} onChange={e => update('username', e.target.value)} error={errors.username} />}<Input label="Email address" icon={Mail} type="email" placeholder="you@example.com" autoComplete="email" value={values.email} onChange={e => update('email', e.target.value)} error={errors.email} /><div><div className="relative"><Input label="Password" icon={LockKeyhole} type={showPassword ? 'text' : 'password'} placeholder="••••••••" autoComplete={isSignup ? 'new-password' : 'current-password'} value={values.password} onChange={e => update('password', e.target.value)} error={errors.password} /><button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? 'Hide password' : 'Show password'} className="absolute right-3 top-[34px] text-zinc-500 hover:text-white">{showPassword ? <EyeOff size={16} /> : <Eye size={16} />}</button></div>{isSignup && <div className="mt-2"><div className="flex gap-1.5">{[1, 2, 3, 4].map(s => <span key={s} className={`h-1 flex-1 rounded-full ${strength >= s ? (strength > 2 ? 'bg-emerald-400' : 'bg-amber-400') : 'bg-white/[.08]'}`} />)}</div><p className="mt-1.5 text-[10px] text-zinc-600">Password strength: {['Weak', 'Weak', 'Fair', 'Strong', 'Very strong'][strength]}</p></div>}</div>{isSignup && <Input label="Confirm password" icon={LockKeyhole} type={showPassword ? 'text' : 'password'} placeholder="••••••••" autoComplete="new-password" value={values.confirm} onChange={e => update('confirm', e.target.value)} error={errors.confirm} />}
        <div className="flex items-start justify-between gap-3 text-xs">{isSignup ? <label className="flex cursor-pointer items-start gap-2 text-zinc-500"><input type="checkbox" checked={values.terms} onChange={e => update('terms', e.target.checked)} className="mt-0.5 h-3.5 w-3.5 accent-violet-500" />I agree to the <a href="#terms" className="text-violet-300">Terms of Service</a></label> : <label className="flex cursor-pointer items-center gap-2 text-zinc-500"><input type="checkbox" checked={values.remember} onChange={e => update('remember', e.target.checked)} className="h-3.5 w-3.5 accent-violet-500" />Remember me</label>}{!isSignup && <a href="#forgot" className="font-medium text-violet-300 hover:text-violet-200">Forgot password?</a>}</div>{errors.terms && <p className="-mt-2 text-xs text-rose-300">{errors.terms}</p>}
        <Button type="submit" className="mt-2 w-full">{isSignup ? 'Create Account' : 'Login'}</Button></form><div className="my-6 flex items-center gap-3"><span className="h-px flex-1 bg-white/[.08]" /><span className="text-[10px] font-medium text-zinc-600">OR CONTINUE WITH</span><span className="h-px flex-1 bg-white/[.08]" /></div><div className="flex gap-3"><ProviderButton onClick={() => handleProviderAuth('google')} isLoading={authPending === 'google'}><span className="grid h-4 w-4 place-items-center rounded-full bg-white text-[9px] font-bold text-zinc-900">G</span>Continue with Google</ProviderButton><ProviderButton onClick={() => handleProviderAuth('discord')} isLoading={authPending === 'discord'}><MessageCircle size={15} />Continue with Discord</ProviderButton></div><p className="mt-7 text-center text-xs text-zinc-500">{isSignup ? 'Already have an account?' : "Don't have an account?"} <Link to={isSignup ? '/login' : '/signup'} className="font-semibold text-cyan-300 hover:text-cyan-200">{isSignup ? 'Login' : 'Sign Up'}</Link></p></motion.div></div></section>
    <section className="relative z-10 hidden items-center justify-center overflow-hidden p-10 lg:flex"><div className="absolute h-[30rem] w-[30rem] rounded-full bg-violet-600/15 blur-[120px]" /><motion.div initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .15 }} className="relative max-w-md rounded-3xl border border-white/[.12] bg-white/[.035] p-8 shadow-2xl shadow-black/40 backdrop-blur-xl"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 text-white shadow-[0_0_30px_rgba(139,92,246,.45)]"><Sparkles size={22} /></span><h2 className="mt-7 font-display text-3xl font-bold text-white">Built for the<br /><span className="text-gradient">next big thing.</span></h2><p className="mt-4 text-sm leading-6 text-zinc-400">Power hundreds of players, deploy a sophisticated Discord bot, or run your next web app—all from a single high-performance platform.</p><div className="mt-8 space-y-3">{['Deploy in under 60 seconds', 'Global DDoS protection included', '24/7 human expert support'].map(item => <p key={item} className="flex items-center gap-3 text-sm text-zinc-300"><span className="grid h-5 w-5 place-items-center rounded-full bg-cyan-400/10 text-cyan-300"><Check size={12} /></span>{item}</p>)}</div><div className="mt-10 rounded-xl border border-white/[.08] bg-black/20 p-4"><div className="flex items-center justify-between text-xs"><span className="text-zinc-500">Community uptime</span><span className="font-bold text-emerald-300">99.99%</span></div><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/5"><div className="h-full w-[99%] rounded-full bg-gradient-to-r from-cyan-400 to-violet-400" /></div></div></motion.div></section>
  </main>
}
