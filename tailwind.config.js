/** @type {import('tailwindcss').Config} */
module.exports = {
// purge→content
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    media: false, // or 'media' or 'class'
    theme: {
      container: {
        center: true,
        padding: {
          DEFAULT: '16px',
          sm: '24px',
        },
      },
      extend: {
        fontFamily: {
          logo: ['Gloria Hallelujah', 'cursive'],
        }
      },
    },
    variants: {
      extend: {
        opacity: ['disable'],
        cursor: ['disable'],
      },
    },
    plugins: [],
  }
