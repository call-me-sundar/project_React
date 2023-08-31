const express = require('express');
const route = express.Router();

const {getAllData} = require('../controllers/taskcontrollers')

route.get('/' , getAllData);

module.exports = route;