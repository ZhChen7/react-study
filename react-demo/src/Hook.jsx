import React, { Component, useState } from "react";
import { useEffect } from "react";

function Hook() {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(0);


  useEffect(()=>{
    console.log('hello Hook');
  })

  const handle= (props)=>{
    setCount(count + 1)
    console.log(props);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handle}>click me</button>
    </div>
  );
}
export default Hook;
