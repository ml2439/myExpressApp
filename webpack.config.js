const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development",
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  },
  // This is for express
  externals: [nodeExternals()],
  node: {
    __dirname: false,
    __filename: false
  }
};
