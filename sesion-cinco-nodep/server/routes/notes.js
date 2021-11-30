const express = require('express');
const router = express.Router();

// Dummy Data
const notes = [{
  id: 1,
  title: 'Dummy Note',
  content: 'This is a dummy note',
}];

// CRUD
// handler o callback, funciones

// Handler for list all notes
router.get('/', (req, res) => {

});

// Hander for create a new note 
router.post('/', (req, res) => {

});

// Handler for update a specific note
router.put('/:id', (req, res) => {

});

// Handler for delete a specific note
router.delete('/:id', (req, res) => {

});


module.exports = router;
