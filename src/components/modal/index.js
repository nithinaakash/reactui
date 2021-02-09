import Modal from "react-modal";
import { useState } from "react";

import "./style.css";

export const ModalForm = ({ modalIsOpen = false, setModal }) => {
  Modal.setAppElement("#root");

  const closeModal = () => {
    setModal(false);
  };

  return (
    <Modal isOpen={modalIsOpen}>
      <form className="modal">
        <input type="text" placeholder="Enter meeting title"></input>
        <textarea placeholder="Enter meeting notes"></textarea>
        <button type="submit">Save</button>
        <button type="button" className="cancelBtn" onClick={closeModal}>
          Cancel
        </button>
      </form>
    </Modal>
  );
};
