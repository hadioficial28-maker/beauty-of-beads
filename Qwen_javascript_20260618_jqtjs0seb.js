/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './context/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'rose-gold': {
          50: '#FBF4F5',
          100: '#F7E8EA',
          200: '#EFD1D6',
          300: '#E4B0B8',
          400: '#D48E99',
          500: '#B76E79',
          600: '#9C5A64',
          700: '#7E4751',
          800: '#633840',
          900: '#4A2A30',
        },
        'soft-pink': {
          50: '#FFF5F7',
          100: '#FADADD',
          200: '#F8E1E4',
          300: '#F2C6CB',
          400: '#E9A8B0',
          500: '#DD8892',
        },
        'cream': {
          50: '#FFFDF8',
          100: '#FFF8F0',
          200: '#FFF1E0',
          300: '#FFE8CC',
        },
        'gold': {
          50: '#FBF8EF',
          100: '#F5EDD4',
          200: '#EBDAA8',
          300: '#E0C67C',
          400: '#D4AF37',
          500: '#B8962E',
          600: '#8F7323',
        },
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
};