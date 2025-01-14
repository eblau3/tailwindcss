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
    postcssPxtorem({
      rootValue: 16,
      propList: ['*'],
      unitPrecision: 4,
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
    })
  ],
};