/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Permet à Tailwind de scanner tous les fichiers dans le répertoire src
  ],
  theme: {
    extend: {
      colors: {
        // Couleur d'accent unique du site : changer ici pour changer tout le thème
        brand: colors.indigo,
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['"Plus Jakarta Sans"', 'Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
