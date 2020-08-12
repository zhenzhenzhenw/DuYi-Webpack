
// 就是通过less-loader来把less文件解析成css然后再使用css插件出理

// 要下载less-loader和less两个包，less-loader里面需要使用到less这个包
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    devServer: {
        open: true
    },
    module: {
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.less$/, use: ["style-loader", "css-loader?modules", "less-loader"] },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}