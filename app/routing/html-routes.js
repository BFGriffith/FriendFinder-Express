//dependencies
var path = require('path');

module.exports = function(app) {
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '/../public/survey.html'));
	});//END survey.html route

	//default to home.html
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, '/../public/home.html'));
	});//END home.html route
};//END module.exports
