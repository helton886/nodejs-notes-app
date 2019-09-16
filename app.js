const yargs = require('yargs');
const notes = require('./notes.js');

//add
yargs.command({
  command: 'add',
  describe: 'add a new note!',
  builder: {
    title: {
      demandOption: true,
      describe: 'Note title',
      type: 'string',
    },
    body: {
      demandOption: true,
      describe: 'Body of the note',
      type: 'string',
    },
  },
  handler: argsv => {
    notes.addNote(argsv.title, argsv.body);
  },
});
//remove
yargs.command({
  command: 'remove',
  describe: 'remove a note!',
  builder: {
    title: {
      demandOption: true,
      describe: 'Note title',
      type: 'string',
    },
  },
  handler: argsv => {
    notes.removeNote(argsv.title);
  },
});
//list
yargs.command({
  command: 'list',
  describe: 'list all notes!',
  handler: () => {},
});
//read
yargs.command({
  command: 'read',
  describe: 'read a note!',
  handler: () => {},
});

yargs.parse();
