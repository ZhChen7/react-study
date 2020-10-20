import React, { useEffect } from "react";
import { useState } from "react";

const Hook = () => {
  const [count, setCount] = useState({
    name: "zc",
    age: 18,
  });
  const [arr, setArr] = useState([1, 2, 3]);
  const [func, setFunc] = useState(() => {
    return 1;
  });

  const handle = () => {
    setCount({ 
      ...count,
      age: count.age + 1,
    });
  };
  return (
    <>
      <h1>{count.name}</h1>
      <h1>{count.age}</h1>
      <h1>{arr}</h1>
      <h1>{func}</h1>
      <button onClick={handle}>增加</button>
      <button
        onClick={() => {
          setArr(() => {
            arr.push(4);
            return [...arr];
          });
        }}
      >
        增加
      </button>
    </>
  );
};

export default Hook;
