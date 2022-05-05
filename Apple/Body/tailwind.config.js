module.exports = {
       purge: ['./public//*.html', './src//*.{vue,js,ts,jsx,tsx}'],
       darkMode: false, // or 'media' or 'class'
       theme: {
              extend: {
                     colors: {
                            'headbg': 'rgba(0, 0, 0, 0.8)',
                            'headlinks': '#f5f5f7',
                            'neblack': '#1d1d1f',
                            'price': '#86868b',
                            'links': '#0071e3',
                            'sierra': '#a7c1d9',
                            'silver': '#f1f2ed',
                            'gold': '#fae7cf',
                            'graphite': '#54524f'
                     },
              },
       },
       variants: {
              extend: {},
       },
       plugins: [],
}