import "./style.css";

import { useState } from "react";

export const AddNotes = ({ addCard, setModal }) => {

  const handleClick = (e) => {
    e.preventDefault();

    // open modal
    setModal(true);
    // get values from modal
    // pass here
    addCard("testy", "tasty");
  };

  return (
    <div>
      <button onClick={handleClick}>
        <span>Add new note</span>
      </button>
    </div>
  );
};
