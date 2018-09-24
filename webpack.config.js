const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const PnpWebpackPlugin = require(`pnp-webpack-plugin`);
const WebpackAnalyzerPlugin = require(`webpack-bundle-analyzer`).BundleAnalyzerPlugin;

module.exports = {

    mode: `production`,

    entry: {
        [`app`]: `./sources/index.js`,
    },

    output: {
        filename: `[name].js`,
    },


    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {},
        }]
    },

    resolve: {
        plugins: [
            PnpWebpackPlugin,
        ]
    },

    resolveLoader: {
        plugins: [
            PnpWebpackPlugin.moduleLoader(module),
        ]
    },

    plugins: [
        new HtmlWebpackPlugin(),
//      new WebpackAnalyzerPlugin(),
    ]

};
