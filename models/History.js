var mongoose = require('mongoose');

var historySchema = new mongoose.Schema({
  message: String
});

var History = mongoose.model('History', historySchema);
module.exports = History;