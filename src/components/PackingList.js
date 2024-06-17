import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onToggle, onDelete, onClean }) {
  const [sortedBy, setSortedBy] = useState("input");

  let sortedByItems;
<<<<<<< HEAD

  if (sortedBy === "input") sortedByItems = items;

=======
  if (sortedBy === "input") sortedByItems = items;
>>>>>>> origin/main
  if (sortedBy === "packed")
    sortedByItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
<<<<<<< HEAD

  if (sortedBy === "description")
    sortedByItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

=======
  if (sortedBy === "description")
    sortedByItems
      .slice()
      .sort((a, b) => a.description.localCompare(b.description));
>>>>>>> origin/main
  return (
    <div className="list">
      <ul>
        {sortedByItems.map((item) => {
          return (
            <Item
              item={item}
              key={item.id}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          );
        })}
      </ul>
      <div className="actions">
        <select value={sortedBy} onChange={(e) => setSortedBy(e.target.value)}>
          <option value="input">Sorted By list</option>
          <option value="packed">Sorted By packed</option>
          <option value="description">Sorted By description</option>
        </select>
        <button onClick={onClean}>Clear All List</button>
      </div>
    </div>
  );
}
