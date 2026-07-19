/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0B0C10',
          lighter: '#1F2833',
        },
        electricBlue: '#45A29E',
        cyanAccent: '#66FCF1',
        neonPurple: '#C026D3',
        darkSurface: 'rgba(31, 40, 51, 0.4)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'mesh': 'radial-gradient(at 40% 20%, hsla(180,100%,74%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(289,100%,56%,0.4) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(180,100%,74%,0.4) 0px, transparent 50%)',
      }
    },
  },
  plugins: [],
}
