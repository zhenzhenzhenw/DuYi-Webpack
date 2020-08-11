var loaderUtils = require("loader-utils")

module.exports = function(sourceCode){
    //sourceCode : 变量 a = 1;
    console.log("test-loader运行了")
    var options = loaderUtils.getOptions(this)
    console.log(options)
    var reg = new RegExp(options.changeVar, "g");
    return sourceCode.replace(reg, "var");

    // 在打包的时候就会输出上面的东西，this的东西就是webpack里面的一个上下文，保存了很多信息，可以通过loader-utils这个库去获取loader中配置的option
}