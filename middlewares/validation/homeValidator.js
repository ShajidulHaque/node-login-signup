// check user logged in
const checkLoggedIn = (req, res, next) => {
	const cookieName = process.env.COOKIE_NAME;
	
	const getCookieObject = req.cookies[cookieName] || {};
	
	if (getCookieObject.signed) {
		next();
	} else {
		res.locals.html = true;
		next(new Error('Home page for logged in user!'));
	}
	
}

module.exports = {
	checkLoggedIn,
}