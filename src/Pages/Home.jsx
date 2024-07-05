import { useState } from "react";
import "./home.css";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import Contact from "../Components/Contact";
import Share from "../Components/Share";
import Create from "../Components/Create";
const Home = () => {
  const [name, setname] = useState();
  const [disply, setdisply] = useState(false);
  const showshare = () => {
    setdisply(!disply);
  };

  return (
    <>
      <div className="homemain" style={{ position: "relative" }}>
        {/* <Create /> */}
        <Hero showshare={showshare} />
        <Info />
        <Contact />
        <div
          className="shareC"
          style={
            disply ? { position: "absolute", top: 0 } : { display: "none" }
          }
        >
          <Share showshare={showshare} />
        </div>
      </div>
    </>
  );
};

export default Home;
