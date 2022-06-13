const classNames = require('classnames');

const section = (content, cssClass, title) => {
  return `<section class=${classNames(
    cssClass,
    'content'
  )}><h3>${title}</h3><div class="container">${content}</div></section>`;
};

const forms = (formType) => {
  return `<form id="${formType}-form"><h4>${formType}</h4><ul><li><label for="input_field">value:</label><input type="text" id="${formType}" name="enter_${formType}"></li><li><button type="submit">submit</button></li></ul></form>`;
};

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/style.css');
  eleventyConfig.addPassthroughCopy('src/main.js');
  eleventyConfig.addPairedShortcode('section', section);
  eleventyConfig.addShortcode('form', forms);

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
