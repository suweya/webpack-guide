const marked = require("marked");
const loaderUtils = require("loader-utils");

module.exports = function (content) {
  this.cacheable && this.cacheable();

  const options = loaderUtils.getOptions(this);
  try {
    console.log("Content : ", content);
    console.log("Options : ", options);
    marked.setOptions(options);
    const result = marked(content);
    console.log("RESULT : ", result);
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};
