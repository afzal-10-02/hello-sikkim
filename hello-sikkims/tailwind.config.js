/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        alpine: "#0F172A",
        surface: "#1E293B",
        emerald: { DEFAULT: "#059669", bright: "#10B981" },
        amber: "#F59E0B",
      },
      fontFamily: { sans: ["Manrope", "sans-serif"] },
    },
  },
  plugins: [],
};