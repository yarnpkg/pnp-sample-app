const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const WebpackAnalyzerPlugin = require(`webpack-bundle-analyzer`).BundleAnalyzerPlugin;
const PnpWebpackPlugin = require(`./scripts/webpack-resolver`);

module.exports = {

    mode: `development`,

    entry: {
        [`app`]: `./sources/index.js`,
    },

    output: {
        filename: `[name].js`,
    },

    devtool: false,

    optimization: {
        sideEffects: true,
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: require.resolve('babel-loader'),
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
            PnpWebpackPlugin,
        ]
    },

    plugins: [
        new HtmlWebpackPlugin(),
//      new WebpackAnalyzerPlugin(),
    ]

};
