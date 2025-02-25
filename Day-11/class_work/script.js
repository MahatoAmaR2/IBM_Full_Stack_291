// let obj = {
//   name: "Amar ",
//   class: "B Tech",
//   myFunction: ()=> {
//     // console.log(this.name);
//     console.log("I am a method inside object");
//   },
//   subjects: ["DBMS", "CN", "NM", "AI"],
//   newObj: {
//     1: 80,
//     nestedFunction: function () {
//       console.log(this);
//       console.log("I am a nested function");
//     },
//   },
// };

// obj.myFunction();
// obj.newObj.nestedFunction();

// let num = 9;

// if (num % 3 == 0 && num % 5 == 0) {
//   console.log("FizzBuzz");
// } else if (num % 5 == 0) {
//   console.log("Buzz");
// } else if (num % 3 == 0) {
//   console.log("Fizz");
// } else {
//   console.log("wrong number");
// }

// let num =5
// // let str= "Shanti"
// for (let i = 0; i <num; i++) {
//     console.log(i);
    
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// for (const num of arr) {
//     console.log(num);
    
// }

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]
for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2==0) {
        console.log("even",arr[i]);
        
    }else{
        console.log("odd",arr[i]);
        
    }
    
}