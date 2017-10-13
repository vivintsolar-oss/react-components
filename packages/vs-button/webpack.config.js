const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, './'),
  },
  module: {
    rules: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        include: path.join(__dirname, './src'),
        query: {
          presets: [ 'es2015', 'react' ],
        },
      },
    ],
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ],
  resolve: {
    extensions: [ '.js' ],
  },
};
