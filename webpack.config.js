const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist/',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: "babel-loader",
                include: [
                    path.resolve(__dirname, 'node_modules/plume2'),
                ],
                exclude: [/node_modules/, /public/],
                query: {
                    presets: ['es2015','react']
                  },
            },      
            {
                test: /\.js/,
                include: [
                path.resolve(__dirname, './src'),
                path.resolve(__dirname, './node_modules/plume2/dist')
                ],
                loader: 'babel-loader?cacheDirectory'
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: {
                index: 'index.html',
            },
        })
    ]
}