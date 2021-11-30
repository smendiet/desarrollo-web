const { Sequelize } = require('sequelize');

// Exporting models
const NoteModel = require('../models/Note');
// examples
//const BlogModel = require('../models/Blog');
//const UserModel = require('../models/User');

// Database connection Back Mariadb
const sequelize = new Sequelize('<database>', 'root', 'root', {
  host: 'localhost',
  dialect: 'mariadb',
  logging: false,
});

// Adding models
const models = [NoteModel];

// Registering models to Sequelize
// models.map(model => model(sequelize));

for (let model of models) {
  model(sequelize);
}

module.exports = sequelize;