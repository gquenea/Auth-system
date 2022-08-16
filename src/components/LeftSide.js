import React from "react";
import "../styles/LeftSide.css";

const LeftSide = () => {
  return (
    <div className="leftside">
      <div className="title">
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Culpa
          ex minus voluptatem deserunt eligendi cum?
        </p>
      </div>
      <div className="socialmedia">
        <img src="logos/twitter.png" alt="logo twitter" />
        <img src="logos/facebook.png" alt="logo de facebook" />
        <img src="logos/instagram.png" alt="logo d'instagram" />
      </div>
    </div>
  );
};

export default LeftSide;
