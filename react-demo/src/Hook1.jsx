import React from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";

const Hook1 = () => {
  const [count, setCount] = useState(0);
  const demoRef = useRef(null);
  const demoRef1 = useRef({value:123})

  useEffect(() => {
    console.log(1);
    console.log(demoRef.current);
    return () => {
      console.log("componentwillUnmount");
    };
  }, []); // []不监听任何状态

  const onChangeHandle = () => {
    console.log(demoRef.current.value);
  };

  return (
    <div>
      <h1>useEffect</h1>
      <h1>{count}</h1>
      <input type="text" ref={demoRef} onChange={onChangeHandle} />
      <input type="text" ref={demoRef} onChange={()=>{
           demoRef1.current.value  =  demoRef.current.value
           console.log(demoRef1);
      }}/>
      <button onClick={() => setCount(count + 1)}>点击</button>
    </div>
  );
};

export default Hook1;
