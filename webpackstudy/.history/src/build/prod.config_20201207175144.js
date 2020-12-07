const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')

module.exports = {
    plugins:[
        new UglifyJsPlugin()
     
    ]
}