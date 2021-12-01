const express = require('express');
const router = express.Router();

// Using database config
const sequelize = require('../database');

// CRUD
// handler o callback, funciones

// Handler for list all notes
router.get('/', async (req, res) => {
  const notes = await sequelize.models.Notes.findAll();
  return res.json(notes);
});

// Hander for create a new note 
router.post('/', async (req, res) => {
  // const { heading, content } = req.body;
  const { body } = req;
  const Note = await sequelize.models.Notes.create({
    heading: body.heading, // Creating an instance of Notes
    content: body.content
  });

  Note.save();
  return res.json({ message: 'Created successfully', data: Note });
});

// Handler for update a specific note
router.put('/:id', async (req, res) => {
  // Getting id from parameters
  const { body, params: { id } } = req;
  const Note = await sequelize.models.Notes.findOne({ id }); // Finding specific noted based on id
  
  if (!Note) {
    return res.status(404).json({ message: 'Note not found' });
  }

  // The new model with request changes
  const UpdatedNote = await Note.update({
    heading: body.heading,
    content: body.content,
  });

  return res.json({ message: 'Updated successfully', data: UpdatedNote });
});


// Reto - implementar delete
// Handler for delete a specific note
router.delete('/:id', async (req, res) => {
  // Getting id from parameters
  const { params: { id } } = req;

  // Finding specific noted based on id
  const Note = await sequelize.models.Notes.findOne({ id });

  if (!Note) {
    return res.status(404).json({ message: 'Note not found' });
  }

  await Note.destroy();
  return res.json({ message: 'Deleted successfully' });
});


module.exports = router;
