const obj = {
  username: "Alvin",
  num: 30,
}

const obj2 = {
  // username: "Alvin",
  // num: 30
  ...obj,
  num: obj2.num + 10 
};

// obj2.num = 50;

console.log(obj);
console.log(obj2);