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
        'background-dark': '#131920', //  nav bg color
        'background-dark-secondary': '#1b232d', // card
        'background-dark-hover': 'rgb(35, 35, 35, 0.55)', // hover
        
        // Text colors
        'text-dark-primary': 'rgba(255, 255, 255, 0.8)',
        'text-dark-secondary': 'rgba(255, 255, 255, 0.5)',
        
        'text-active-color': '#4680ff',

        // Accent colors
        'accent-dark': '#4680ff', // For buttons, highlights, etc.
        'accent-dark-hover': '#3c6dd9',

        // Border colors
        'border-dark': '#2e2e2e', //  nav border color
        'border-dark-secondary': '#263240', // card border color
        'border-btn': '#4680ff',
        'border-btn-hover': '#3866cc',
      },
      dropShadow: {
        'dark-primary': '0 4px 3px rgba(0, 0, 0, 1)',
        'dark-secondary': '0 4px 3px rgb(255 255 255 / 0.22)',
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

