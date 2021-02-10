const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const webpackNodeExternals = require("webpack-node-externals");

const clientNodeModulesDirectory = path.join(
  __dirname,
  "../client/",
  "node_modules"
);

module.exports = {
  target: "node",
  mode: "development",
  entry: "./index.js",
  resolve: {
    alias: {
      react: path.join(clientNodeModulesDirectory, "react"),
      "react-dom": path.join(clientNodeModulesDirectory, "react-dom"),
      "react-redux": path.join(clientNodeModulesDirectory, "react-redux"),
    },
  },
  output: {
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { targets: { node: "current" } }],
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      { test: /\.css$/, use: "ignore-loader" },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
