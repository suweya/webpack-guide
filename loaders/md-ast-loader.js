const loaderUtil = require("loader-utils");
const MDParser = require("./MDParser");

module.exports = function (content) {
  this.cacheable && this.cacheable();

  const options = loaderUtil.getOptions(this);

  try {
    return new MDParser(content).data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
