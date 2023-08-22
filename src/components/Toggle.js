import React, { useState } from "react";

function Toggle() {
  let [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn((isOn) => !isOn);
  }

  const color = isOn ? "green" : "white";

  return (
    <button onClick={handleClick} style={{ background: color }}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
