// External imports
const bcryptjs = require('bcryptjs');

// Internal imports
const User = require('../model/people.js');

// signup controller
const getSignupPage = (req, res) => {
	res.render('signup', {
		signup: false,
		title: 'fullstack - signup - page'
	});
}

// signup handler
const signupPostHandler = async (req, res) => {
	
	// hash user password
	const hashPassWord = await bcryptjs.hash(req.body.password, 10)
	
	// creat user info object
	const newUser = new User({
		username: req.body.username,
		email: req.body.email,
		phone: req.body.phone,
		password: hashPassWord,
	});
	
	// save user info on database
	newUser.save(err => {
		if (err) {
			console.log(err.message);
		} else {
			console.log('data saved!');
		}
	})
	
	res.status(200).json({
		error: false,
	})

}

// exports
module.exports = {
	getSignupPage,
	signupPostHandler
}