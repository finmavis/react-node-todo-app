const mongoose = require("mongoose");
const Todo = require("./Todo");
const config = require("../config");

mongoose.connect(config.db.url);
mongoose.Promise = global.Promise;

module.exports = {
   Todo
}