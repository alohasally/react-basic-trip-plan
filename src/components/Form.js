import { useState } from "react";

export default function Form({ items, setItems }) {
  const [number, setNumber] = useState(1);
  const [description, setDescription] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    const newItem = { number, description, packed: false, id: Date.now() };
    setItems([...items, newItem]);

    setNumber(1);
    setDescription("");
  };
  console.log(items);
  return (
    <div className="add-form">
      <h3>What do you need for your I trip?</h3>
      <form onSubmit={(e) => handleSumbit(e)}>
        <select
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
      </form>
      <button>Add</button>
    </div>
  );
}
