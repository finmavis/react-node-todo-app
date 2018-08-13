import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

const TodoHeader = (props) => (
    <div className="todo-header">
        <InputGroup>
            <InputGroupAddon addonType="prepend">
                <Button color="info" onClick={props.toggleModal}><i className="fas fa-plus"></i></Button>
            </InputGroupAddon>
            <Input placeholder="Search todo" onChange={(e) => props.search(e)} name="search" />
        </InputGroup>
    </div>
);

export default TodoHeader;