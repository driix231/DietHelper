import Modal from 'react-bootstrap/Modal';
import React from "react";
import Button from 'react-bootstrap/Button';
import {ModalBody, ModalFooter, ModalMain} from "./Modal.css";

const ModalComponent = ({ hideModal, show, header, footerComp, children}) => {
    return (
        <ModalMain show={show} centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {header}
                </Modal.Title>
            </Modal.Header>
            <ModalBody>
                {children}
            </ModalBody>
            <ModalFooter>
                {footerComp}
                <Button onClick={() => hideModal()}>Zamknij</Button>
            </ModalFooter>
        </ModalMain>
    )
}

export default ModalComponent;