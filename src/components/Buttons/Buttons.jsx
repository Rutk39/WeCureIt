/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Buttons = ({
  className,
  text,
}) => {
 

  return (
    <div
      className={`buttons ${className}`}
    >
      <div className="overlap-group">
        
      <div className="savediv"onClick ={handleClick}>
        <div className="divwrapper">{text}</div>
      </div>

      
      </div>
    </div>
  );
};


const handleClick = () => {
  //change the code to submit the info to the backend databse 
  console.log("substitude to real button function")
};
Buttons.propTypes = {
  
  text: PropTypes.string,
};
