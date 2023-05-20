const { returnPromise, returnRejectedPromise } = require('./promise-generator');

const delay = () => Math.floor(Math.random() * 3000)

const foodOrder1 = returnPromise('Burger', delay());
const foodOrder2 = returnPromise('Cheese Burger', delay());
const foodOrder3 = returnPromise('Fried Chicken', delay());
const foodOrder4 = returnPromise('Bacon sandwich', delay());
const foodOrder5 = returnRejectedPromise('Salad', delay());

const promiseArr = [foodOrder1, foodOrder2, foodOrder3, foodOrder4, foodOrder5];

Promise.race(promiseArr)
  .then((data) => {
    console.log(data);
  })
  .catch((err) =>{
    console.log(err);
  })