/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Mooli: ["Mooli"],
      Dela: ["Dela Gothic One"],
      Josefin: ["Josefin Sans"],
      Oxygen: ["Oxygen"],
      Roboto_Slab: ["Roboto Slab"],
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

