// ********1**********
// let x = "5";
// let y = 5;
// console.log(x == y);  // True because double equal check only value
// console.log(x === y); // False because triple equl check value and type of variable
// ********2**********
// Write a function to get the longest word length
// function longestWord(words) {
//     let longWord = ""
//     for (let i = 0; i < words.length; i++) {
//        if (words[i].length>longWord.length) {
//         longWord = words[i]
//        }
//     }
//     return longWord
// }

// const words = ["JavaScript", "Programming", "Function", "Hoisting"];
// console.log(longestWord(words));

// ********3**********
// function testScope() {
//     if (true) {
//         var a = 10;
//         let b = 20;
//         const c = 30;
//     }
//     console.log(a); // Logs 10 because 'a' is function scoped
//     console.log(b); // Error: 'b' is not defined because 'b' is block scoped
//     console.log(c); // Error: 'c' is not defined because 'c' is block scoped
// }

// testScope();

// *********4*******
// const name = "John";
// function greet() {
//   if (true) {
//     var message = "Hello " + name;
//   }
//   console.log(message);
// }
// greet();
// *********5*******
// const multiply = (a, b) => {
//     return a * b;
//    }
// ***********************6*****************
// const obj = {
//   name: "Alice",
//   sayHello: function () {
//     setTimeout(() => {
//       console.log("Hello, " + this.name);
//     }, 1000);
//   },
// };
// obj.sayHello();
// Output would be a Hello Alice 
// ***********************7*****************
console.log(a);
var a = 10;
console.log(b);
let b = 20;