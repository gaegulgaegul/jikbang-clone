const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    // 빌드 모드 설정
    mode: 'development',
    // 빌드 대상 파일
    entry: {
        index: "./src/main.js"
    },
    // 빌드 후 생성 파일 정보
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "build"),
        publicPath: "/",
        clean: true,
    },
    // 모듈 설정 정보
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    // 플러그인 설정 정보
    plugins: [
        // build 폴더 안의 파일 삭제 설정
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanOnceBeforeBuildPatterns: [
                '**/*',
                // build 폴더 안의 모든 것을 지우도록 설정
                path.resolve(process.cwd(), 'build/**/*')
            ]
        }),
        // 빌드 후 스크립트 정보를 추가할 대상 html
        new HtmlWebpackPlugin({
            template: "index.html",
            filename: "index.html",
            chunks: ["index"],
            inject: "body",
        })

    ],
    // 개발 서버 설정 정보 추가
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