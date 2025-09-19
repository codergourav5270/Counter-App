import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("white"); // bg color state

  // function to change color temporarily
  const changeColor = (color) => {
    setBgColor(color); // set new color
    setTimeout(() => {
      setBgColor("white"); // 0.2 sec बाद वापस white
    }, 300);
  };

  return (
    <div>
      <h1 id="counterid" style={{ backgroundColor: bgColor }}>
        Counter: {count}
      </h1>

      <button
        id="btn1"
        onClick={() => {
          setCount(count + 1);
          changeColor("green"); // +1 → Green
        }}
      >
        +1
      </button>

      <button
        id="btn2"
        onClick={() => {
          setCount(count - 1);
             changeColor("yellow"); // -1 → Yellow
        }}
      >
        -1
      </button>

      <button
        id="btn3"
        onClick={() => {
          setCount(0);
          changeColor("red"); // Reset → Red
        }}
      >
        Reset
      </button>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);