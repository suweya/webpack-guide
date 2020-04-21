const fs = require("fs");
const path = require("path");
const { runLoaders } = require("loader-runner");

runLoaders(
  {
    resource: "./Readme.md",
    loaders: [path.resolve(__dirname, "./loaders/md-loader")],
    readResource: fs.readFile.bind(fs),
  },
  (err, result) => {
    return err ? console.error(err) : console.log(result);
  }
);
