export default function Item({ item, onToggle, onDelete }) {
  return (
    <li>
      <form>
        <input type="checkbox" onChange={() => onToggle(item.id)}></input>
      </form>
      <p>
        {item.number}
        {item.description}
      </p>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
}
