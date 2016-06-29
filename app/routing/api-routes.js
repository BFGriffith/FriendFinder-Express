//dependencies to access data
var friends = require('../data/friends.js');
var path = require('path');

module.exports = function(app) {
//method to get json data from friends.js
	app.get('/api/:friend?', function(req, res) {
		var chosenFriend = req.params.friend;

		for (var i = 0; i < friends.length; i++) {
			if (chosenFriend == friends[i].name) {
				res.json(friends[i]);
				return;
			} //END friend's name conditional
		}//END for-loop
		res.json(friends);
	});//END app.get

	app.post('/api/:friend?', function(req, res) {
		var chosenFriend = req.params.friend;
		friends.push(req.body);
		res.json(true);
	});//END app.post to friends.js

};//END module.exports
