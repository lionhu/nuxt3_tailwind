const plugin = require('tailwindcss/plugin')

// Rotate X utilities
const rotateXY = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-x-30": {
      transform: "rotateX(30deg)",
    },
    ".rotate-x-60": {
      transform: "rotateX(60deg)",
    },
    ".rotate-x-90": {
      transform: "rotateX(90deg)",
    },
    ".rotate-y-30": {
      transform: "rotateY(30deg)",
    },
    ".rotate-y-60": {
      transform: "rotateY(60deg)",
    },
    ".rotate-y-90": {
      transform: "rotateY(90deg)",
    },
  });
})


module.exports = {
  content: [
    "./assets/**/*.{vue,js,css}",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    // './nuxt.config.{js,ts}',
  ],
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("daisyui"),
    rotateXY
  ],
  daisyui: {
    themes: [
      "emerald", // first one will be the default theme
      // "dark",
      // "forest",
      "synthwave",
    ],
  },
};