const nodeExternals = require("webpack-node-externals");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.js");

/** @type {import('webpack').Configuration} */
const serverConfig = {
  target: "node",
  entry: "./src/server/index.js",
  output: {
    filename: "server.js",
    clean: true,
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
module.exports = merge(baseConfig, serverConfig);
