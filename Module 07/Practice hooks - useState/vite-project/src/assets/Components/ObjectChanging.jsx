import React from "react";
import { useState } from "react";

const ObjectChanging = () => {
  const [myObj, setMyObj] = useState({
    key1: "Value 1",
    key2: "Value 2",
    key3: "Value 3",
  });
  const changeObjProperties = () => {
    setMyObj((previousObject) => ({
      ...previousObject,
      key1: "New Value of key1",
      key2: "New Value of key2",
    }));
  };
  return (
    <div>
      <h1>{myObj.key1}</h1>
      <h1>{myObj.key2}</h1>
      <h1>{myObj.key3}</h1>
      <button onClick={changeObjProperties}>Click</button>
    </div>
  );
};

export default ObjectChanging;
