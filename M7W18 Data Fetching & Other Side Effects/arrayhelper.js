// map - Creates a new array based on the callback you give it, [1,2,3] => n + 2 === 3,4,5

// filter - Filter out the array based on the callback you give it, [1,2,3] n !== 1 [2,3]

// reduce - this will reduce the array down to one value. [1,2,3] add up all the numbers in an array .reduce((acc, n) => { acc + n}, 0)


const arr = [1, 2, 3, 4, 5];

// includes(1) checks to see if the array has the given value
console.log(arr.includes(2));
console.log(arr.includes(10));

if(arr.includes(1)) {
  // do something
} else {
  // do something else
}

const arr2 = [1,2,3,4,5];
const findArr = arr2.find(num => {
  if(num % 2 === 0) {
    return num
  }
})

console.log(findArr);

// When you get data
const arr3 = [
  {
    username: "alvin",
    num: 10
  },
  {
    username: "Nirakone",
    num: 20
  },
  {
    username: "Frederik",
    num: 30
  }
]

const nira = arr3.find((item) => {
  if(item.username === "Nirakone") {
    return item
  }
})

console.log(nira);