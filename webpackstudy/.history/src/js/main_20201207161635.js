
//第一种方式 module.exports引用
// const{add,mul} = require('./mathUtils')
// console.log(add(20,30));
// console.log(mul(20,30));

// //第二种方式 export
// import {name,age,height} from "./mathUtils"
// console.log(name);
// console.log(age);
// console.log(height);

// //css文件依赖
// require("../css/normal.css")

// //依赖less文件
// require("../css/special.less")

//使用vue进行开发
import Vue from 'vue'
import message from '../vue/message'

const app = new Vue({
    el:'#app',
    template:
    '<message/>',
    components:{
        message
    }
})



