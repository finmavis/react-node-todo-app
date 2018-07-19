const express = require("express");
const router = express.Router();

const todo = require("../controllers");

router.route("/")
    .get(todo.sendIndex)

router.all("*", (req, res) => {
    res.json({err:{response:{status: "404", statusText: "Not Found"}}})
});

module.exports = router;