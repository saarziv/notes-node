
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes');


const titleOptions =  {
    describe: 'title of new note',
    demand: true,
    alias: 't'};
const bodyOptions = {
    describe: 'body of the new note',
    demand: true,
    alias:'b'
};

var argv = yargs
    .command('add','Adds a note',{
        title: titleOptions,
        body: bodyOptions
    })
    .command('list','lists all notes')
    .command('read','reads a note',{
        title: titleOptions,
    })
    .command('remove','removes a note',{
        title: titleOptions,
    })
    .help()
    .argv;
var command = argv._[0];


if(command === "list"){
    notes.getAll();
} else if (command === "add"){
    notes.addNote(argv.title,argv.body);
} else if(command === "remove"){
    notes.removeNote(argv.title);
} else if (command === "read"){
    notes.readNote(argv.title);
} else {
    console.log('command not recognized')
}











