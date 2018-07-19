const mongoose = require("mongoose");
const Todo = require("./Todo");
const config = require("../config");

mongoose.connect(config.db.url, {useNewUrlParser: true})
    .then(console.log("Database Connected to " + config.db.url))
    .catch(err => console.log(err.message));

mongoose.Promise = global.Promise;

module.exports = {
   Todo
}