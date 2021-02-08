import "./App.css";

import { useEffect, useState } from "react";

import { Search } from "./components/search";
import { AddNotes } from "./components/addnotes";
import { Card } from "./components/card";

export const App = () => {
  const [cards, setCards] = useState([]);

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
      <header className="header">
        <Search />
        <AddNotes addCard={addCard} />
      </header>
      <main className="main">{cards}</main>
    </div>
  );
};
