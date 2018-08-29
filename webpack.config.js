const CleanWebpackPlugin = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: "./src/app.js"
  },
  output: {
    filename: "assets/bundle.js"
  },
  mode: "production",
  devServer: {
    contentBase: path.join(__dirname, "src"),
    compress: true,
    port: 9000
  },
  watch: false,
  plugins: [
    new CleanWebpackPlugin("dist", {}),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "./assets/style.css"
    }),
    new Dotenv({
      path: "./src/.env",
      systemvars: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: "json-loader"
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { url: false, sourceMap: true } }
        ]
      }
    ]
  }
};
