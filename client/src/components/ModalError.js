import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const ModalError = (props) => (
    <Modal isOpen={props.isOpen} toggle={props.toggleModal}>
        <ModalHeader toggle={props.toggleModal}>An error was detected</ModalHeader>
        <ModalBody>
            <p>{props.error.status} {props.error.statusText}</p>
        </ModalBody>
    </Modal>
);

export default ModalError;