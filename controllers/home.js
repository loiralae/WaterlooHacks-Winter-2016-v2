
var History = require('../models/History.js');

/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
	console.log('LUCY HOME GET');
  History.find(function(err, histories) {
		res.render('home', 
			{ 
				title: 'Home',
				messages: histories
			});
	});	
};

function parseHistory(pastData) {

}