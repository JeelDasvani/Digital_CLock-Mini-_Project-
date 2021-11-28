import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const Inc = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1> {count} </h1>
      <button onClick={Inc}>Click Me</button>
    </>
  );
};

export default App;
