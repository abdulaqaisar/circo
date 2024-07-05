import React, { useState } from "react";
import "./updatecolor.css";

const Updatecolor = () => {
  let [color, setcolor] = useState("");

  const colorupdator = (color) => {
    setcolor(color);
  };

  return (
    <>
      <div>
        <div>
          <button style={{ background: color }}>I am Color Changer</button>
        </div>

        <div>
          <button
            onClick={() => colorupdator("blue")}
            className="btn"
            style={{ background: "blue", color: "white" }}
          >
            Blue
          </button>
          <button
            onClick={() => colorupdator("green")}
            className="btn"
            style={{ background: "green", color: "white" }}
          >
            Green
          </button>
          <button
            onClick={() => colorupdator("red")}
            className="btn"
            style={{ background: "red", color: "white" }}
          >
            Red
          </button>
          <button
            onClick={() => colorupdator("brown")}
            className="btn"
            style={{ background: "brown", color: "white" }}
          >
            Brown
          </button>
        </div>
      </div>
    </>
  );
};

export default Updatecolor;
