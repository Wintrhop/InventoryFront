import React from "react";
import { Modal } from "react-bootstrap";

const MyModal = ({size, title, children, show, handleClose }) => {
  return (
    <Modal size={size} centered show={show} onHide={handleClose} >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default MyModal;
