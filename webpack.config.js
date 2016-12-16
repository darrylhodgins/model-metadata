const webpackPlugins = require('./webpack-plugins');
const webpackLoaders = require('./webpack-loaders');

module.exports = {
	context: __dirname + '/src',
	entry: './model-metadata',
	output: {
		path: __dirname + '/dist-webpack',
		filename: 'model-metadata.js',
		library: 'model-metadata',
		libraryTarget: 'umd'
	},
	resolve: {
		extensions: ['.ts', '.js']
	},
	module: {
		loaders: webpackLoaders
	},
	plugins: webpackPlugins
}
