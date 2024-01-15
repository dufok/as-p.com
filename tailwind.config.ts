import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
          'Interstate': ['Interstate', 'sans-serif'],
      },
      fontSize: {
        '51': '51px',
        '24': '24px',
      },
      spacing: {
        '18': '4.5rem', // 72px
        '20': '5rem',   // 80px
        // Add more as needed
      },
    },
  },
  plugins: [],
}
export default config
