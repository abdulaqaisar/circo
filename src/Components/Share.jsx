import React, { useState } from "react";
import "./share.css";
import { FiShare, FiTarget } from "react-icons/fi";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineReportProblem } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Share = ({ showshare }) => {
  const openChrome = () => {
    window.open("https://www.w3schools.com", "_blank");
  };
  return (
    <>
      <div className="section">
        <div className="cross">
          <RxCross2 onClick={showshare} />
        </div>
        <div className="name">
          <h3>Hafiz Abdullah</h3>
        </div>
        <div className="shareprofile">
          <div className="group">
            <FiShare style={{ fontSize: "x-large" }} />
            <h3> Share this profile</h3>
          </div>

          <MdOutlineArrowForwardIos onClick={openChrome} className="arrow" />
        </div>
        <div className="shareprofile">
          <div className="group">
            <MdOutlineReportProblem style={{ fontSize: "x-large" }} />

            <h3> Report this profile</h3>
          </div>
          <MdOutlineArrowForwardIos className="arrow" onClick={openChrome} />
        </div>
        <div className="section1">
          <div className="profile1">
            <h3>Create your Ciro Profile</h3>
            <p>Your mini-site digital business card</p>
          </div>
          <div className="buttons">
            <a href="https://abc.com/" target="_blank">
              <button className="cff">Create for free</button>
            </a>
            <a href="https://abc.com/" target="_blank">
              <button className="lm">Learn More</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Share;
