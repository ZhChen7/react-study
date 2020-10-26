import React, { useState } from "react";

const useCus = (val, num) => {
  const [count, setCount] = useState(val);

  const add = () => {
    setCount(count + num);
  };

  return {
    count,
    add,
  };
};

const Hook3 = () => {
  let { count, add } = useCus(10, 2);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => add()}>点击</button>
    </div>
  );
};

export default Hook3;
