const express = require('express');
const app = express();
const PORT = 3000;
const morgan = require('morgan');
const bodyParser = require('body-parser');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}))
app.set('view engine', 'ejs');

// Cheese Burger
// Fries
// Dr. Pepper

// Chicken Nuggets
// Onion Rings
// Ice Tea

// 3 Piece Chicken
// Mac and Cheese
// Coke

const foodMenu = {
  1: {
    main: "Cheese Burger",
    side: "Fries",
    drink: "Dr. Pepper"
  }, 
  2: {
    main: "Chicken Nuggets",
    side: "Onion Rings",
    drink: "Ice Tea"
  }, 
  3: {
    main: "3 Piece Chicken",
    side: "Mac and Cheese",
    drink: "Coke"
  }
}

let key = 4;

// Browse see all the menu items
app.get('/', (req, res) => {
  const templateVars = {
    foodMenu: foodMenu
  }
  console.log('someone has connected');
  res.render('homepage', templateVars);
});


// Add New Combo items
app.get('/combos/new', (req, res) => {
  res.render('new');
});

// Add Post
app.post('/combos/new', (req, res) => {
  console.log(req.body)
  // const main = req.body.main
  // const side = req.body.side
  // const drink = req.body.drink
  const { main, side, drink } = req.body;
  foodMenu[key] = {
    main,
    side,
    drink
  }
  key++
  res.redirect('/')
});

// Update
app.post('/combos/edit/:id', (req, res) => {
  const { main, side, drink } = req.body;
  const userInput = req.params.id
  foodMenu[userInput] = {
    main,
    side,
    drink
  }
  res.redirect('/');
});

// Delete
app.post('/combos/:id/delete', (req, res) => {
  const userInput = req.params.id;
  delete foodMenu[userInput];
  res.redirect('/');
})


// Read See single items
// route === /combo/1 
// route === /combo/2
// route === /combo/3
app.get('/combos/:id', (req, res) => {
  const userInput = req.params.id;
  if(foodMenu[userInput]) {
    const combo = foodMenu[userInput];
    const templateVars = {
      combo
    }
    return res.render('combo', templateVars)
  }
  res.send(`You don't have the right combo`);
});

app.listen(PORT, () => {
  console.log('The server has started!');
});