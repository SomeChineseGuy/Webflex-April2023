const fs = require('fs');

console.log('Top of file');

fs.readFile('./data1.txt', 'utf8', (err, data) => {
  if(err) {
    throw err;
  }
  console.log('data', data);
  fs.readFile('./data2.txt', 'utf8', (err, data) => {
    if(err) {
      throw err;
    }
    console.log('data', data);
      fs.readFile('./data3.txt', 'utf8', (err, data) => {
        if(err) {
        throw err;
      }
      console.log('data', data);
      fs.readFile('./data999999.txt', 'utf8', (err, data) => {
          if(err) {
          throw err;
        }
        console.log('data', data);
        fs.readFile('./data999999.txt', 'utf8', (err, data) => {
            if(err) {
            throw err;
          }
          console.log('data', data);
          fs.readFile('./data999999.txt', 'utf8', (err, data) => {
              if(err) {
              throw err;
            }
            console.log('data', data);
          });
        });
      });
    });
  });

});



console.log('Bottom Of file');