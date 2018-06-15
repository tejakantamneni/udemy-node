
const express = require('express');
const hbs = require('hbs');

var app = express();
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('home.hbs', {
		pageTitle: 'Home',
		currentYear: new Date().getFullYear(),
		pageContent: 'Home content'
	});
});

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		pageTitle: 'About Page',
		currentYear: new Date().getFullYear()
	})
})

app.get('/bad', (req, res) => {
	res.send(500,{
		errorMessage: 'failed to serve the request'
	});
})

app.listen(3000);