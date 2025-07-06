/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // important for Tailwind to scan your files
  ],
  darkMode: 'class', // ✅ enable class-based dark mode
  theme: {
    extend: {},
  },
  plugins: [],
};
