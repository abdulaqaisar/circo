import React from "react";
import "./info.css";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

const Info = () => {
  return (
    <>
      <div className="details">
        <h1>Hafiz Abdullah</h1>
        <div>
          <p>Fonder & CEO</p>
          <p>XYZ Solutions</p>
          <p>Lahore,Pakistan</p>
        </div>
        <div className="btnarea">
          <button className="btn">Save Contact</button>
          <div className="hiout">
            <p>
              <HiOutlineSwitchHorizontal />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
