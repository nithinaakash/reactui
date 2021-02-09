import "./App.css";

import { useEffect, useState } from "react";

import { Search } from "./components/search";
import { AddNotes } from "./components/addnotes";
import { Card } from "./components/card";
import { ModalForm } from "./components/modal";

export const App = () => {
  const [cards, setCards] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const addCard = (title = "", content = "") => {
    setCards([
      ...cards,
      <Card key={cards.length + 1} title={title} content={content}></Card>,
    ]);
  };

  // temporary to test
  // populate from API on mount
  useEffect(() => {
    addCard("test", "testContent");
  }, []);

  return (
    <div className="App">
      <ModalForm modalIsOpen={modalIsOpen} setModal={setModalIsOpen} />
      <header className="header">
        <Search />
        <AddNotes addCard={addCard} setModal={setModalIsOpen} />
      </header>
      <main className="main">{cards}</main>
    </div>
  );
};
