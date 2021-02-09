import Modal from "react-modal";
import { useState } from "react";

import "./style.css";

export const ModalForm = ({ modalIsOpen = false, setModal, addCard }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  Modal.setAppElement("#root");

  const handleSubmit = (e) => {
    e.preventDefault();
    addCard(title, content);
    setModal(false);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <Modal isOpen={modalIsOpen}>
      <form className="modal" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={handleTitleChange}
          type="text"
          placeholder="Enter meeting title"
        ></input>
        <textarea
          value={content}
          onChange={handleContentChange}
          placeholder="Enter meeting notes"
        ></textarea>
        <button type="submit">Save</button>
        <button type="button" className="cancelBtn" onClick={closeModal}>
          Cancel
        </button>
      </form>
    </Modal>
  );
};
