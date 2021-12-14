const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const jwt = require('jsonwebtoken');

router.post('/login', (req, res) => {
  // TODO: Add logic for authenticate user
});

router.post('/signup', (req, res) => {
  // TODO: Add logic for register a new user
});

module.exports = router;