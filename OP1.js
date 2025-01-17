// // var x = 0;
// // function foo() {
// // x++;
// // if (x > 3) {
// // clearTimeout(timerId);
// // }
// // }
// // var timerId = setTimeout(function() {
// // console.log('Hello');
// // }, 1000);
// // setInterval(foo, 1000);
// // function myFunction(x, y) {
// //     const arr = Array.prototype.slice.call(arguments);
// //     return arr.length;
// //     }

// //     console.log(myFunction(5))

// // let str = 'hello';
// // let newStr = str.replace('l', 'L');
// // console.log(newStr);

// // var x = 0;
// // function foo() {
// // x++;
// // console.log(x);
// // }
// // var timerId = setInterval(foo, 1000);
// // setTimeout(function() {
// // clearInterval(timerId);
// // }, 5000);

// // const obj = {
// //     a: 1,
// //     b: 2
// //     };
// //     const arr = [];
// //     console.log(arr[0] = { ...obj });


// // console.log(5&9)

// let x = 5;
// x += 2;

// let person = {
//     name: "John",
//     age: 30,
//     get fullName() {
//     return `${this.name} Smith`;
//     },
//     set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//     }
//     };
//     person.fullName = "Jane Doe";
//     console.log(person.name);

//     let str = 'hello';
// let newStr = str.replace('l', 'L');
// console.log(newStr);

function a(){

}
console.log(typeof(a))

// const a = [1, 2, 3];
// const b = a.reduce((acc, x) => acc.concat([x * x]), []);
// console.log(b);

// var tensquared = (function(x) {
//     return x * x;
//     }(10));

//     console.log(tensquared)

// function getAge() {
//     'use strict';
//     age = 21;
//     console.log(age);
//     }
//     getAge();

// let myString = "hello world";
// let [a, b, c, d, e, f, g, h, i, j, k] = myString;
// console.log(k);

// let a = 10;
// let b = 20;
// [a, b] = [b, a];
// console.log(a, b);

// var arr = [1, 2, 3];
// var result = arr.push(4);
// console.log(result);

// let max;
// const numberArray = [3, 5, 2];
// numberArray.forEach((element) => {
// if (max < element) {
// max = element;
// }
// });
// console.log(max);

// const {
//     name: myName
//     } = {
//     name: 'Lydia'
//     };
//     console.log(name);

// const myFunc = ({
//     x,
//     y,
//     z
//     }) => {
//     console.log(x, y, z);
//     };
//     myFunc(1, 2, 3);

// console.log([1, 2, 3].map(num => {
//     if (typeof num === 'number') return;
//     return num * 2;
//     }));

const a = [1, 2, 3];
const b = a.reduce((acc, x) => acc.concat([x, x]), []);
console.log(b);