import React, { useState } from "react";

const ToggleParagraph = () => {
  const [isVisible, setVisibility] = useState(false);
  const ToggleComponent = () => {
    setVisibility((isVisible) => !isVisible);
  };
  return (
    <div>
      {isVisible && <p>This Component is Hidden</p>}
      <button onClick={ToggleComponent}>{isVisible ? "Hide" : "Show"}</button>
    </div>
  );
};

export default ToggleParagraph;
