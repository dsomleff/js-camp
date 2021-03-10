const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        edit: './src/edit.js'
    },
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, 'public/scripts'),
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use : {
                loader: "babel-loader",
                options: {
                     presets: [
                        ["@babel/preset-env", {
                            useBuiltIns: "entry", // or "entry"
                            corejs: 3,
                        }]
                    ]
                }
            }
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/scripts/'
    },
    devtool: "source-map"
};
