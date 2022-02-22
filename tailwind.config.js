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
  theme: {
    extend: {
      colors: {
        wavus: {
          "DEFAULT": "var(--wavus)",
          "header": "var(--wavus_header)",
          "sub": "var(--wavus_sub)",
        }
      },
      animation: {
        tilt: "tilt 10s linear infinite",
        blob: "blob 10s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        tilt: {
          "0%,50%,100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(3deg)",
          },
          "75%": {
            transform: "rotate(-3deg)",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("daisyui"),
    rotateXY,
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