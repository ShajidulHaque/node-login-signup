// external imports
const express = require('express');

// internal  imports
const { getLoginPage, doLogin } = require('../controller/loginController.js');

// creat router object
const loginRouter = express.Router();

loginRouter.get('/', getLoginPage);
loginRouter.post('/', doLogin);

module.exports = {
	loginRouter
}