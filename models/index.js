var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/spotify");

// module.exports.Cargo = require('./user');