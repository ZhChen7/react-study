import React, { useEffect } from "react";

//导入 store
import store from "../store";

// 导入 action
import { addTodo } from "../action";

const Home = () => {
  const handleClick = () => {
    store.dispatch(addTodo("11111"));
  };

  useEffect(() => {
    store.subscribe(() => {
      console.log(store.getState());
    });
  });

  return (
    <div>
      <button onClick={handleClick}>Home 按钮</button>
    </div>
  );
};

export default Home;
