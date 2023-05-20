const checkForTrue = (value) => {
  // if(value) {
  //   console.log('This is correct');
  // } else if()  {
  //   console.log('This is incorrect');
  // } else {

  // }
  // 3 parts
  value ? console.log('This is correct') : console.log('This is incorrect');
  const newValue = value ? 'New value True!' : 'New value False!';
  console.log(newValue);

  // Do not do this!
  value ? console.log('This is correct') : value ? console.log('another') : console.log('Another false');
}

checkForTrue(true);
checkForTrue(false);