const merge = require("webpack-merge");
const webpackBase = require("./webpack.config.base");

module.exports = merge.smart(webpackBase, {
  mode: "development",
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    // compress: true,
    port: 9000,
  },
});
