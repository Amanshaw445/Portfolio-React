/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scrollBehavior: {
        smooth: 'smooth', // Enables scroll-smooth
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        gradientSlow: 'gradientShift 10s ease infinite',
        gradientFast: 'gradientShift 2s ease infinite',
      },
    },
  },
  plugins: [],
}
