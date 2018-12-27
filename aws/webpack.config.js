const path = require('path');
const slsw = require('serverless-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: slsw.lib.webpack.isLocal ? 'development': 'production',
	entry: slsw.lib.entries,
	target: 'node',
	// devtool: 'source-map',
	module: {
		exprContextCritical: false,
		rules: [
			{
				test: /\.js$/,
				loaders: ['babel-loader'],
				include: __dirname,
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new CopyWebpackPlugin([
			'config/**'
		])
	],
	output: {
		libraryTarget: 'commonjs',
		path: path.join(__dirname, '.webpack'),
		filename: '[name].js'
	},
	externals: ['aws-sdk']
};
