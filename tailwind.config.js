/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: '#8BAA9A',
        olive: '#7C8F6D',
        charcoal: '#2F2F2F',
        warmSand: '#E8DCCB',
        offWhite: '#FAF9F7',
      },
      fontFamily: {
        sans: ['"Sora"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 24px 48px rgba(0,0,0,0.06)',
      },
      maxWidth: {
        content: '1320px',
        prose: '800px',
      },
      spacing: {
        section: '112px',
      },
      borderRadius: {
        '2.5xl': '20px',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        lg: '2rem',
        xl: '4rem',
        '2xl': '6rem',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
