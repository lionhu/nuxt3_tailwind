const { withOpacity } = require("./tailwindcss/functions.js");
const { rotateXY } = require("./tailwindcss/plugins.js");


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
          DEFAULT: "var(--wavus)",
          header: "var(--wavus_header)",
          sub: "var(--wavus_sub)",
          // muted: ({ opacityValue }) => {
          //   return opacityValue !== undefined
          //     ? `rgb(var(--wavus_muted),${opacityValue})`
          //     : `rgb(var(--wavus_muted))`;
          // },
          muted:withOpacity("--wavus_muted")
        },
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
