const { Sequelize } = require('sequelize');

// Importing models
const Product = require('./models/Product');
const Review = require('./models/Review');

// Database connection
const sequelize = new Sequelize('ecommerce-api', 'root', 'root', {
  host: 'localhost',
  dialect: 'mariadb',
  logging: false,
});

// Getting models
const models = [Product, Review];

// Registering models into Sequelize
for (let model of models) {
  model(sequelize);
}

// Configuring relations
const { products, reviews } = sequelize.models;
// Relation one-to-one in reviews table
reviews.belongsTo(products);

// example:
//products.belongsTo(users);


module.exports = sequelize;