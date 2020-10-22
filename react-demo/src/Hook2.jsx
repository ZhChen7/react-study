import React, { useMemo, useEffect, useState } from "react";
const Hook2 = () => {
  const [count, setCount] = useState(0);

  let res = useMemo(() => {
    return count;
  }, []);
  const handle = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div>{count}</div>
      <p>{res}</p>

      <button onClick={handle}>点击</button>
    </div>
  );
};

export default Hook2;
