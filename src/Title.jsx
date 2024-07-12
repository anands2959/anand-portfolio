import React from "react";
import "./style.css";

function Title() {
  return (
    <>
      <div className="wrapper">
        <div className="title">
          <img src="./src/logo.png" alt="" />
        </div>

        

        <svg width="100%" height="100%">
          <text x="50%" y="50%" dy=".35em" textAnchor="middle">
            AKS
          </text>
        </svg>
        <p> &#169; Copyright || 2024 || all rights reseverd || The Anand</p>
        
      </div>
      
    </>
  );
}

export default Title;
