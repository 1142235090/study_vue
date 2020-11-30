
//第一种方式 module.exports引用
// const{add,mul} = require('./mathUtils')
// console.log(add(20,30));
// console.log(mul(20,30));

//第二种方式 export
import {name,age,height} from "./mathUtils"
console.log(name);
console.log(age);
console.log(height);