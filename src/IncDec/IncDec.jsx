import { useState } from "react";
import "./IncDec.css";

const IncDec = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Value cannot be negative!");
    }
  };
  return (
    <div className="card">
      <h2>Counter</h2>
      <div className="counter">{count}</div>
      <div className="buttons">
        <button onClick={handleIncrease}>Increase (+)</button>
        <button onClick={handleDecrease}>Decrease (-)</button>
      </div>
    </div>
  );
};

export default IncDec;
