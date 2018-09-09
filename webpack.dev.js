const path = require("path");
const merge = require("webpack-merge");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map", // any "source-map"-like devtool is possible
  devServer: {
    // contentBase: './dist',
    contentBase: "./src/templates/",
    watchContentBase: true,
    hot: true
  }
});
