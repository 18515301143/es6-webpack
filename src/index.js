import _ from 'lodash';
import './style.css';
import printMe from './print.js';
// import "@babel/polyfill";
printMe()
let a = new Promise(function(resolve, reject){
  resolve(5)
  console.log(1)
})
a.then(function(data){
  console.log(data)
})
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
let rectAngle = new Rectangle
setTimeout(()=>{
  console.log('箭头函数测试beble')
},1000)
