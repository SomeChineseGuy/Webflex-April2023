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


// This function will sum up all numbers in an arr but not include neg numbers and only supports whole numbers also doesn't accpet one because we want something something
function arrSum(arr) {
  let num = 0;
  for(let i = 0; i < arr.length; i ++) {
    if(arr[i] % 1 === 0 && arr[i] > 0) {
      num += Number(arr[i])
    }
  }
  // console.log(num)
  return num
}

console.log(arrSum(slice))