const express = require('express');
const app = express();

//view engine
app.set('view engine', 'ejs');

//renderz
app.get('/', (req, res) => {
  res.render('index')
});

//localhost:3000
app.listen(3000);
console.log('Blogi avattu osoitteeseen localhost:3000');