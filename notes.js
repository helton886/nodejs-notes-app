const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicatedNote = notes.find(note => note.title === title);
  if (!duplicatedNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse('New note added!'));
  } else console.log(chalk.red.inverse('Note title already in use!'));
};

const removeNote = title => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => note.title !== title);
  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log(chalk.green.inverse('Note removed!'));
  } else console.log(chalk.red.inverse('Note title not found!'));
};

const listNotes = () => {
  const notes = loadNotes();
  if (notes.length > 0) {
    console.log(chalk.inverse('Your notes:'));
    notes.forEach(note => {
      console.log(note.title);
    });
  } else {
    console.log(chalk.red.inverse('There are no notes!'));
  }
};

const readNote = title => {
  const notes = loadNotes();
  const noteFound = notes.find(note => note.title === title);
  debugger;
  if (noteFound) {
    console.log(chalk.inverse(noteFound.title));
    console.log(noteFound.body);
  } else {
    console.log(chalk.red.inverse('Note not found!'));
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  listNotes: listNotes,
  addNote: addNote,
  removeNote: removeNote,
  readNote: readNote,
};
