// @flow
const webpack = require('webpack')

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './app/index.js',
  ],
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    contentBase: './public',
    hot: true,
  }
}
