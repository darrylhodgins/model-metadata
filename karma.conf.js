module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		plugins: [
			'karma-jasmine',
			'karma-phantomjs-launcher',
			'karma-spec-reporter'
		],
		files: [
			'./src/**/*.spec.ts'
		],
		exclude: [],
		preprocessors: {},
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
