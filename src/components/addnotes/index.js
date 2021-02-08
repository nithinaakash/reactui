import "./style.css";

export const AddNotes = ({ addCard }) => {
  const handleClick = (e) => {
    e.preventDefault();
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
