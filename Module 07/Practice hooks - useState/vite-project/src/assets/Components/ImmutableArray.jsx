import React from "react";
import { useState } from "react";

const ImmutableArray = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const addToList = () => {
    list.push(item);
    setList([...list]);
  };

  const removeFromList = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };
  return (
    <div>
      <table>
        <tbody>
          {list.length !== 0 ? (
            list.map((element, index) => {
              return (
                <tr key={index.toString()}>
                  <td>{element}</td>
                  <td>
                    <button onClick={() => removeFromList(index)}>
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
      <input
        onChange={(e) => {
          setItem(e.target.value);
        }}
        placeholder="Write Item..."
      />
      <button onClick={addToList}>Add</button>
    </div>
  );
};

export default ImmutableArray;
