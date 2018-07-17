const express = require("express");
const router = express.Router();

const todo = require("../controllers");

router.route("/")
    .get(todo.sendIndex)

router.all("*", (req, res) => {
    res.json({error:{response:{status: "404", statusText: "Not found"}}})
})

module.exports = router;