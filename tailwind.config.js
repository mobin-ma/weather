/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'new-york': "url('@assets/images/New-York.jpg')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

