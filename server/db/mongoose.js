var mongoose = require('mongoose');
// sets up the mongodb connection and a global promise to manage connnections
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};