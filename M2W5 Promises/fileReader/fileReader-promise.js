const fs = require('fs').promises;

fs.readFile('./data1.txt', 'utf8').then((data) => {
  console.log(data);
  return fs.readFile('./data2.txt', 'utf8') // pending
}).then(data => {
  console.log(data);
  return fs.readFile('./data3.txt', 'utf8')
}).then(data => {
  console.log(data);
}).catch(err => {
  throw err;
})