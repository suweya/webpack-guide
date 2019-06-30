const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  entry: {
    app: "./src/index.js",
    print: "./src/print.js",
    publicPath: "/"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./index.html",
      title: "Output Management"
    }),
    new CleanWebpackPlugin(),
    new ManifestPlugin()
  ]
};
