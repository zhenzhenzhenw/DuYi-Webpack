const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    devtool: "source-map",
    output: {
        filename: "scripts/[name].[chunkhash:5].js",
        publicPath: "/" // 公共路径，打包后 __webpack_require__.p = "/"; 就放这，谁爱用谁就用
        // 可以在我们的index.js文件中测试输出：_webpack_require_publicPath
        // 插件中，loader中也会去使用这个值，例如HtmlWebpackPlugin 会把这个publicPath拼接到前面
        // 一般会使用“/”，斜钢开头的就是绝对路径，没有/开头就是相对路径
        // 这里publicPath可能会影响所有的loader和plugin
    },
    module: {
        rules: [
            {
                test: /\.(png)|(gif)|(jpg)$/,
                use: [{
                    loader: "file-loader", 
                    options: {
                        name: "imgs/[name].[hash:5].[ext]",
                        publicPath: '/' // 这里的publicPath是只会影响它自己的这个插件的，和webpack无关，用来处理当我们插件之间publicPath不同的时候的场景
                     // 有些插件会有这个这个，有些没有
                    }
                }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "html/index.html"
        })
    ],
    devServer: {
        open: true,
        openPage: "html/index.html",
    },
    stats: {
        modules: false,
        colors: true
    }
}