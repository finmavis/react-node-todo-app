import React from 'react';
import { Table } from 'reactstrap';

import TodoItem from './TodoItem';

const TodoList = (props) => (
    <div className="todo-data">
        <Table size="sm">
            <thead className="thead-light">
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Todo</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {props.todos.map(todo => (
                    <TodoItem 
                        key={todo._id} 
                        id={todo._id}
                        todo={todo.todo} 
                        description={todo.description} 
                        completed={todo.completed} 
                        deleteTodo={(id) => props.deleteTodo(id)}
                        edit={(id) => props.edit(id)} />
                ))}
            </tbody>
        </Table>
    </div>
);

export default TodoList;