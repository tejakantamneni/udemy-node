
const express = require('express');
const hbs     = require('hbs');

var app = express();

//setup handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
  res.render('main.hbs', {
    pageTitle: 'Weather App',
    pageHeading: 'Weather Predictions'
  });
});

app.listen(3000, () => {
  console.log("weather app running...")
});
