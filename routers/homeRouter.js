// external imports
const express = require('express');

// internal  imports
const { getHomePage } = require('../controller/homeController.js');
const { checkLoggedIn } = require('../middlewares/validation/homeValidator.js');

// creat router object
const homeRouter = express.Router();

homeRouter.get('/', checkLoggedIn, getHomePage);

module.exports = {
	homeRouter
}