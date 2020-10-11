import React, {useState} from "react";
import {Modal, Form, Button} from "react-bootstrap";
import {Close} from "../../../utils/icons";

import "./TweetModal.scss";

export default function TweetModal(props) {
    const {show, setShow} = props;
    const onSubmit = () =>{
        console.log("Enviando Tweet");
    };




    return (
        <Modal 
        className="tweet-modal" 
        show={show} 
        onHide={() => setShow(false)}
        centered
        size="lg"
        >
            <Modal.Header>
                <Modal.Title>
                    <Close onClick={() => setShow(false)} />
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={onSubmit}>
                    <Form.Control as="textarea" row="6" placeholder="¿Qué está pensando?" />
                    <Button type="submit">
                        Twittoar
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}
