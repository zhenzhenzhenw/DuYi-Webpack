var path = require("path")
module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: {
        index: "./src/index.js" // 这种是相对执行路径的，就是执行命令的时候，所以会变化
    },
    // 写了context的话就是相对context的目录

    //
    module:
    {
        rules: [],
        loaders: []
    },

    resolve: {
        // 控制模块解析过程
        modules: ["node_modules"], // 当我们引入的模块不是./ ｜｜ ../开头的时候,去node_modules找，这个是默认的。
        extensions: {

        },
        alias: {

        }
    },

    // externals: {
    //     jquery: "$",
    //     lodash: "_"
    // },
    stats: {
        colors: true, // 控制台的输出带上颜色了
        modules: false, // 添加构建模块信息，哪些模块被构建了，被打包了
        hash: false,
        builtAt: false
    }
}