/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#e8f7ff',
          100: '#cbeaff',
          200: '#9fd8ff',
          300: '#6ec2ff',
          400: '#3aa9ff',
          500: '#148fff',
          600: '#0a72db',
          700: '#0758aa',
          800: '#083f78',
          900: '#0a2a52',
          950: '#071d3a'
        }
      }
    }
  },
  plugins: [],
}
