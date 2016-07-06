var webpack = require('webpack');

module.exports = function (config) {
  // This is the default webpack config defined in the `../webpack.config.js`
  // modify as you need.
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
  loaders: [
  	'style?sourceMap',
    'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
  ]
};
