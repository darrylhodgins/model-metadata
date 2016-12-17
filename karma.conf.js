module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine', 'karma-typescript'],
		plugins: [
			'karma-jasmine',
			'karma-typescript',
			'karma-firefox-launcher',
			'karma-spec-reporter'
		],
		files: [
			{
				pattern: './node_modules/reflect-metadata/Reflect.js'
			},
			{
				pattern: './src/**/*.ts'
			}
		],
		exclude: [],
		preprocessors: {
			"**/*.ts": ["karma-typescript"]
		},
		reporters: ['spec', 'karma-typescript'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: false,
		browsers: ['Firefox'],
		captureTimeout: 300000,
		browserDisconnectTimeout: 10000,
		singleRun: true,
		concurrency: Infinity
	});
}
