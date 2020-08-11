var loaderUtil = require("loader-utils")

function loader(buffer) { // 给的是buffer
    console.log("文件数据大小：(字节)", buffer.byteLength);
    var { limit = 1000, filename = "[contenthash].[ext]" } = loaderUtil.getOptions(this);
    if (buffer.byteLength >= limit) {
        // 生成文件
        var content = getFilePath.call(this, buffer, filename);
    }
    else{
        var content = getBase64(buffer)
    }
    return `module.exports = \`${content}\``;
}

loader.raw = true; // 该loader要处理的是原始数据，不加该属性的的话，loader拿到的就是字符串，加了的话就是二进制（buffer）

module.exports = loader;

function getBase64(buffer) { // buffer转成base64
    return "data:image/png;base64," + buffer.toString("base64");
}

function getFilePath(buffer, name) {
    // 按照某一种规则生成一个名字interpolateName，第一个参数（上下文），
    var filename = loaderUtil.interpolateName(this, name, {
        content: buffer
    });
    // 往最终的文件列表中加入一个资源（文件名，文件内容二进制）
    this.emitFile(filename, buffer);
    return filename;
}