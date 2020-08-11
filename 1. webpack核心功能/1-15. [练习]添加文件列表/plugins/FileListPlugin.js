// 插件 
// 在生成了文件列表到输出的过程中，拿到文件列表的记录对象assert，往assert数组里面push多一个对象，对象有两个属性content和size，就可以多生成一个文件了。

module.exports = class FileListPlugin {

    constructor(filename = "filelist.txt"){
        this.filename = filename;
    }

    apply(compiler) {
        // emit 当文件列表已经有了 只是没有输出
        compiler.hooks.emit.tap("FileListPlugin", complation => {
            var fileList = [];
            console.log('complation.assets',complation.assets) // 一些资源

            for (const key in complation.assets) {
                var content = `【${key}】
大小：${complation.assets[key].size()/1000}KB`;
                fileList.push(content);
            }

            var str = fileList.join("\n\n");
            // 添加资源
            complation.assets[this.filename] = {
                source() {
                    return str
                },
                size() {
                    return str.length;
                }
            }
        })
    }
}