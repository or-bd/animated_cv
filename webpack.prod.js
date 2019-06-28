const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

const BUILD_DIR = resolve(__dirname, 'public');
const APP_DIR = resolve(__dirname, 'src');

module.exports = {
  entry: `${APP_DIR}/index.js`,
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: APP_DIR,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
            }],
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
              options: {
                minimize: true,
                discardComments: {
                  removeAll: true,
                },
              },
            }],
        }),
      },
      {
        test: /\.(mp3|png|jpg|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'media/[name].[ext]',
              publicPath: '/',
            },
          },
        ],
      },
      {
        type: 'javascript/auto',
        test: /\.(txt|xml|json)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
              publicPath: '/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new TerserPlugin({
      sourceMap: true,
      parallel: true,
      terserOptions: {
        output: {
          comments: false,
        },
      },
    }),
    new ExtractTextPlugin({
      filename: 'css/style.css',
    }),
    new HtmlWebpackPlugin({
      template: `${APP_DIR}/index.html`,
      filename: `${BUILD_DIR}/index.html`,
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: false,
      },
    }),
    new webpack.DefinePlugin({
      ENVIRONMENT: JSON.stringify('PROD'),
    }),
    new ServiceWorkerWebpackPlugin({
      entry: `${APP_DIR}/sw.js`,
    }),
  ],
  devtool: 'source-map',
  mode: 'production',
};
