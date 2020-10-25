const path = require('path');
const webpack = require('webpack');
// process.env.NODE_ENV = 'production';

module.exports = {
    name: 'tictactoe-setting',
    mode: 'development', // 실서비스 : production
    devtool: 'eval', // hidden-source-map
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: {
        app: ['./client'],
    }, // 입력

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 5% in KR'],
                        },
                        debug: true,
                    }], 
                    '@babel/preset-react',
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-hot-loader/babel'
                ]
            }
        }],
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true }),
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist/'
    }, // 출력
};