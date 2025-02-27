// foreach

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// let ans = arr.forEach((element, index)=>{
//    return element

// })
// console.log( ans);

//map
// let ans = arr.map((element, index) => {
//   return element;
// });
// console.log(typeof ans);

//filter

// let output = arr
//   .filter((el, i) => {
//     return el;
//   })
//   .map((el) => {
//     return el * 2;
//   })
//   .reduce((acc, el) => {
//     return acc + el;
//   });
// console.log(output);

//reduce
// let ans  = arr.reduce((a,el,i,arr)=>{
//     return a+el
// },3)
// console.log(ans);

// let arr1 = [2, 4, 6,21, 54, 12, 5,3 ]

// let ans = arr1.sort((a,b)=>{
//     return b-a
// })
// console.log(ans);

let data = [
  {
    name: "Laptop",
    price: 1200.99,
    desc: "A high-performance laptop with a 15-inch screen, ideal for gaming and professional work.",
    rating: 4.7,
  },
  {
    name: "Smartphone",
    price: 799.49,
    desc: "A flagship smartphone with a 6.5-inch display, 128GB storage, and excellent camera features.",
    rating: 4.5,
  },
  {
    name: "Wireless Headphones",
    price: 199.99,
    desc: "Noise-canceling wireless headphones with 30 hours of battery life and superior sound quality.",
    rating: 4.8,
  },
  {
    name: "Smartwatch",
    price: 299.99,
    desc: "A fitness tracking smartwatch with heart rate monitoring, GPS, and sleep tracking features.",
    rating: 4.4,
  },
  {
    name: "Tablet",
    price: 499.99,
    desc: "A versatile 10-inch tablet with a fast processor and support for drawing and note-taking.",
    rating: 4.6,
  },
];

console.log(data[0]);
 data.sort((a, b) => {
  return a.price - b.price;
});

console.log(data);
