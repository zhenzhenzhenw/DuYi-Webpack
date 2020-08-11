module.exports = {
    mode: "development",
    // 对模块要进行怎么的解析，要经过哪些loader，就写在module里面，是一个对象，只有两个选项rules和noParse
    module: {
        // 判断当前模块是否满足某个规则
        rules: [
            {
                test: /index\.js$/, //正则表达式，匹配模块的路径
                // Loaders can be chained by passing multiple loaders, which will be applied from right to left (last to first configured).
                // 从后往前使用loader
                // 每个加载器都是一个对象，可以简写成一个字符串
                // use: ["./loaders/loader1", "./loaders/loader2"], //匹配到了之后，使用哪些加载器
                use: [{
                    loader: "./loaders/test-loader?changeVar=未知数",
                    // options: {
                    //     changeVar: '未知数'
                    // }
                }]
                // 传递参数可以通过?changeVar=未知数也可以通过options配置项目

            }, //规则1
            {
                test: /\.js$/, //正则表达式，匹配模块的路径
                use: ["./loaders/loader3", "./loaders/loader4"] //匹配到了之后，使用哪些加载器，这些会被遍历然后被require，所以不写./开头的话就会去node_modules去找
            } //规则2
        ], //模块的匹配规则
        // noParse: {}
    }
}


// rules 从下往上匹配 ，然后use也是从后往左。
