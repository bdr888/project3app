// POST /
var db = require('../models');

function postResults(req, res) { 
	//require mongoose model defines in model/blog.js (see Files)
	var Results = require("../models/results");

	//create new model
	var post = new Results({searchTerm: req.body, results: req.artists.items});
	console.log(req.body + req.artists.items);

	//save model to MongoDB
	post.save(function (err) {
	  if (err) {
			return err;
	  }
	  else {
	  	console.log("Result saved");
	  }
	});

		// res.render('index', {results: results});
	
}

module.exports = {
  postResults: postResults,
};


// example here: http://code.runnable.com/UWyFO5S8trEHAADS/add-a-document-in-mongodb-using-mongoosejs-for-node-js