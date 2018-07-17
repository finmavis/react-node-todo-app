import React from 'react';

const TodoItem = (props) => (
    <tr>
        <th scope="row" className="text-center"><a onClick={() => props.edit(props.id)}><i className="fas fa-pencil-alt"></i></a></th>
        <td className={props.completed ? "done" : null}>{props.todo}</td>
        <td className="text-center"><a onClick={() => props.deleteTodo(props.id)}><i className="fas fa-trash"></i></a></td>
    </tr>
);

export default TodoItem;