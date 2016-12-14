var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project3");

// module.exports.Cargo = require('./user');