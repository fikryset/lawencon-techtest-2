import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

const ModalPoster = (props) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <Modal centered size="l" show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="row justify-content-center">
        <img src={props.poster} alt="Poster"></img>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalPoster;
