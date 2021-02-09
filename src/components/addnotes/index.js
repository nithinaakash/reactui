import "./style.css";

export const AddNotes = ({ setModal }) => {
  const handleClick = (e) => {
    e.preventDefault();

    // open modal
    setModal(true);
  };

  return (
    <div>
      <button onClick={handleClick}>
        <span>Add new note</span>
      </button>
    </div>
  );
};
