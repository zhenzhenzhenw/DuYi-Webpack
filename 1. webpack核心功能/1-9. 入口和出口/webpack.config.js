var path = require("path")

module.exports = {
    mode: "development",
    // 入口配置的也是一个对象，也可以是直接传一个字符串，配置的是chunk，
    entry: {
        // main: "./src/index.js", //属性名：chunk的名称【默认是main】， 属性值：入口模块（启动模块）
        // a: "./src/a.js" // 启动模块有两个

        a: ["./src/a.js", "./src/index.js"] //启动模块有两个，不影响任何，还是一个表格 一个bundle，只是分析的模块更广了
    },
    output: {
        // 【因为是在node环境执行的，可以使用path的模块】
        // 【不可以写死，操作系统 和 工程文件移动】
        path: path.resolve(__dirname, "target"), //必须配置一个绝对路径，表示资源放置的文件夹，默认是dist
        // 【这里这么多资源，配置的是哪个文件的文件名？】【合并模块化后的js文件 && map文件，由chunk生成。】
        filename: "[id].[chunkhash:5].js" // 配置的合并的js文件的规则，不care map的文件名，可以配置，但是filename只专门配置模块化后的js文件
        // 静态写法 bundle.js
        // “/” 可以指定子文件夹 “script/bundle.js”
        // 动态写法【当有多个chunk入口的时候，出口文件名就不能用静态写发了，会报错】
        // 规则： 
    
    },
    devtool: "source-map"
}