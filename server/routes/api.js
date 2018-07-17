const express = require("express");
const router = express.Router();

const todo = require("../controllers");

router.route("/")
    .get(todo.getTodos)
    .post(todo.createTodo)

router.route("/:todoid")
    .put(todo.editTodo)
    .delete(todo.deleteTodo)

router.all("*", (req, res) => {
    res.json({error:{response:{status: "404", statusText: "Not found"}}})
})

module.exports = router;