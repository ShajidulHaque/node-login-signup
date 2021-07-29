// home page controller
const getHomePage = (req, res) => {
	res.render('home', {
		title: 'fullstack home page'
	});
}

// exports
module.exports = {
	getHomePage
}