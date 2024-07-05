import React, { useEffect, useState } from "react";
import "./counter.css";
const Counter = (props) => {
  let [counter, setcounter] = useState(0);

  //   useEffect(() => {
  //     console.log("Counter Mounted");
  //   }, []);
  useEffect(() => {
    console.log("Counter");
  }, [counter]);

  const handleIncreament = () => {
    setcounter(counter + 1);
  };
  const handleDecreament = () => {
    counter > 0 ? setcounter(counter - 1) : (counter = 0);
  };

  return (
    <>
      <div className="counter-container">
        <h1>{counter}</h1>
        console.log(counter);
        <div>
          <button
            onClick={() => handleIncreament()}
            className="btns"
            style={{ background: "lightgreen" }}
          >
            Inc
          </button>
          <button
            onClick={handleDecreament}
            className="btns"
            style={{ background: "red" }}
          >
            Dec
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
