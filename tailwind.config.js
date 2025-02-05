/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
      },
      colors: {
        'nav': '#5273FF',
        'logo': '#ff6600',
        'green-logo': '#36b82a',
      },
      backgroundImage: {
        'black-friday': "url('/src/assets/friday.webp')",
      }
    },
  },
  plugins: [require('daisyui'),],
}

