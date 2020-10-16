const express = require('express');
const endangeredAnimals = require('./endangered-list');
const endangeredList = express.Router();


endangeredList.get('/', (req, res) => {
    res.status(200).send(endangeredAnimals);
});

module.exports = endangeredList;

