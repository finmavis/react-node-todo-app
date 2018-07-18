# React, Redux, Node.js Todo App [MERN STACK]

A basic todo app that uses a [ReactJS](https://reactjs.org/) frontend to manage todo, an api written in [ExpressJS](https://expressjs.com/), and [MongoDB](https://www.mongodb.com/) to store todo.

### Features
* Add a todo
* Edit a todo
* Remove a todo
* List all todo
* Search todo by title todo

### React Component Plan

#### Todo
  ![Image of Todo Component](https://github.com/finmavis/react-node-todo-app/blob/master/docs/Component%20Plan%20Todo.PNG)
  
#### Modal
  ![Image of Todo Component](https://github.com/finmavis/react-node-todo-app/blob/master/docs/Component%20Plan%20Modal.PNG)
  
  
### Express Route Plan

#### The Routes

Verb | Routes | Description
------------ | ------------- | -------------
GET | /api/todos | Get all todo
POST | / api/todos | Create new todo
PUT | /api/todos/:todoid | Update a todo
DELETE | /api/todos/:todoid | Delete a todo