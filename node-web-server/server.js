
const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.send('<h1>Hello, Express!!</h1>');
});

app.get('/about', (req, res) => {
	res.send('About page...')
})

app.get('/bad', (req, res) => {
	res.send(500,{
		errorMessage: 'failed to serve the request'
	});
})

app.listen(3000);