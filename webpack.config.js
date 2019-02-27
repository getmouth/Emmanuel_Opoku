const path = require('path');
const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  mode: 'development',
  context: path.join(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    contentBase: 'public',
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png|jpeg|gif)$/,
        loader: 'file-loader',
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      API_URL: JSON.stringify(process.env.API_URL),
    }),
  ],
};
