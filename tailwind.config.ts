import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { ink: '#08080b', panel: '#101015', violet: '#8b5cf6', cyan: '#22d3ee' },
      fontFamily: { display: ['Oxanium', 'sans-serif'], body: ['Inter', 'sans-serif'] },
      boxShadow: { glow: '0 0 42px rgba(139, 92, 246, .28)' },
    },
  },
  plugins: [],
} satisfies Config
