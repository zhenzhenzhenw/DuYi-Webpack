const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.pcss$/, use: ["style-loader", "css-loader?modules", "postcss-loader"]
            }
        ]
    },
    devServer: {
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}

// 下载 postcss-loader 和 postcss
// 和less一样 ，不用下载命令行