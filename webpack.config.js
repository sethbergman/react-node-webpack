var Path = require('path');
var Webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var NODE_MODULES_DIR = Path.join(__dirname, 'node_modules');

var config = {
  addPlugin: function (plugin) {
    this.plugins.push(plugin);
  },
  cache: true,
  context: __dirname,
  entry: {
    app: [Path.resolve(__dirname, 'src/client/scripts/app.jsx')],
    vendors: ['react', 'react-router', 'classnames', 'object-assign']
  },
  output: {
    path: Path.join(__dirname, 'build', 'scripts'),
    publicPath: 'scripts/',
    filename: 'app.js'
  },
  module: {
    preLoaders: [
      {test: /\.jsx$/, exclude: [NODE_MODULES_DIR], loader: "eslint-loader"},
      {test: /\.js$/, exclude: [NODE_MODULES_DIR], loader: "eslint-loader"}
    ],
    loaders: [
      { test: /\.jsx$/, exclude: [NODE_MODULES_DIR], loader: 'jsx-loader' },
      { test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") }
    ]
  },
  plugins: [],

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

config.addPlugin(new Webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'));
config.addPlugin(new ExtractTextPlugin("style.css", { allChunks: true }));

module.exports = config;
