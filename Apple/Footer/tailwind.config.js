module.exports = {
    purge: ['./public//*.html', './src//*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors:{
          'headbg':'#f5f5f7',
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }