/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8de969",
        secondary: "#2ecc71",
        accent: "#f4d03f",
      },
    },
  },
  plugins: [],
};
