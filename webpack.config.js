var path = require('path'),
    UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        app: [ './src/js/app' ]
    },
    output: {
        path: path.resolve(__dirname, './dist/js/'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['env', {
                            modules: false,
                            "targets": {
                                "browsers": ["last 2 versions", "> 5%"]
                            }
                        }]
                    ]
                }
            }
        }]
    },
    plugins: [
        new UglifyJSPlugin()
    ]
};