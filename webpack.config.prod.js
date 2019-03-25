const path = require("path");
const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpackBase = require("./webpack.config.base");

module.exports = merge.smart(webpackBase, {
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.bundle.js",
  },
  mode: "production",
  plugins: [new CleanWebpackPlugin()],
});
