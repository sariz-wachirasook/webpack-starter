const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  // entry
  entry: {
    script: ['./assets/js/index.js'],
    import: ['./assets/js/structure/import.js'],
  },

  // output dist, build
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'build'),
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.min.css',
    }),
  ],

  resolve: {
    alias: {
      jquery: 'jquery/src/jquery',
    },
  },

  stats: {
    errorDetails: true,
    children: true,
  },
};
