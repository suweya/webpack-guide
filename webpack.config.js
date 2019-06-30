const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "./src/index.js")
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "[name].[contenthash].js"
  },
  plugins: [
    new htmlWebpackPlugin({ template: "./index.html" })
    // new webpack.HashedModuleIdsPlugin()
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    },
    runtimeChunk: "single"
  }
};
