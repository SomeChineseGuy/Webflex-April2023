// const myName = 'name';
// const num = 10;

// console.log(myName + ', hello name!');
// console.log(num + 20);

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

// addTwoNumbers(2, 4)

// addTwoNumbers(2, 4)

const commandLineArguements = process.argv;
// console.log(process);
console.log(commandLineArguements);

const slice = commandLineArguements.slice(2);

console.log(slice)

function arrSum(arr) {
  let num = 0;
  for(let i = 0; i < arr.length; i ++) {
    num += Number(arr[i])
  }
  console.log(num)
}

arrSum(slice)