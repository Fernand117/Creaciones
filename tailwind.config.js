/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#FF69B4', // Rosa logo principal (Hot Pink)
          fuchsia: '#FF1493', // Fucsia logo acento (Deep Pink)
          purple: '#BA55D3', // Púrpura suave (Medium Orchid)
          dark: '#1A1A1A', // Negro para legibilidad
          light: '#FDFCFB', // Fondo crema
          gray: '#6B7280', // Gris para textos secundarios
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'bounce-slow': 'bounce-slow 4s infinite',
      },
    },
  },
  plugins: [],
}
