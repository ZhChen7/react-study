import React, { useRef, forwardRef } from "react";
import { useImperativeHandle } from "react";

const Com = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    name: "zc",
    add:()=>{
        console.log('111');
    }
  }));

  return (
    <div>
      <p> 我是子组建</p>
    </div>
  );
});

const HookUseCallbak = () => {
  const refdemo = useRef(null);
  return (
    <div>
      <h1>213</h1>
      <Com ref={refdemo} />

      <button onClick={() => console.log(refdemo)}>点击</button>
    </div>
  );
};

export default HookUseCallbak;
