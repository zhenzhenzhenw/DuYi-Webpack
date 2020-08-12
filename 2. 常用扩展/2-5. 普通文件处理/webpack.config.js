const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    devtool: "source-map",
    output: {
        filename: "scripts/[name].[chunkhash:5].js"
    },
    module: {
        rules: [
            {
                test: /\.(png)|(gif)|(jpg)$/,
                use: [{
                    loader: "url-loader", // webpack会require（“url-loader”）
                    options: {
                        // limit: false //不限制任何大小，所有经过loader的文件进行base64编码返回
                        limit: 10 * 1024, //只要文件不超过 100*1024 字节，则使用base64编码，否则，交给file-loader进行处理
                        name: "imgs/[name].[hash:5].[ext]" // 这里的hash和webpack之前学的hash不一样，这是由loader去决定的哦！
                    
                        // url-loader内部是使用file-loader的，这里可以写file-loader的配置，会传过去给他的

                        // 为什么小文件要用base64 小文件生成图片的的话到时候还要当成文件去发起网络请求。
                        
                    }
                }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ],
    devServer: {
        open: true
    },
    stats: {
        modules: false,
        colors: true
    }
}