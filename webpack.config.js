const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const devMode = process.env.NODE_ENV !== 'production';

const config = {
	mode: 'production',
	entry: {
		main: './libraries/index.js',
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'herta-scripts'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
				  loader: 'babel-loader',
				  options: {
					presets: ['@babel/preset-env']
				  }
				}
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
				  {
					loader: MiniCssExtractPlugin.loader,
					options: {
					  hmr: process.env.NODE_ENV === 'development',
					},
				  },
				  'css-loader',
				  'postcss-loader',
				  'sass-loader',
				],
			}
		]
	},
	devServer: {
		contentBase: 'http://herta-security.local/',
	},
	plugins: [
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional 
			// filename: devMode ? '[name].css' : '[name].[hash].css',
			// chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
			filename: "./css/style-comp.css"
		}),
	]
};
module.exports = config;

/* 
    "core-js": "^3.6.4",
    "save-dev": "0.0.1-security",
    "ajv": "^6.11.0",
    "browser-sync": "^2.26.7",
    "browser-sync-webpack-plugin": "^2.2.2",
    "browserslist": "^4.8.3",
    "extract-text-webpack-plugin": "^3.0.2",
    "optimize-css-assets-webpack-plugin": "^5.0.3",
    "uglify-js": "^3.7.5",
    "uglifyjs-webpack-plugin": "^2.2.0" */