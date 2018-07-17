import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const FormTodo = (props) => (
    <Form>
        <FormGroup>
            <Label for="todo">Todo</Label>
            <Input type="text" name="todo" placeholder="Todo" value={props.todo} onChange={(e) => props.inputHandle(e)} />
        </FormGroup>
        <FormGroup check>
            <Label check> 
                <Input type="checkbox" name="completed" checked={props.completed} onChange={props.checkboxHandle} />
                Complete
            </Label>
        </FormGroup>
    </Form>
);

export default FormTodo;