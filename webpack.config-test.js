var nodeExternals = require('webpack-node-externals');
var webpack = require('webpack');

module.exports = {
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: nodeExternals(),
  mode: 'development', 
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: { 
          plugins: ['rewire'] 
        } 
      }
    ]
  },
  plugins: [
  ],
  devtool: 'inline-source-map'
};
