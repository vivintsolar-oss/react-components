const path = require('path');

module.exports = {
  entry: './src',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, './'),
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        include: path.join(__dirname, './src'),
        query: {
          presets: [ 'react' ],
        },
      },
    ],
  },
  resolve: {
    extensions: [ '.js' ],
  },
};
