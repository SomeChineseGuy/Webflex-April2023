const bcrypt = require('bcryptjs');
const plainTextPassword = 'aa';

// const salt = bcrypt.genSaltSync(10);
// const hashed = bcrypt.hashSync(plainTextPassword, salt)
// console.log(salt);
// console.log(hashed);


const arr = [];

for(let i = 0; i < 50; i++) {
  const salt = bcrypt.genSaltSync();
  const hashed = bcrypt.hashSync(plainTextPassword, salt);
  console.log(hashed);
  arr.push(hashed)
}

// console.log(arr);

// const checkPassword = bcrypt.compareSync(plainTextPassword, arr[36]);

// console.log(checkPassword);

console.log(bcrypt.compareSync(plainTextPassword, arr[36]));
console.log(bcrypt.compareSync(plainTextPassword, arr[1]));
console.log(bcrypt.compareSync(plainTextPassword, arr[12]));
console.log(bcrypt.compareSync(plainTextPassword, arr[33]));
console.log(bcrypt.compareSync(plainTextPassword, arr[26]));
console.log(bcrypt.compareSync(plainTextPassword, arr[19]));
console.log(bcrypt.compareSync(plainTextPassword, arr[20]));
console.log(bcrypt.compareSync(plainTextPassword, arr[36]));
console.log(bcrypt.compareSync(plainTextPassword, arr[18]));
console.log(bcrypt.compareSync(plainTextPassword, arr[3]));
console.log(bcrypt.compareSync(plainTextPassword, arr[2]));
console.log(bcrypt.compareSync(plainTextPassword, arr[5]));
console.log(bcrypt.compareSync(plainTextPassword, arr[9]));