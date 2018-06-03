
const fs = require('fs');
const FILE_NAME = './notes-data.json';

var addNote = (title, body) => {
    
    var note = {
    	title, body
    }
    
    var notes = loadNotes();
    notes.push(note);
    persistNotes(notes);
    console.log("Note saved successfully...")
};

var getAll = () => {
    var notes = loadNotes();
    notes.forEach(function(note){
    	console.log(note.title, " : ", note.body);
    });
};

var readNote = (title) => {
    console.log('Read note with title:', title);
};

var removeNote = (title) => {
    console.log(`Removing note with title:`, title);
};

function loadNotes(){
	var notes = [];
	try{
		notes = JSON.parse(fs.readFileSync(FILE_NAME));
	}catch(e){
		//ignore this assuming that error means no file exists
	}
	return notes;
}

function persistNotes(notes){
	fs.writeFileSync(FILE_NAME, JSON.stringify(notes));
}

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote
};