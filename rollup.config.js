const postcss = require('rollup-plugin-postcss');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    input: 'src/index.css',
    output: {
        file: '_assets/bundle.css'
    },
    plugins: [
        postcss({
            plugins: [
                require('postcss-import'),
                require('tailwindcss'),
                require('autoprefixer'),
                // Include cssnano only in production
                ...isProduction ? [require('cssnano')({preset: 'default'})] : [],
            ],
            extract: true,
        }),
    ],
};
