const plugin = require("tailwindcss/plugin");

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
});

module.exports = {
  rotateXY: rotateXY,
};