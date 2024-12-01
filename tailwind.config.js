/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette
        'teal-primary': '#20B2AA', // Light Sea Green
        'teal-secondary': '#008080', // Teal
        'background-light': '#F0F4F8',
        'background-dark': '#1A202C',
        'text-light': '#2D3748',
        'text-dark': '#E2E8F0'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      // Add custom animation or other extended configurations
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  // Enable class-based dark mode
  darkMode: 'class',
  plugins: [],
}