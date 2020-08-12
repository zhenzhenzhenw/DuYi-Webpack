//希望导入的模块结果是一个可用的资源路径，webpack会分析，读出来是乱码，无法做语法分析。
import png from "./assets/webpack.png"
console.log(png)
var img = document.createElement("img");
img.src = png;
document.body.appendChild(img);

// 可以看看生成的js是如何处理图片模块的，大致是如下的原理：

function loader(source) {
  // 1. source:文件内容（图片内容buffer）
  // 2. 返回一段代码 export default 文件名
}