const nodeExternals = require("webpack-node-externals");
const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: "development",
  entry: "./src/server/index.js",
  output: {
    filename: "server.js",
    clean: true,
  },
  target: "node",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".jsx"],
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
