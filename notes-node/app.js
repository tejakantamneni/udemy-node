
console.log('starting note app');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

val note = notes.addNote();
console.log(note)

//challenge
console.log('Sum:', notes.add(4,5));

// let userName = os.userInfo().username;

// fs.appendFile("greeting.txt", `Hello, ${userName}!`, function(err){
// 	if(err){
// 		console.log("unable to write to file: " + err)
// 	}
// });