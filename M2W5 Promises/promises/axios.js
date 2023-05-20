const axios = require('axios');

axios.get('https://catfact.ninja/fact')
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  })

  // try {
  //   const res = await axios.get('https://catfact.ninja/fact');
  //   console.log(res.data);
  // } catch(err) {
  //   console.log(err);
  // }