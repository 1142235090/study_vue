
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

// const app = new Vue({
//     el:'#app',
//     data:{
//         message:'Hello WebPack!'
//     }
// })

//富文本编辑器
import E from 'wangeditor'
const editor = new E('#wangeditor')
// 配置 onchange 回调函数
editor.config.onchange = function (newHtml) {
    console.log('change 之后最新的 html', newHtml)
}
// 配置触发 onchange 的时间频率，默认为 200ms
editor.config.onchangeTimeout = 500 // 修改为 500ms
editor.create()




var banner = new Vue({
    el: "#banner",
    data() {
        return {
            list: [
                { imgUrl: './src/img/t1.png' },
                { imgUrl: './src/img/t2.png' },
                { imgUrl: './src/img/t3.png' },
                { imgUrl: './src/img/t4.png' },
                { imgUrl: './src/img/t5.png' }
            ],
            pressList: [{ name: '1', isShow: false }, { name: '2', isShow: false }, { name: '3', isShow: false }, { name: '4', isShow: false }, { name: '5', isShow: false }],
            numList: ['p0', 'p1', 'p2', 'p3', 'p4'],
            imgIndex: 0,
            imgTimer: null,
            btnShow: false
        }
    },
    mounted: function() {
        var Item = document.getElementsByClassName('item');
        for(var i = 0; i < Item.length; i++) {
            Item[i].className = 'item ' + this.numList[i]
        }
        this.imgMove()
        this.pressList[0].isShow = true
    },
    methods: {

        imgMove() {
            var Item = document.getElementsByClassName('item');
            this.imgTimer = setInterval(() => {
                this.numList.push(this.numList[0]);
                this.numList.shift()
                this.imgIndex++;
                for(var i = 0; i < Item.length; i++) {
                    Item[i].className = 'item ' + this.numList[i];
                }
                for(var i in this.pressList) {
                    this.pressList[i].isShow = false
                }
                if(this.imgIndex > 4) {
                    this.imgIndex = 0
                    this.pressList[this.imgIndex].isShow = true;
                } else {
                    this.pressList[this.imgIndex].isShow = true;
                }
            }, 15000)
        },
        btnOpen() {
            this.btnShow = true;
            clearInterval(this.imgTimer)
        },
        btnHide() {
            this.btnShow = false;
            this.imgMove()
        },
        leftClick() {
            var Item = document.getElementsByClassName('item');
            this.numList.unshift(this.numList[4]);
            this.numList.pop()
            for(var i = 0; i < Item.length; i++) {
                Item[i].className = 'item ' + this.numList[i];
            }
            for(var i in this.pressList) {
                this.pressList[i].isShow = false
            }
            this.imgIndex--
                if(this.imgIndex < 0) {
                    this.imgIndex = 4
                    this.pressList[this.imgIndex].isShow = true;
                } else {
                    this.pressList[this.imgIndex].isShow = true;
                }
        },
        rightClick() {
            var Item = document.getElementsByClassName('item');
            this.numList.push(this.numList[0]);
            this.numList.shift()
            for(var i = 0; i < Item.length; i++) {
                Item[i].className = 'item ' + this.numList[i];
            }
            for(var i in this.pressList) {
                this.pressList[i].isShow = false
            }
            this.imgIndex++
            if(this.imgIndex > 4) {
                this.imgIndex = 0
                this.pressList[this.imgIndex].isShow = true;
            } else {
                this.pressList[this.imgIndex].isShow = true;
            }
        }
    }
})

