const { returnPromise, returnRejectedPromise } = require('./promise-generator');

const foodOrder1 = returnPromise('Burger', 1000);
const foodOrder2 = returnPromise('Cheese Burger', 1200);
const foodOrder3 = returnPromise('Fried Chicken', 3000);
const foodOrder4 = returnPromise('Bacon sandwich', 2000);
const foodOrder5 = returnRejectedPromise('Salad', 2000);

const promiseArr = [foodOrder1, foodOrder2, foodOrder3, foodOrder4, foodOrder5];

Promise.all(promiseArr)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })

// foodOrder1
//   .then((data) => {
//     console.log(data);
//     return foodOrder2
//   })
//   .then((data) => {
//     console.log(data);
//     return foodOrder3
//   })
//   .then((data) => {
//     console.log(data);
//     return foodOrder4
//   })