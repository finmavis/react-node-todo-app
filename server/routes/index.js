const express = require("express");
const router = express.Router();

const todo = require("../controllers");

router.route("/")
    .get(todo.sendIndex)

module.exports = router;