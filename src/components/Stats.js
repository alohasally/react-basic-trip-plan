export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <p>Start adding some items to your packing list</p>
      </footer>
    );
  }
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;
  const percentage = Math.round((packedItems / totalItems) * 100);

  return (
    <footer className="stats">
      {percentage === 100 ? (
        <p>You Already Packed Every Stuff</p>
      ) : (
        <p>
          you have {totalItems} items, you already packed {packedItems} it is
          {percentage} %
        </p>
      )}
    </footer>
  );
}
