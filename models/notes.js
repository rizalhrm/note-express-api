const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotesSchema = new Schema({
    title: {
        type: String
    },
    content: {
        type: Array
    }
  });
  
  const Notes = mongoose.model('notes', NotesSchema);
  
  module.exports = Notes;
  