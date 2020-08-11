module.exports = class MyPlugin {
    apply(compiler) {
        console.log('插件运行了') // 编译的时候会执行apply方法
        //在这里注册事件，类似于window.onload  $(function(){})
        // ‘"MyPlugin-done"随便填写 ，方便调试而已
        compiler.hooks.done.tap("MyPlugin-done", function(compilation){
            //事件处理函数
            console.log("编译完成");
            // 拿到compilation之后可以在这里注册compilation钩子
        })


    }
}