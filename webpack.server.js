const nodeExternals = require("webpack-node-externals");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
/** @type {import('webpack').Configuration} */
const serverConfig = {
  target: "node",
  entry: "./src/server/index.js",
  output: {
    filename: "server.js",
    clean: true,
  },
  externals: [nodeExternals()],
  plugins: [new MiniCssExtractPlugin({ filename: "css/bundle.[hash:5].css" })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: /\.module\.css$/i,
                localIdentName: "[name]__[local]--[hash:base64:5]",
                namedExport: false,
                mode: "local",
              },
              esModule: true,
            },
          },
        ],
      },
    ],
  },
};
module.exports = merge(baseConfig, serverConfig);
