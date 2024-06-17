export default function Item({ item, onToggle, onDelete }) {
  return (
    <li>
<<<<<<< HEAD
      <input
        value={item.packed}
        type="checkbox"
        onChange={() => onToggle(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.number}
        {item.description}
      </span>
=======
      <form>
        <input type="checkbox" onChange={() => onToggle(item.id)}></input>
      </form>
      <p>
        {item.number}
        {item.description}
      </p>
>>>>>>> origin/main
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
}
