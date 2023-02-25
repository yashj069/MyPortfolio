/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    transitionTimingFunction: {
      "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
      "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
    },
    backgroundImage: {
      "hero-pattern": "url('/src/assets/banner-bg.png')",
      "footer-texture": "url('/img/footer-texture.png')",
    },
  },
  plugins: [],
};
