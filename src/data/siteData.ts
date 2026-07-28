import type { LucideIcon } from 'lucide-react'
import { Activity, Bot, Box, Boxes, CloudCog, Coins, Database, Gamepad2, Gem, Globe2, HardDrive, Layers3, LockKeyhole, Orbit, Rocket, Shield, ShieldCheck, Terminal, TimerReset, Zap } from 'lucide-react'

export type HostingCategory = { title: string; eyebrow: string; description: string; icon: LucideIcon; features: string[]; gradient: string }
export type Plan = { name: string; price: string; detail: string; features: string[]; badge?: string; featured?: boolean; icon: LucideIcon; iconStyle?: string }

export const navigation = [
  ['Home', '#home'], ['Minecraft Hosting', '#minecraft'], ['VPS Hosting', '#vps'], ['Bot Hosting', '#bots'],
  ['Features', '#features'], ['Pricing', '#pricing'], ['Support', '#support'], ['Contact', '#contact'],
]

export const hostingCategories: HostingCategory[] = [
  { title: 'Minecraft Hosting', eyebrow: 'THE FULL EXPERIENCE', description: 'Lag-free worlds built for every adventure, from intimate survival servers to sprawling networks.', icon: Gamepad2, features: ['Instant Setup', 'Plugin & Mod Support', 'DDoS Protection', 'Automatic Backups'], gradient: 'from-emerald-500/20 to-lime-500/5' },
  { title: 'VPS Hosting', eyebrow: 'UNCOMPROMISED POWER', description: 'Flexible virtual private servers with fast compute, complete control, and room to grow.', icon: Terminal, features: ['Full Root Access', 'AMD Ryzen CPUs', 'NVMe SSD', 'Dedicated IP'], gradient: 'from-emerald-400/15 to-teal-500/5' },
  { title: 'Discord Bot Hosting', eyebrow: 'ALWAYS ONLINE', description: 'Keep your community moving with dependable bot infrastructure made for every stack.', icon: Bot, features: ['Node.js & Python', 'Auto Restart', 'Console Access', 'Git Integration'], gradient: 'from-lime-500/20 to-emerald-500/5' },
]

export const minecraftPlans: Plan[] = [
  { name: 'Dirt', price: '2.99', detail: 'Perfect for a first world', features: ['2GB RAM', '2 CPU Cores', '20GB SSD', '10 Players', 'Basic Support'], icon: Box, iconStyle: 'border-lime-300/20 bg-lime-300/[.04] text-lime-300' },
  { name: 'Stone', price: '4.99', detail: 'Perfect for growing survival servers', features: ['3GB RAM', '2 CPU Cores', '35GB NVMe SSD', '20 Players', 'Daily Backups'], icon: Boxes, iconStyle: 'border-lime-300/20 bg-lime-300/[.04] text-lime-300' },
  { name: 'Iron', price: '5.99', detail: 'For lively communities', features: ['4GB RAM', '3 CPU Cores', '50GB SSD', 'Plugin Support', '30 Players'], badge: 'Most Popular', featured: true, icon: Shield, iconStyle: 'border-slate-400/35 bg-slate-400/[.06] text-slate-300' },
  { name: 'Gold', price: '8.99', detail: 'Built for active communities', features: ['6GB RAM', '4 CPU Cores', '80GB NVMe SSD', '50 Players', 'Plugin Support'], badge: 'BEST VALUE', icon: Coins, iconStyle: 'border-amber-400/40 bg-amber-400/[.08] text-amber-300' },
  { name: 'Diamond', price: '12.99', detail: 'Built for big ambitions', features: ['8GB RAM', '5 CPU Cores', '100GB NVMe', 'Unlimited Players', 'Premium Support'], badge: 'High Performance', icon: Gem, iconStyle: 'border-cyan-300/40 bg-cyan-300/[.06] text-cyan-200' },
  { name: 'Emerald', price: '16.99', detail: 'Power your growing network', features: ['12GB RAM', '6 CPU Cores', '150GB NVMe SSD', 'Unlimited Players', 'Premium Support'], badge: 'POPULAR', icon: Zap, iconStyle: 'border-emerald-400/40 bg-emerald-400/[.08] text-emerald-300' },
  { name: 'Netherite', price: '24.99', detail: 'Unrelenting performance', features: ['16GB RAM', '8 CPU Cores', '200GB NVMe', 'Dedicated Resources', 'Priority Support'], icon: ShieldCheck, iconStyle: 'border-fuchsia-300/30 bg-fuchsia-300/[.05] text-fuchsia-200' },
  { name: 'End', price: '34.99', detail: 'Maximum power. Zero compromises', features: ['24GB RAM', '12 CPU Cores', '350GB NVMe SSD', 'Dedicated Resources', 'Priority Support'], badge: 'ULTIMATE', icon: Orbit, iconStyle: 'border-purple-400/40 bg-purple-400/[.08] text-purple-300' },
]

export const miniPlans = {
  vps: [
    { name: 'Budget VPS', specs: ['2GB RAM', '2 vCPU', '40GB SSD'], price: '4.99' },
    { name: 'Performance VPS', specs: ['8GB RAM', '4 vCPU', '120GB NVMe'], price: '14.99' },
    { name: 'Enterprise VPS', specs: ['16GB RAM', '8 vCPU', '250GB NVMe'], price: '29.99' },
  ],
  bots: [
    { name: 'Starter Bot', specs: ['512MB RAM', 'Python', 'Node.js'], price: '1.99' },
    { name: 'Pro Bot', specs: ['2GB RAM', 'Auto Restart', 'Logs & Backups'], price: '5.99' },
    { name: 'Unlimited Bot', specs: ['4GB RAM', 'Multiple Bots', 'Priority Resources'], price: '11.99' },
  ],
}

export const features = [
  ['DDoS Protection', 'Intelligent edge filtering protects your worlds around the clock.', ShieldCheck],
  ['Instant Deployment', 'Start building in seconds with one-click server provisioning.', Rocket],
  ['AMD Ryzen CPUs', 'High-clock performance that keeps every tick on time.', Zap],
  ['NVMe Storage', 'Game files and world saves load with remarkable speed.', HardDrive],
  ['Global Locations', 'Deploy closer to your players across 50+ locations.', Globe2],
  ['Automatic Backups', 'Scheduled snapshots give every creation a safety net.', TimerReset],
  ['Powerful Panel', 'A simple, beautiful control panel for total command.', CloudCog],
  ['99.9% Uptime', 'Resilient infrastructure designed to stay out of your way.', Activity],
  ['24/7 Monitoring', 'Our systems watch the servers, so you can watch the fun.', LockKeyhole],
  ['One Click Installer', 'Launch curated modpacks and plugins without friction.', Box],
] as const

export const testimonials = [
  { name: 'PixelPioneer', role: 'Skyblock network owner', review: 'We moved 2,000 concurrent players to Crazy Cloud and the difference was immediate. No more panic during events.', initial: 'P', color: 'from-violet-400 to-fuchsia-500' },
  { name: 'MossyMason', role: 'Modded SMP creator', review: 'The panel is exactly what I wanted: incredibly clean, fast to use, and backups are completely effortless.', initial: 'M', color: 'from-cyan-300 to-blue-500' },
  { name: 'EnderLynx', role: 'Community manager', review: 'Support feels like an extension of our team. They helped us tune our setup and our TPS has been flawless.', initial: 'E', color: 'from-pink-400 to-orange-400' },
]

export const stats = [
  ['25,000+', 'Servers hosted'], ['99.99%', 'Network uptime'], ['50+', 'Global locations'], ['150,000+', 'Happy players'],
]

export const comparisonRows = [
  ['Dirt', '2GB', '2 Cores', '20GB SSD', '10', 'Basic', 'Starter Tier'],
  ['Stone', '3GB', '2 Cores', '35GB NVMe SSD', '20', 'Standard', 'Survival Tier'],
  ['Iron', '4GB', '3 Cores', '50GB SSD', '30', 'Standard', 'Community Tier'],
  ['Gold', '6GB', '4 Cores', '80GB NVMe SSD', '50', 'Standard', 'Advanced Tier'],
  ['Diamond', '8GB', '5 Cores', '100GB NVMe', 'Unlimited', 'Premium', 'Pro Performance'],
  ['Emerald', '12GB', '6 Cores', '150GB NVMe SSD', 'Unlimited', 'Premium', 'Ultra Performance'],
  ['Netherite', '16GB', '8 Cores', '200GB NVMe', 'Unlimited', 'Priority', 'Extreme Power'],
  ['End', '24GB', '12 Cores', '350GB NVMe SSD', 'Dedicated', 'Priority', 'Ultimate Power'],
]

export const footerGroups = [
  {
    title: 'Hosting',
    links: [
      { label: 'Minecraft Servers', slug: 'minecraft-servers' },
      { label: 'VPS Hosting', slug: 'vps-hosting' },
      { label: 'Bot Hosting', slug: 'bot-hosting' },
      { label: 'Status', slug: 'status' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', slug: 'about-us' },
      { label: 'Contact', slug: 'contact' },
      { label: 'Careers', slug: 'careers' },
      { label: 'Partners', slug: 'partners' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Support Center', slug: 'support-center' },
      { label: 'Knowledge Base', slug: 'knowledge-base' },
      { label: 'System Status', slug: 'system-status' },
      { label: 'Affiliates', slug: 'affiliates' },
    ],
  },
]

export const decorativeIcons = [Database, Layers3]
