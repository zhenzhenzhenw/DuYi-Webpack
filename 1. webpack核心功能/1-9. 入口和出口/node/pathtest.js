//该对象提供了大量路径处理的函数

var path = require("path") //导出了一个对象
// 【node对于没有./的文件，先去内置模块找，没有再去node_modules找】

var result = path.resolve("./", "child", "abc", "123");
// ./ 取决于你在什么目录下运行这个文件
/**
 * zengwenzhendeMacBook-Pro:1-9. 入口和出口$ node ./node/pathtest.js
  输出/Users/zengwenzhen/Desktop/study-demo/webpack - yuan/DuYi-Webpack/1. webpack核心功能/1-9. 入口和出口/child/abc/123
 * 
 * zengwenzhendeMacBook-Pro:node zengwenzhen$ node pathtest.js
/Users/zengwenzhen/Desktop/study-demo/webpack - yuan/DuYi-Webpack/1. webpack核心功能/1-9. 入口和出口/node/child/abc/123
 * **/
// 【path.resolve 用来组装绝对路径，而且这个绝对路径是跨平台的，适应不同的操作系统生成左斜钢或者右斜钢】


// 但是有些时候我不依赖环境，和环境无关。可以用下面的方式
var result1 = path.resolve(__dirname, "src");
console.log(result1);
