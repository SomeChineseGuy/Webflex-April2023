

// const obj = {
//   username: 'alvin',
//   num: 20,
//   isSleepy: true,
// }

// const { num, username, isSleepy } = obj;

// console.log(num);
// console.log(username);

const { returnPromise } = require('./promise-generator');

const newPromise = returnPromise('Does this work?', 3000);
console.log(newPromise);



// setTimeout(() => {
//   console.log(newPromise);
// }, 5001);

// setInterval(() => {
//   console.log(newPromise);
// }, 500)

newPromise
  .then((res) => {
    console.log(res);
    return {
      str: `${res}, are we here?`
    }
  })
  .then(() => {
    
    return 'Joe'
  })
  .then((res) => {
    console.log(res);
  })

