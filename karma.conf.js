const webpackPlugins = require('./webpack-plugins');
const webpackLoaders = require('./webpack-loaders');

module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		plugins: [
			'karma-jasmine',
			'karma-webpack',
			'karma-phantomjs-launcher',
			'karma-spec-reporter'
		],
		files: [
			'src/index.spec.ts'
		],
		preprocessors: {
			'src/index.spec.ts': ['webpack']
		},
		webpack: {
			resolve: {
				extensions: ['.ts', '.js']
			},
			module: {
				loaders: webpackLoaders
			},
			plugins: webpackPlugins,
			debug: true
		},
		reporters: ['spec'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_DEBUG, //LOG_INFO,
		autoWatch: false,
		browsers: ['PhantomJS'],
		singleRun: true,
		concurrency: Infinity
	});
}
