import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  const handleToggle = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  const handleCleanList = () => {
    const confirmClean = window.confirm(
      "You Really Want to delete all the List?"
    );

    if (confirmClean) {
      setItems([]);
    }
  };

  const handleDelete = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  return (
    <div className="app">
      <Logo />
      <Form items={items} setItems={setItems} />
      <PackingList
        items={items}
        onToggle={handleToggle}
        onClean={handleCleanList}
        onDelete={handleDelete}
      />
      <Stats items={items} />
    </div>
  );
}
