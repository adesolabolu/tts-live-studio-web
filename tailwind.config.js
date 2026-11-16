/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#000000",
        surface: {
          ground: "#050506",
          card: "#0a0a0c",
          hover: "#111114",
          elevated: "#161619"
        },
        border: {
          subtle: "#1c1c20",
          hover: "#2a2a30",
          active: "#38bdf8"
        },
        accent: {
          cyan: "#38bdf8",
          tiktok: "#fe2c55",
          emerald: "#10b981"
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      keyframes: {
        'equalizer': {
          '0%, 100%': { height: '3px' },
          '50%': { height: '16px' }
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' }
        }
      },
      animation: {
        'equalizer-1': 'equalizer 0.8s ease-in-out infinite alternate',
        'equalizer-2': 'equalizer 0.6s ease-in-out 0.2s infinite alternate',
        'equalizer-3': 'equalizer 0.7s ease-in-out 0.4s infinite alternate',
        'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }
    },
  },
  plugins: [],
}
