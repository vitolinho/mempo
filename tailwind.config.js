/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: "0.75rem",
      base: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2.5rem",
      "3xl": "3.75rem",
      "4xl": "5rem",
      "5xl": "7.5rem",
      "6xl": "12.5rem",
    },
    extend: {
      colors: {
        "neutral-0": "#FFFFFF",
        "neutral-1": "#F8F8F8",
        "neutral-2": "#333333",
        "neutral-3": "#181818",
        "primary-0": "#4E6473",
        "primary-1": "#091C25"
      }
    },
  },
  plugins: [],
}

