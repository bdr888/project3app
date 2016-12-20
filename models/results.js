var mongoose = require('mongoose');

var Results = mongoose.Schema({
    searchTerm: String,
    results: []
});

module.exports = mongoose.model('Results', Results);
