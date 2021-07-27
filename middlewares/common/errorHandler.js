// 404 not found handler
const notFoundHandler = (req, res, next) => {
	next(new Error('requested content was not found!'));
}

// common error handler
const commonErrorHandler = (err, req, res, next) => {
	
	res.status(err.status || 500);
	
	if(res.locals.html) {
		res.render('error');
	} else {
		res.json({
			error: err.message
		})
	}
	
}

module.exports = {
	notFoundHandler,
	commonErrorHandler
}