const webpackMerge = require('webpack-merge')
const baseConfig = require("./base.config")
module.exports = webpackMerge(baseConfig,{
    devServer:{
        contentBase:'./dist',//发布哪个目录
        port:4567,//端口
        inline:true//是否实行监听
    }
})
