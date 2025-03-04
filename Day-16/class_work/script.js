// setTimeout, setInterval, setImmediate......... macrotask
//Promise, queMicrotask......... microtask

// let name = "synchronous";

// console.log(name);
// let surName = "Code";

// console.log(surName);

// setTimeout(() => {
//   console.log("Synchronously syncing....");
// }, 2000);

// setTimeout(() => {
//   console.log("Synchronously syncing....1");
// });
// queueMicrotask(() => console.log("Microtask syncing..."));

// for (var i = 0; i < 5; i++) {
//   console.log(i);

//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
//   console.log(i);

// }

// console.log(name, surName);

// let myPromise = new Promise((resolve, reject)=>{
//     let flag = true
//     if (flag) {
//         resolve("Prromise resolve")
//     }else{
//         reject("Promise reject")
//     }
// })

// console.log(myPromise);

async function fetchData() {
  let data = await fetch("https://fakestoreapi.com/products");

  let ans = await  data.json()
  console.log(ans);
}
fetchData();
