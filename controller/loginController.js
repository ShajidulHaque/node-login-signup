// External imports
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Internal imports
const User = require('../model/people.js');

// login controller
const getLoginPage = (req, res) => {
	res.render('login', {
		title: 'fullstack login - page'
	});
}

// do login
const doLogin = async (req, res) => {
	try {
		// get user on database biased on user info
		const user = await User.findOne({ email: req.body.email })

		if (user && user._id) {
			// check user password and database password
			const checkPassword = await bcryptjs.compare(
				req.body.password,
				user.password,
			)

			if (checkPassword) {
				// user info pasted for token
				const userData = {
					username: user.username,
					email: user.email,
					phone: user.phone,
					id: user._id
				}

				// generat token
				const token = jwt.sign(
					userData,
					process.env.JWT_SECRIT,
					{
						expiresIn: process.env.JWT_EXPIRY,
					}
				);

				res.cookie(process.env.COOKIE_NAME, {
					maxAge: process.env.JWT_EXPIRY,
					httpOnly: true,
					signed: true
				});

				res.status(200).json({
					token
				})
				
			} else {
				throw new Error('Login falied! try again')
			}

		} else {
			throw new Error('Login falied! try again')
		}

	} catch (err) {
		// response error massage
		res.status(500).json({
			error: err.message,
		})

	}
}

module.exports = {
	getLoginPage,
	doLogin
}