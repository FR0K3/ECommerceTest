/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#fdf9f2',
        'primary': '#e99401',
        'secondary': '#2a2a2a'
      },
      fontFamily: {
        'heading': ['Bebas Neue', 'sans-serif'],
        'body': ['Public Sans', 'sans-serif'],
      },
      backgroundImage: {
        'banner': "url('/img/header.jpg')"
      }
    },
  },
  plugins: [],
}