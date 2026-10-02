/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#5A1725',
          dark: '#3B0C16',
          deep: '#29070E',
          secondary: '#761F32',
          light: '#8F283F',
          muted: '#4A131E',
          surface: '#43101B',
        },
        gold: {
          DEFAULT: '#C6A15B',
          light: '#E0C788',
          pale: '#F3E8CE',
          dark: '#A68037',
          bronze: '#8C6926',
        },
        ivory: {
          DEFAULT: '#F7F3ED',
          light: '#FCFAF7',
          dark: '#ECE4D8',
          border: '#E3D9CB',
        },
        charcoal: {
          DEFAULT: '#1B1B1B',
          secondary: '#6B625D',
          muted: '#8E8681',
          light: '#F4F4F4',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'radial-gradient-burgundy': 'radial-gradient(ellipse at top, #761F32 0%, #5A1725 50%, #29070E 100%)',
        'gold-metallic': 'linear-gradient(135deg, #F3E8CE 0%, #C6A15B 50%, #8C6926 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #C6A15B 0%, #F3E8CE 50%, #C6A15B 100%)',
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(41, 7, 14, 0.25)',
        'luxury-hover': '0 25px 50px -12px rgba(90, 23, 37, 0.35)',
        'gold-glow': '0 0 25px rgba(198, 161, 91, 0.25)',
        'subtle': '0 4px 20px -2px rgba(27, 27, 27, 0.05)',
      },
    },
  },
  plugins: [],
}
