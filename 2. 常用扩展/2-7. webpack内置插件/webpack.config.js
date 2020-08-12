const webpack = require("webpack")

module.exports = {
    mode: "development",
    devtool: "source-map",
    plugins: [
        new webpack.DefinePlugin({
            // **字符串的值就是属性的值，因为要求属性值是字符串类型**
            // 抽象语法树分析的时候，找到属性值，就把它替换成属性字符串的值
            PI: `Math.PI`, // const PI = Math.PI
            VERSION: `"1.0.0"`, // VERSION = "1.0.0" 一种写法
            DOMAIN: JSON.stringify("duyi.com")  // DOMAIN = "duyi.com" 二种写法
        }),
        new webpack.BannerPlugin({
            banner: `
            hash:[hash]
            chunkhash:[chunkhash]
            name:[name]
            author:yuanjin
            corporation:duyi
            `
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            _: 'lodash'
        })
    ]
}