const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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

module.exports = merge(baseConfig, clientConfig);
