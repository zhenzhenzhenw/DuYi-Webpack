var src = require("./assets/webpack.png")
console.log(src); // 图片没有导出，loader也没有导出的话，那么就是空对象（commonjs默认导出空对象）
var img = document.createElement("img")
img.src = src;
document.body.appendChild(img);

// function A() {
//   this.a = '1'
//   console.log('==',this)
//   b()
// }
// const ab = new A()

// function b() {
//   console.log(this)
//   // 只能输出全部的global
// }