/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "header": "#3AB6DE"
      },
      fontFamily: {
        'lato': "'Lato', sans-serif",
        'mooli': "'Mooli', sans-serif",
        'sourcecode': "'Source Code Pro', monospace",
        'roboto': "'Roboto', sans-serif"
      }
    },
  },
  plugins: [],
}

