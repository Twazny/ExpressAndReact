const path = require('path');
module.exports = {
    entry: './client/src/index.js',
    mode: 'development',
    output: {
        filename: 'app-bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    resolve: {
        extensions: ['.Webpack.js', '.web.js', '.ts', '.js', '.jsx', '.tsx','.css']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader'],
            }
        ]
    }
}