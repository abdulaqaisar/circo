import React from "react";
import "./create.css";
import { FiShare, FiTarget } from "react-icons/fi";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineReportProblem } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
const Create = () => {
  return (
    <>
      <div className="section">
        <div className="cross">
          <RxCross2 />
        </div>
        <div className="name">
          <h3>Hafiz Abdullah</h3>
        </div>
        <div className="shareprofile">
          <div className="group">
            <FiShare style={{ fontSize: "x-large" }} />
            <h3> Share this profile</h3>
          </div>

          <MdOutlineArrowForwardIos className="arrow" />
        </div>
        <div className="shareprofile">
          <div className="group">
            <MdOutlineReportProblem style={{ fontSize: "x-large" }} />

            <h3> Report this profile</h3>
          </div>

          <MdOutlineArrowForwardIos className="arrow" />
        </div>
        <div className="section1">
          <div className="profile1">
            <h3>Create your Ciro Profile</h3>
            <p>Your mini-site digital business card</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
