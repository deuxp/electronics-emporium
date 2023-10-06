/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ["./**/*.html"],
  theme: {
    extend: {
      backgroundImage: { purpleBoard: "url('/img/5_162.jpg')" },
      fontFamily: {
        exo: ["Exo 2", "sans-serif"],
        vibes: ["Great Vibes", "cursive"],
      },
    },
  },
  plugins: [],
};
