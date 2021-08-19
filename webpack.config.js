'use strict';

const ENVIRONMENT = process.env.NODE_ENV;
const webpack = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");

const path = require('path');
const autoprefixer = require('autoprefixer');

const postCSSLoader = {
	loader: 'postcss-loader',
	options: {
		sourceMap: true,
		plugins() {
			return [
				autoprefixer({
					browsers: ['last 3 versions']
				})
			];
		}
	}
};

const config = {
	devtool: 'source-map',

	stats: {
		colors: true,
		reasons: true
	},

	entry: {
		bundle: [`${__dirname}/src/root.jsx`]
	},

	target: 'web',

	output: {
		libraryTarget: 'commonjs',
		path: `${__dirname}/dist/`,
		filename: '[name].js',
		chunkFilename: '[id].js',
		publicPath: '/dist/'
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(ENVIRONMENT)
			}
		}),
		new webpack.DefinePlugin({
			'global.GENTLY': false
		}),
		new webpack.NoEmitOnErrorsPlugin(),
	],

	resolve: {
		modules: ['node_modules', 'src'],
		extensions: ['.js', '.jsx'],
		alias: {
			img: path.resolve(__dirname, './img')
		}
	},

	module: {
		rules: [
			{
        // test: /\.s[ac]ss$/i, 
				test: /\.(s(a|c)ss)$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.json$/,
				exclude: /node_modules/,
				use: 'json'
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: 'file-loader?limit=100000'
			},
			{
				test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				use: 'file-loader?name=fonts/[name].[ext]'
			}
		]
	}
};

if (ENVIRONMENT === 'development') {
	// add modules for hot reloading
	config.entry.bundle.unshift('webpack-hot-middleware/client');
	config.entry.bundle.unshift('webpack/hot/dev-server');
	config.plugins.push(new webpack.HotModuleReplacementPlugin());

} else {
	/**
	 * PRODUCTION!
	 */

	const options = {
		sourceMap: true,
		comments: false,
		minimize: true,
		compress: {
			drop_console: true
		},
		minimizer: [new TerserPlugin()]
	};

}
module.exports = config;
