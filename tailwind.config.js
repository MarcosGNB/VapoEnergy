/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Extiende la paleta de colores
      colors: {
        'vapo-red': '#ff0000',
        'vapo-dark': '#1a1a1a',
      },
      // Extiende las sombras
      boxShadow: {
        'product': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'product-hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'card': '0 2px 10px rgba(0, 0, 0, 0.1)',
      },
      // Animaciones personalizadas
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      // Keyframes para las animaciones
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      // Gradientes personalizados
      backgroundImage: {
        'vapo-gradient': 'linear-gradient(to right, #ff0000, #990000)',
      },
    },
  },
  plugins: [
    // Plugin para animaciones de Framer Motion
    require('tailwindcss-animate'),
    // Plugin para efectos de filtro
    require('@tailwindcss/forms'),
  ],
}