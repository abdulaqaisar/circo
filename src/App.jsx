import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Updatecolor from "./Components/Updatecolor";
import Home from "./Pages/Home";
import Hero from "./Components/Hero";
// import Counter from "./Components/Counter";
function App() {
  // const [state, setState] = useState(true);

  return (
    <>
      <div>
        <Home />
        {/* <Updatecolor /> */}
        {/* <Navbar /> */}
        {/* <button
          onClick={() => {
            setState(!state);
          }}
        >
          Toggle{" "}
        </button>
        {state ? <Counter /> : ""} */}
      </div>
    </>
  );
}

export default App;
