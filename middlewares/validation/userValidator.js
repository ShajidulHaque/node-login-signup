// Internal imports
const User = require('../../model/people.js');

// check user on database
const userValidator = async (req, res, next) => {
	const checkUserEmail = await User.findOne({ email: req.body.email });
	
	if (checkUserEmail && checkUserEmail.email) {
		res.status(500).json({
			error: 'Email already used!'
		})
	} else {
		next();
	}
}

module.exports = {
	userValidator,
}