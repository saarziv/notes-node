const fs = require('fs');

var originalNote = {
    title:'Saar',
    age: 21
};

var originalNoteString = JSON.stringify(originalNote);
fs.appendFileSync('originalNote.json',originalNoteString);

var noteContent = fs.readFileSync('originalNote.json');
noteContent = JSON.parse(noteContent);

console.log(typeof noteContent);
console.log("content is : ",noteContent.title,noteContent.age);

