// external imports
const express = require('express');

// internal  imports
const { getHomePage } = require('../controller/homeController.js');

// creat router object
const homeRouter = express.Router();

homeRouter.get('/', getHomePage);

module.exports = {
	homeRouter
}