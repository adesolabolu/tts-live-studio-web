/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Single accent, matched to the desktop app's cyan.
        accent: {
          DEFAULT: '#38bdf8',
          soft: 'rgba(56, 189, 248, 0.12)',
        },
        live: '#10b981',
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        page: '1200px',
      },
    },
  },
  plugins: [],
};
