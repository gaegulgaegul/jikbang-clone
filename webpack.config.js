const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: "./src/main.js",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "build"),
        publicPath: "/",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanOnceBeforeBuildPatterns: [
                '**/*',
                // build 폴더 안의 모든 것을 지우도록 설정
                path.resolve(process.cwd(), 'build/**/*')
            ]
        }),
        new HtmlWebpackPlugin({
            // index.html 템플릿을 기반으로 빌드 결과물을 추가해준다.
            template: 'index.html',
        })
    ],
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'build')
        },
        compress:true,
        port: 3000
    }
}