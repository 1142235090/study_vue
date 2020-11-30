const path = require('path')//引入nodejs中的path

module.exports = {
    //导入入口，提供者
    entry: './src/main.js',
    //导入出口，输出位置
    output:{
        path:path.resolve(__dirname,'dist'),//node默认使用当前路径
        filename:'bundledefault.js'
    }
}