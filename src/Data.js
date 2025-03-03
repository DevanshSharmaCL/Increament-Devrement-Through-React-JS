import React, { useState } from "react";
import datas from "./datas.json";

const Data = () => {
  const [nData, setnData] = useState(datas);

  const handleRemove = (itemId) => {
    setnData(nData.filter((item) => item.id !== itemId));
  };

  const handleUpdate = (itemId) => {
    setnData(
      nData.map((items) =>
        items.id === itemId ? { ...items, name: "newName" } : items
      )
    );
  };

  return (
    <div>
      <ul>
        {nData.map((items) => (
          <li key={items.id}>
            {items.name}
            <br />
            <button onClick={() => handleRemove(items.id)}>Remove</button>
            <button onClick={() => handleUpdate(items.id)}>Update</button>
          </li>
        ))}
      </ul>
      <button onClick={() => setnData([])}>Clear</button>
    </div>
  );
};

export default Data;
