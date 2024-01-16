import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        'teal': "var(--color-teal)",
        'grey-light': '#52595f',
        'grey-lightest': '#E6E8EE',
        'charcoal': '#373B3F',
        'charcoal-trans': "#373b3f4d",
        'red-550': "var(--color-red-550)",
        purple: {
          550: "var(--color-purple-550)"
        },
      },
      fontSize: {
        '3.5xl': '2.25rem'
      }
    },
  },
  plugins: [],
  safelist: [
    'bg-charcoal',
    'bg-orange-400',
    'hidden',
  ]
}
export default config
