import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  const handleIncrement = () => {
    count++;
    setCount(count);
  };
  const handeleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="mt-2">
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-100 ease-in"
        onClick={handleIncrement}
      >
        Increment
      </button>
      <h1 className="text-5xl">{count}</h1>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-100 ease-in "
        onClick={handeleDecrement}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
