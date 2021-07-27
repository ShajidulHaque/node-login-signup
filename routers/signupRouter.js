// external imports
const express = require('express');

// internal  imports
const { getSignupPage, signupPostHandler } = require('../controller/signupController.js');
const { userValidator } = require('../middlewares/validation/userValidator.js');

// creat router object
const signupRouter = express.Router();


signupRouter.get('/', getSignupPage);
signupRouter.post('/', userValidator, signupPostHandler)

module.exports = {
	signupRouter
}