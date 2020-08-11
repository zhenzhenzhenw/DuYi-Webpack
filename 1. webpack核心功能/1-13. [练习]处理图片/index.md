静态图片（img元素处理图片，用js生成的静态图片）

动态图片（通过ajax请求返回的图片地址）

> 上一节课把css通过loader当成js处理，要不然直接“require css”是解析不了的（打包会报错），图片也是，不管什么后缀名，webpack都是当成js处理的。

hash（总资源hash） chunkhash（每一个chunk的hash） contenthash（每一个小模块的hash）

webpack可以读图片，但是是按照js的方式读取的。我们通过loader给返回js，module.exports 啥啥啥之类的。