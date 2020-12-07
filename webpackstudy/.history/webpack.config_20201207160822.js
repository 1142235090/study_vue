const path = require('path')//引入nodejs中的path

module.exports = {
    //导入入口，提供者
    entry: './src/js/main.js',
    //导入出口，输出位置
    output:{
        path:path.resolve(__dirname,'dist'),//node默认使用当前路径
        filename:'bundledefault.js'
    },
    module: {
        rules: [
            {
            test: /\.css$/,
            //配置文件读取是从右往左读取，一定要先加载css文件再去渲染不然会失效
            //还有要注意package.json中的版本，版本不一致也会出现打包错误
            use: [ "style-loader" ,'css-loader' ]
            },
            //css预编译
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            //图片使用
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        //当加载的图片小于limit大小的时候会将图片编译成base64字符串的形式
                        limit: 100000
                    }
                }]
                },
            {
                //ES6转化为ES5
                test: /\.js$/,
                //排除这些文件
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['es2015']
                    }
                }
            },{
                test:/\.vue$/,
                use:['vue-loader']
            }
        ]
    },
    resolve:{
        alias: {
            'vue$':'vue/dist/vue.esm.js'
        }
    }
}