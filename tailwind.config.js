/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './src/index.html',
  ],
  theme: {
    extend: {
      colors: {
        // Background colors
        'background-dark': '#131920',
        'background-dark-secondary': '#1b232d',
        'background-dark-hover': 'rgb(35, 35, 35, 0.55)',
        
        // Text colors
        'text-dark-primary': 'rgba(255, 255, 255, 0.8)',
        'text-dark-secondary': 'rgba(255, 255, 255, 0.5)',

        // Accent colors
        'accent-dark': '#4680ff',
        'accent-dark-hover': '#3c6dd9',

        // Border colors
        'border-dark': '#2e2e2e',
        'border-dark-secondary': '#263240',
      },
      dropShadow: {
        'dark-primary': '0 4px 3px rgba(0, 0, 0, 1)',
        'dark-secondary': '0 4px 3px rgb(255 255 255 / 0.22)',
      },
      boxShadow: {
        'card-shadow-dark': '0 10px 15px -3px rgba(37,99,235,0.68)',
        'card-image-inset': 'inset 0 0px 6px 2px rgb(0 0 0 / 77%)'
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}

