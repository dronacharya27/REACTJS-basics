import React, { useState } from "react";

export default function Calculator() {
  const [result, SetResult] = useState(0);
  const [a, SetA] = useState(0);
  const [b, SetB] = useState(0);
  const sum = "";
  const ChangeResult = (evt) => {
    SetResult(evt.target.value);
    sum = a + b;
    console.log(sum);
  };
  const aparm = (evt) => {
    const a = "";
    a = evt.target.value;
    return a;
  };
  const bparm = (evt) => {
    const b = "";
    b = evt.target.value;
    return b;
  };

  return (
    <div>
      <h1> {result}</h1>
      <button onClick={aparm} value="1">
        1
      </button>
      <button onClick={ChangeResult} value="+">
        +
      </button>
      <button onClick={bparm} value="2">
        2
      </button>
      <button onClick={aparm} value="2">
        YASH KISHOR
      </button>

      <button>Dron</button>

      <button onClick={aparm} value="2">
        EK aur btn
      </button>
      <button onClick={aparm} value="2">
        Dron aur button
      </button>
      <button onClick={aparm} value="2">
        Yash ka button
      </button>
      <button onClick={aparm} value="2">
       ye delete mat karna
      </button>
    </div>
  );
}
