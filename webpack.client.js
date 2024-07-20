const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.js");

/** @type {import('webpack').Configuration} */
const clientConfig = {
  mode: "development",
  entry: "./src/client/index.js",
  output: {
    filename: "js/bundle.[hash:5].js",
    path: path.resolve(__dirname, "public"),
    clean: {
      keep: "favicon.ico",
    },
  },
};

module.exports = merge(baseConfig, clientConfig);
