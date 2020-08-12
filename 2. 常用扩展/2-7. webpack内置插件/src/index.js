// console.log(PI);
// console.log(VERSION);
// console.log(DOMAIN);
// 打包完成之后js是这样的：
// console.log(Math.PI);
// console.log(1.0.0);

var r1 = $('#item'); // <= 起作用
var r2 = _.drop([1, 2, 3], 2); // <= 起作用
console.log(r1, r2);

// 打包出来之后就是函数里面是有一个立即执行函数，参数就是导入jquery，不造成变量污染