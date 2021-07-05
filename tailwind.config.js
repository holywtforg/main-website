module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#2D46BE',
                secondary: '#7075CE',
                tertiary: '#FFB61D',
                quaternary: '#E6E8F7',
                'flaky-green': '#00ECB6'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
