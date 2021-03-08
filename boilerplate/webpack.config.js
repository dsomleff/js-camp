const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
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
                        ['@babel/preset-env', { targets: "defaults" }]
                    ]
                }
            }
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/scripts/'
    }
};
