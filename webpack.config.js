const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "./src/index.js"),
    another: path.resolve(__dirname, "./src/another-module.js")
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [new htmlWebpackPlugin({ template: "./index.html" })],
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
};
