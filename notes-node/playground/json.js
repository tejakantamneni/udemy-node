
// var obj = {
// 	name: "Teja"
// };

// var strObj = JSON.stringify(obj);

// console.log(obj);
// console.log(strObj);
// console.log(typeof strObj);

// console.log("-----------------")

const fs = require('fs');

var notesList = [{"title" : "one", "body" : "First Note"}, {"title" : "two", "body" : "Seond Note"}]

var notesString = JSON.stringify(notesList);

console.log(notesString);

fs.writeFileSync('notes.json', notesString);

var notesFromFile = fs.readFileSync('notes.json')
var notesListFromFile = JSON.parse(notesFromFile);

notesListFromFile.forEach(function(e){
	console.log(e.title, "-" e.body);
});
