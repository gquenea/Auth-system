import React from "react";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import "../styles/Body.css";

const home = () => {
  return (
    <div className="main">
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default home;
