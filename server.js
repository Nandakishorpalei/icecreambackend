require('dotenv').config();
const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

const userController = require('./src/controllers/userController');
app.use('/users', userController);

module.exports = app;
