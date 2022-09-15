/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '4k': '2560px',
      },
      fontFamily: {
        dancing: "'Dancing Script', cursive",
        bodoni: "'Bodoni Moda', serif",
        cantataOne: "'Cantata One', serif",
        cormorant: "'Cormorant', serif",
        merienda: "'Merienda', cursive",
        crimsonPro: "'Crimson Pro', serif",
        poppins: "'Poppins', sans-serif",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
