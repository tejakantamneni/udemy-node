console.log('running notes.js')


var addNote = (title, body) => {
    console.log(`Adding note:`, title, body);
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