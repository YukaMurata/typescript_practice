const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: [path.resolve(__dirname, 'js/index.ts')]
  },
  output: {
    path: path.resolve(__dirname, '../js'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts']
  }
};
