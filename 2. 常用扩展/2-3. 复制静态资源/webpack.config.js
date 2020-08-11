const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');
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
        }),
        new CopyPlugin([
            { from: "./public", to: "./" }, // 复制规则
            {} // 复制规则
        ])
    ]
}

// 那会不会CopyPlugin和HtmlWebpackPlugin冲突呢，因为拷贝过来的东西有html，其实CopyPlugin已经考虑到这个问题了，它会在识别到目录中已经有某个文件的时候就不进行拷贝了