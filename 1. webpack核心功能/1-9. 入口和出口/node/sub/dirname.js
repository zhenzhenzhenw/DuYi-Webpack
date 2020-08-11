/*

./ : 
1. 模块化代码中，比如require("./")，表示当前js文件所在的目录
2. 在路径处理中，"./"表示node运行目录

（在a/b/c 目录下运行 node /xx/yyy/index.js）那么index.js文件中的./ 代表的是a/b/c

__dirname: 所有情况下，都表示当前运行的js文件所在的目录，它是一个绝对路径

*/

console.log(__dirname)