var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: [
    './src/index.js',
  ],
  mode: 'production',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'redux-oidc.js',
    libraryTarget: 'umd'
  },
  externals: nodeExternals(),
  module: { 
    rules: [ 
      { 
        test: /\.js$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/ 
      } 
    ] 
  }, 
  plugins: [
  ]
};
