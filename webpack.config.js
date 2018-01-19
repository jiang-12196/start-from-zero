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
                exclude: [/node_modules/, /public/],
                query: {
                    presets: ['es2015','react']
                  },
            }
        ]
    }
}