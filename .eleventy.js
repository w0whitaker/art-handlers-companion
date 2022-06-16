const classNames = require('classnames');

const section = (content, sectionId, title) => {
  return `
  <section id="${sectionId}" class="content">
  <h3>${title}</h3>
  ${content}
  </section>
  `;
};

const forms = (formType) => {
  return `
  <form id="${formType}-form">
  <h4>${formType}</h4>
    <div class="container">
      <label for="${formType}">value:</label>
      <input type="text" inputmode="numeric" id="${formType}" name="enter_${formType}">
      <button type="submit">submit</button>
      <button type="submit">reset</button>
    </div>
  </form>
  `;
};

module.exports = function (eleventyConfig) {
  let markdownIt = require('markdown-it');
  let markdownItDefList = require('markdown-it-deflist');
  let markdownItTaskLists = require('markdown-it-task-lists');
  let options = {
    html: true,
    breaks: false,
    linkify: true,
  };
  let markdownLib = markdownIt(options)
    .use(markdownItDefList)
    .use(markdownItTaskLists);

  eleventyConfig.addWatchTarget('./src/sass/');
  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addPassthroughCopy('src/main.js');
  eleventyConfig.addPairedShortcode('section', section);
  eleventyConfig.addShortcode('form', forms);
  eleventyConfig.setLibrary('md', markdownLib);

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
