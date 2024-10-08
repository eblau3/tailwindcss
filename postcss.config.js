const postcssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const tailwindcssNesting = require('tailwindcss/nesting');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssPxtorem = require('postcss-pxtorem');

module.exports = {
  plugins: [
    postcssImport(),
    tailwindcss(),
    tailwindcssNesting(),
    autoprefixer(),
    cssnano({preset: 'default'}),
    postcssPxtorem()
  ],
};