/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        dancing: "'Dancing Script', cursive",
        bodoni: "'Bodoni Moda', serif",
        cantataOne: "'Cantata One', serif",
        cormorant: "'Cormorant', serif",
        merienda: "'Merienda', cursive",
        crimsonPro: "'Crimson Pro', serif",
      },
    },
  },
  plugins: [],
};
