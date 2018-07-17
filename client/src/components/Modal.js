import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import FormTodo from './Form';

const AddTodoModal = (props) => (
    <Modal isOpen={props.isOpen} toggle={props.toggleModal}>
        <ModalHeader toggle={props.toggleModal}>{props.title} Todo</ModalHeader>
        <ModalBody>
            <FormTodo todo={props.todo} inputHandle={(e) => props.inputHandle(e)} completed={props.completed} checkboxHandle={props.checkboxHandle} />
        </ModalBody>
        <ModalFooter>
            <Button color="danger" onClick={props.toggleModal}><i className="fas fa-times"></i> Cancel</Button>
            <Button color="success" onClick={props.save}><i className="fas fa-save"></i> Save</Button>
        </ModalFooter>
    </Modal>
);  

export default AddTodoModal;