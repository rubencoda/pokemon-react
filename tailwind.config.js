/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.jsx',
  ],
  theme: {
    extend: {
      colors: {
        'navy-blue' : '#0F172A',
        'gold-pastel' : '#E9CC98'
      }
    },
  },
  jit: true,
  plugins: [],
}

