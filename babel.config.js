module.exports = {
	plugins: [
		'@babel/proposal-class-properties',
		'@babel/proposal-object-rest-spread',
	],
	presets: [
		[
			'@babel/env', {
				// modules: false,
				targets: {
					node: 'current',
				},
			},
		],
		'@babel/typescript',
	],
};
