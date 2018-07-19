const db = require("../models");
const sanitize = require("../helpers/sanitize");

const newTodo = (req) => {
    const todo = {};
    todo.todo = sanitize(req.body.todo),
    todo.completed = sanitize(req.body.completed)
    return todo;
}

const sendIndex = (req, res) => {
    res.sendFile("index.html");
}

const getTodos = (req, res) => {
    db.Todo.find({})
        .then(todos => {
            res.json(todos)
        })
        .catch(err => {
            res.json(err);
        })
}

const createTodo = (req, res) => {
    db.Todo.create(newTodo(req))
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json(err);
        })
}

const editTodo = (req, res) => {
    db.Todo.findByIdAndUpdate(req.params.todoid, newTodo(req), {new: true})
        .then(updatedTodo => {
            res.json(updatedTodo)
        })
        .catch(err => {
            res.json(err);
        })
}

const deleteTodo = (req, res) => {
    db.Todo.findByIdAndRemove(req.params.todoid)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err);
        })
}

module.exports = {
    sendIndex,
    getTodos,
    createTodo,
    editTodo,
    deleteTodo
}