/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Mooli: ["Mooli", "serif"],
      Josefin: ["Josefin Sans", "serif"],
      Oxygen: ["Oxygen", "serif"],
      Roboto_Slab: ["Roboto Slab", "serif"],
      Croissant: ["Croissant One", "serif"],
      Bree_Serif: ["Bree Serif", "serif"],
      Martian: ["Martian Mono", "serif"],
      Exo: ["Exo 2", "serif"]
    },
    screens: {
      "sm": { "min": "320px", "max": "767px" },
      "md": { "min": "768px" },
      "lg": { "min": "992px" },
      "xl": { "min": "1200px" },
      "2xl": { "min": "1400px" },
    },
    extend: {},
  },
  plugins: [],
}

