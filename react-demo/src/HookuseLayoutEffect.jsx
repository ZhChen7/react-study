import React from "react";
import { useEffect } from "react";
import { useLayoutEffect } from "react";
import { useState } from "react";

const HookuseLayoutEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect");
    return () => {
      console.log("useEffect-return");
    };
  });

  // useEffect 是在 componentDidMount 以后执行的，useLayoutEffect在浏览器执行绘制之前执行（会阻塞组件挂载，慎用）
  // 慎用 -- 会阻塞组件的挂载
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    return () => {
      console.log("useLayoutEffect-return");
    };
  });

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(2)}>点击</button>
    </div>
  );
};

export default HookuseLayoutEffect;
