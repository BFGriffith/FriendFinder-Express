//dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Express configuration:
var app = express();
var PORT = process.env.PORT || 3001;

//BodyParser to interpret json data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(express.static('app/public'));

//router set-up
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

//listening?
app.listen(PORT, function(){
	console.log('listening on port '+ PORT);
});
