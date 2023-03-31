import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    setCount(count - 1);
  };

  const Reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={Decrement}>←</button>
      <button onClick={Reset}>⌂</button>
      <button onClick={Increment}>→</button>
    </div>
  );
}

export default Counter;
