//公共配置
const path = require("path")
// const CleanWebpackPlugin = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
module.exports = {
    entry: {
        list: "./src/list/index.js",
        detail: "./src/detail/index.js"
    },
    output: {
        filename: "scripts/[name].[chunkhash:5].js"
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    },
    stats: {
        modules: false, // 不打印模块的打包
        colors: true
    },
    plugins: [
        // new CleanWebpackPlugin(),开发环境下面不会打包到dist，因此不需要清空
        new HtmlWebpackPlugin({
            template: "./public/list.html",
            filename: "list.html",
            chunks: ["list"]
        }),
        new HtmlWebpackPlugin({
            template: "./public/detail.html",
            filename: "detail.html",
            chunks: ["detail"]
        }),
        new CopyWebpackPlugin([
            { from: './public', to: './' }
        ])
    ]
}