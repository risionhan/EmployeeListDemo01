var path = require('path');
module.exports = {
    entry: './app/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: [{
                loader: "style-loader"  // creates style nodes from JS strings
            }, {
                loader: "css-loader"    // translates CSS into CommonJS
            }, {
                loader: "less-loader"   // compiles Less to CSS
            }]
        }]
    }
};
