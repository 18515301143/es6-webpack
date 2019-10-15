const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
      app: ['babel-polyfill','./src/index.js']
    },
  mode:"development",
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
     publicPath: '/'
  },
  devtool: 'inline-source-map',// 开发环境使用 ，报错可指到具体代码
  module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
       {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader'
         ]
       }
     ]
   },
   devServer: {
     contentBase: './dist',
     hot: true,
     hotOnly: true
   },
   plugins: [
     new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({
       template: 'index.html'
     }),

     new webpack.HotModuleReplacementPlugin()
   ]
};
