const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },

 plugins: [
  new CleanWebpackPlugin({
       verbose: true
    }),
    new HtmlWebpackPlugin({
      title: 'Cocktail',
      template: './src/index.html',
      inject: 'body'
    }), 
],

module: {
  rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
}
}
