import React, { useState } from "react";
import "./hero.css";
import image from "../assets/abdula.png";
import { HiDotsHorizontal } from "react-icons/hi";

const Hero = ({ showshare }) => {
  const [sharetab, setsharetab] = useState("");
  return (
    <>
      <div className="hero">
        <div className="dotes">
          <HiDotsHorizontal onClick={showshare} />
        </div>
        <div className="heroimg">
          <div className="logo">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0eqsfNP8xrhvcNiZMXRa1LDIJyp_moPAHvA&usqp=CAU"
              alt=""
              id="logo"
            />
          </div>
          <img src={image} alt="img" />
        </div>
        <span className="transparent_gradient"></span>
      </div>
    </>
  );
};

export default Hero;
