// // const arr = [1,2,3,4,5,6];
// // // [11,12,13,14,15,16]

// // const addTen = (arr) => {
// //   const newArr = [];
// //   for(let num of arr) {
// //     const newNum = num += 10
// //     newArr.push(newNum)
// //   }
// //   return newArr;
// // }

// // for(let num of arr) {}
// // for(let num in arr) {}
// // for(let i =0; i < arr.length; i++){}

// // addTen(arr)

// // // creates a new instances of an array that follows whatever the return callback is


// // console.log(newArr);

// // const arr = [1,2,3,4,5,6];
// // // [11,12,13,14,15,16]

// // const arr = [1,2,3,4,5,6];

// // const newArr = arr.filter((num) => {
// //   if(num % 2 === 0) {
// //     return num;
// //   }
// // });

// // const newArr = arr.map((num) => {
// //   return num + 10
// // })

// // console.log(arr);
// // console.log(newArr);

// // we call it reduce because this array helper is going to reduce everything down to ONE value
// const arr = [1,2,3,4,5,6];

// // let startingNum = 0;
// // for(let num of arr) {
// //   // startingNum += num;
// //   console.log(startingNum);
// //   console.log(num);
// // }

// // console.log(startingNum);

// const results = arr.reduce((startingNum, num) => {
//   // console.log("startingNum", startingNum);
//   // console.log("num", num);
//   startingNum += num
//   return startingNum

// }, 0)

// const str = "Hello from LighthouseLabs";
// // {H: 1, e: 2, l: 2, o: 2, f: 1.....}

// const letterCounter = (str) => {
  
//   const letterArr = str.split('')
//   let obj = {}
//   for(let letter of letterArr){
//     obj[letter] ? obj[letter] += 1 : obj[letter] = 1;
//   }
//   return obj
// }

// const letterCounter2 = (str) => {
//   const letterArr = str.split('')
//   const newObj = letterArr.reduce((obj, letter) => {
//     console.log(obj);
//     console.log(letter);
//     obj[letter] ? obj[letter] += 1 : obj[letter] = 1;
//     return obj
//   }, {});
//   console.log(newObj);
// }

// console.log(letterCounter2(str));


const obj = {
  username: "Alvin",
  number: 3
}

const obj2 = {
  ...obj,
  // username: "Alvin",
  // number: 3
  username: "Joe"
};


const demo = {
  username: "Joe",
  username: "Ryan"
}

console.log(obj);
console.log(obj2);