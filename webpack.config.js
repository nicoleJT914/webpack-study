var path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};

var webpack = require('webpack');

var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
  entry: './dist/bundle.js',
  output: {
    filename: 'bundle-min.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}