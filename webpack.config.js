const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: {
        index: "./src/main.js"
    },
    output: {
        filename: "[name].bundle.js",
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
            template: "index.html",
            filename: "index.html",
            chunks: ["index"],
            inject: "body",
        })

    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'build')
        },
        compress: true,
        port: 9000
    },
    optimization: {
        minimize: true,
        minimizer: [new CssMinimizerPlugin()],
    },

}