const fs = require('fs');
const _ = require('lodash');
const notesFile = 'notes.json';

var isDuplicateTitle = (title,array) => {
    let duplicateArray = array.filter(cell => cell.title === title);
    if(duplicateArray.length === 0){
        return true;
    } else {
        throw Error(`the title ${title} already exists, please change title ...`)
    }
};

var getNotesObject = (notesFile) =>{
    try {
        return JSON.parse(fs.readFileSync(notesFile));
    } catch (e){
        return [];
    }
};

var logNote = (note) => {
  console.log("---");
  console.log(`note title :${note.title}\nnote body :${note.body}`);
};

var addNote = (title,body) =>{
    let note = {
        title,
        body
    };
    let notes = getNotesObject(notesFile);

    if(isDuplicateTitle(title,notes)) {
        notes.push(note);
        fs.writeFileSync(notesFile, JSON.stringify(notes));
    }
    console.log(`Adding Note `);
    logNote(note);
};

var getAll = () =>{
    let notes = getNotesObject(notesFile);
    console.log(`printing ${notes.length} note(s) :`);
    notes.forEach(note => logNote(note));
};

var removeNote = (title) => {
    let notes = getNotesObject(notesFile);
    let filteredNotes = _.remove(notes,note => note.title === title);

    if(!_.isEqual(notes,filteredNotes)) {
        fs.writeFileSync(notesFile, JSON.stringify(filteredNotes));
        console.log(`the note ${title} has been removed`);
    } else {
        console.log("there is no such note to remove.")
    }


};

var readNote = (title) => {
    let note = getNotesObject(notesFile).find(note => note.title === title);
    if(_.isUndefined(note)){
        console.log("no such note")
    } else {
        logNote(note);
    }

};




module.exports = {
    addNote,
    getAll,
    removeNote,
    readNote
}