/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        crimson: ["'Crimson Text'", "serif"],
        libre: ["'Libre Baskerville'", "serif"],
        lora: ["'Lora'", "serif"],
        montserrat: ["'Montserrat'", "sans-serif"],
        nunito: ["'Nunito'", "sans-serif"],
      },
      colors: {
  "brand-1": "#4a682f",
  "brand-2": "#5c7444",
  "brand-3": "#627837",
  "brand-4": "#949b53",
  "brand-5": "#889a4e",
  "brand-6": "#aab062",
  "brand-7": "#b1b66c",
  "brand-8": "#d4bb7f",
  "brand-9": "#efe0b3",
  "brand-10": "#fafadc",

  

  
  
}

    },
  },
  plugins: [],
}

