const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: "development",
    devtool: "source-map",
    output: {
        filename: "scripts/[name].[chunkhash:5].js"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ],
    devServer: {
        port: 8000,
        open: true, // 自动在浏览器打开
        // index: 在浏览器打开的时候默认打开哪个文件
        proxy: { //代理规则
            "/api": {
                target: "http://open.duyiedu.com",
                changeOrigin: true // 更改请求头中的host和origin,否则请求头中还是的host和origin还是localhost:8000
            }
        }
    },
    stats: {
        modules: false,
        colors: true
    }
}