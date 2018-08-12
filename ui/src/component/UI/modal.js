import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Registration from "../registration/registration";

let ModalComponent = (props) => {
    console.log("props of modal component", props);
    let renderer = (
        <div >
            <Modal centered={true} fade={true} isOpen={props.isOpen} toggle={() => props.toggle(false)} >
            <ModalHeader toggle={() => props.toggle(false)}>{props.modalType === 1 ? "SIGNIN" : "SIGNUP"}</ModalHeader>
            <ModalBody>
                    <Registration 
                        modalType = {props.modalType}
                        submitHandler = {(event, type) => props.submitHandler(event, type) }
                        onChangeHandler = { (event, type) => props.onChangeHandler(event, type)}  
                    />
            </ModalBody>
            
            </Modal>
        </div>
    )

    return renderer;

}

export default ModalComponent;  