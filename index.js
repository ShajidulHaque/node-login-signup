// external imports
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const ejs = require('ejs');
const path = require('path');

// configure environment variable
if (process.env.NODE_ENV !== 'production') {
	const dotenv = require('dotenv');
	dotenv.config();
}

// internal imports
const { notFoundHandler, commonErrorHandler } = require('./middlewares/common/errorHandler');
const { loginRouter } = require('./routers/loginRouter.js');
const { homeRouter } = require('./routers/homeRouter.js');
const { signupRouter } = require('./routers/signupRouter.js');
const Test = require('./model/people.js')

// app object
const app = express();

// server port
const port = process.env.PORT || 5000;

// database connection
mongoose
	.connect(process.env.MONGOODB_CONNECTION_STRING, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('Connection successful!'))
	.catch(err => console.log(err.message));

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set static folder
app.use(express.static(__dirname + '/public'));

// set view engine
app.set('view engine', 'ejs');

// parse cookie
app.use(cookieParser(process.env.COOKI_SECRIT))

// create router
app.use('/home', homeRouter);
app.use('/login', loginRouter);
app.use('/', signupRouter);

// 404 not found error handler
app.use(notFoundHandler);

// common error handler
app.use(commonErrorHandler);

// listining our server
app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
