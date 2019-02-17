const path = require('path');
const webpack = require('webpack');

module.exports = {
	outputDir: path.resolve(__dirname, '../server/public/'),
	devServer: {
		proxy: {
			'/': {
				target: 'http://localhost:5000'
			}
		}
	},
	configureWebpack: {
		plugins: [
			new webpack.ProvidePlugin({
				mapboxgl: 'mapbox-gl',
				$: 'jquery',
				jquery: 'jquery',
				'window.jQuery': 'jquery',
				jQuery: 'jquery'
			})
		]
	}
};
