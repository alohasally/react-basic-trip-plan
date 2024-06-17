export default function Item({ item, onToggle, onDelete }) {
  return (
    <li>
      <input
        value={item.packed}
        type="checkbox"
        onChange={() => onToggle(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.number}
        {item.description}
      </span>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
}
