const { returnPromise, returnRejectedPromise } = require('./promise-generator');

const newPromise = returnPromise('This is a new promise', 1000);

newPromise
  .then((data) => {
    console.log(data);
    return returnPromise('This is the second promise', 1000)
  })
  .then((data) => {
    console.log(data);
    return returnRejectedPromise('This is AN ERRORR!!!!', 1000)
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log('This is an error for everything AFTER the first line in the chain.');
    console.log(err);
  })
