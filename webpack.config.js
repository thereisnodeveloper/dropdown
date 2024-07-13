const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  devServer: { static: "./dist" },
  output: { filename: "main.js", path: path.resolve(__dirname, "dist") },
//   optimization: { runtimeChunk: "single" },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.tml",
    }),
  ],
};
