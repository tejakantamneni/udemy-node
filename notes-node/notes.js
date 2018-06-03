
const fs = require('fs');
const FILE_NAME = './notes-data.json';

var addNote = (title, body) => {
    
    var note = {
    	title, body
    }

    fs.exists
    var notes = [];
	try{
		notes = JSON.parse(fs.readFileSync(FILE_NAME));
	}catch(e){}
    notes.push(note);
    fs.writeFileSync(FILE_NAME, JSON.stringify(notes));
    console.log("Note saved successfully...")
};

var getAll = () => {
    console.log('Show all Notes...')
};

var readNote = (title) => {
    console.log('Read note with title:', title);
};

var removeNote = (title) => {
    console.log(`Removing note with title:`, title);
};

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote
};