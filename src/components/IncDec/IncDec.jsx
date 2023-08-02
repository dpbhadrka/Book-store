import React, { useState } from "react";
import "./IncDec.css";

export default function IncDec() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <div className="incdec-container">
        <div>{number}</div>
        <div className="incdec-button">
          <button onClick={() => setNumber(number + 1)}>+1</button>
          <button onClick={() => setNumber(number - 1)}>-1</button>
        </div>
      </div>
    </>
  );
}
