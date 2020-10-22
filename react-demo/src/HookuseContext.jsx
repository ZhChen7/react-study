import React, { useContext, useState, createContext } from "react";

const MyContext = createContext();

const Comson = () => {
  const count = useContext(MyContext);
  return (
    <>
      <h1>子组件</h1>
      <p>我是子组件 ---- {count}</p>
    </>
  );
};

const HookuseContext = () => {
  const [count, setCount] = useState(0);

  const handle = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <MyContext.Provider value={count}>
        <Comson />
      </MyContext.Provider>
      <button onClick={handle}>点击</button>
    </div>
  );
};

export default HookuseContext;
