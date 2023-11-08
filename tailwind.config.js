/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1FB9FC",
        secondary: "#F6FAFC",
      },
    },
  },
  plugins: [],
};
