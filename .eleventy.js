const classNames = require('classnames');

const section = (content, className, title) => {
  return `<section class=${classNames(
    className,
    'content'
  )}><h3>${title}</h3><div class="container">${content}</div></section>`;
};

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/style.css');
  eleventyConfig.addPassthroughCopy('src/main.js');
  eleventyConfig.addPairedShortcode('section', section);

  // Set custom directories for input, output, includes, and data
  return {
    // When a passthrough file is modified, rebuild the pages:
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      includes: '_includes',
      layouts: '_layouts',
      data: '_data',
      output: '_site',
    },
  };
};
