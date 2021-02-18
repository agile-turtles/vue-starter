const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// Environment flags
const IS_DEV = process.env.NODE_ENV === 'development'
const IS_PROD = process.env.NODE_ENV === 'production'

// If its dev mode simply use style loader to inject the CSS in the DOM in <style> blocks
const activeCssLoader = IS_DEV
  ? 'vue-style-loader'
  : MiniCssExtractPlugin.loader

const app = path.join(__dirname, './client/index.js')
const baseConfig = {
  stats: { children: false }, // Disable the verbose output on build
  target: IS_DEV ? 'web' : 'browserslist', // Fixes HMR, remove after this has been merged: https://github.com/webpack/webpack-dev-server/pull/2761
  performance: { hints: false },
  entry: { 'app-bundle': [app] },
  mode: process.env.NODE_ENV,
  output: {
    path: path.join(__dirname, 'public'),
    filename: IS_DEV ? 'js/[name].js' : 'js/[name].[chunkhash].js',
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.runtime.js',
      components: path.join(__dirname, './client/components'),
      assets: path.join(__dirname, './client/assets'),
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({ template: './client/assets/index.html' }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /(node_modules)/, use: 'babel-loader' },
      { test: /\.vue$/, exclude: /(node_modules)/, use: 'vue-loader' },
      { test: /\.css$/, use: [activeCssLoader, 'css-loader'] },
      {
        test: /\.styl(us)?$/,
        use: [
          { loader: activeCssLoader },
          { loader: 'css-loader', options: { esModule: false } },
          { loader: 'postcss-loader' },
          { loader: 'stylus-loader' },
        ],
      },
      {
        test: /\.scss/,
        use: [
          { loader: activeCssLoader },
          { loader: 'css-loader', options: { esModule: false } },
          { loader: 'postcss-loader' },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              publicPath: '/public/',
              limit: 4000, // Convert images < 4kb to base64 strings
              name: 'images/[name].[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              publicPath: '/public/',
              name: 'fonts/[name].[hash].[ext]',
              limit: 4000, // Convert fonts < 4kb to base64 strings
            },
          },
        ],
      },
    ],
  },
}

let config = {}

// Development
if (IS_DEV) {
  config = {
    ...baseConfig,
    devServer: {
      compress: true, // enable gzip for development server
      port: 8000,
    },
  }
}

// Production
if (IS_PROD) {
  config = {
    ...baseConfig,
    plugins: [
      ...baseConfig.plugins,
      new MiniCssExtractPlugin({ filename: 'styles/[name].[contenthash].css' }),
    ],
    optimization: {
      minimizer: [new TerserPlugin()],
      minimize: true,
      splitChunks: {
        minSize: 100000,
        cacheGroups: {
          vendor: { chunks: 'initial', test: /[\\/]node_modules[\\/]/ },
        },
      },
    },
  }
}

module.exports = config
