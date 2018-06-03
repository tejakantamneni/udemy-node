
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
   if(notes.length == 0){
   		console.log(`There are no notes in the system.`)
   }
   logNotes(notes);
};

var readNote = (title) => {
    var notes = loadNotes();
    var matchingNotes = notes.filter( note => note.title == title);
    if(matchingNotes.length == 0){
    	console.log(`No notes found with title ${title}`)
    }else{
    	console.log(`Notes matching with title ${title}`)
	    logNotes(matchingNotes);
    }
};

var removeNote = (title) => {
    var notes = loadNotes();
    var matchingNotes = notes.filter( note => note.title != title);
    persistNotes(matchingNotes);
    console.log("Removed matching notes...")
};

function logNotes(notes){
	 notes.forEach(function(note){
    	console.log(note.title, " : ", note.body);
    });
}

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