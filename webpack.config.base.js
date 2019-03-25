const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require("fs");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const babelrc = JSON.parse(fs.readFileSync("./.babelrc"));

module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: {
          loader: "babel-loader",
          options: babelrc,
        },
      },
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new MiniCssExtractPlugin({ filename: "index.bundle.css" }),
  ],
};
