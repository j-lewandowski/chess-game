/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#302E2B",
        darkbox: "#768A9A",
        lightbox: "#95A6B3",
      },
    },
  },
  plugins: [],
};
