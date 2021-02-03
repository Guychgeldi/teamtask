const tailwindcss = require('tailwindcss');
process.env.NODE_ENV = "production";
const purgecss = require("@fullhuman/postcss-purgecss")({
  enabled: true,
  content: [
      './public/**/*.html',
      './src/**/*.js',
      './src/**/*.jsx',
    ],
  defaultExtractor: content => {
      // Capture as liberally as possible, including things like `h-(screen-1.5)`
      const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

      // Capture classes within other delimiters like .block(class="w-1/2") in Pug
      const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

      return broadMatches.concat(innerMatches)
    }
});

module.exports = {
  plugins: [
    require('postcss-import'),
    tailwindcss('./tailwind.config.js'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === "production"
    ? [purgecss, require("cssnano")]
    : []),
  ]
}
