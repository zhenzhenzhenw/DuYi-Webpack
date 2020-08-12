const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            {
                // test: /\.css$/, use: ["style-loader", {
                //     loader: "css-loader",
                //     options: {
                //         // modules: {
                //         //     localIdentName: "[local]-[hash:5]"
                //         // } [name]文件名 [local]类名
                //         modules:true
                //     }
                // }]
                test: /\.css$/, use:["style-loader", "css-loader?modules"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ],
    devServer: {
        open: true
    }
}