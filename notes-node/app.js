
console.log('starting note app');

const fs = require('fs');
const os = require('os');

let userName = os.userInfo().username;

fs.appendFile("greeting.txt", "Hello, "+ userName + "!!", function(err){
	if(err){
		console.log("unable to write to file: " + err)
	}
});