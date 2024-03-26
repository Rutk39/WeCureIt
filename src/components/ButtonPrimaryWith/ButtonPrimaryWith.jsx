/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconOutlineArrowRight3 } from "../../icons/IconOutlineArrowRight3";
import "./style.css";

export const ButtonPrimaryWith = ({ className, divClassName, text = "Button name", hasIcon = true }) => {
  return (
    <div className={`button-primary-with ${className}`}>
      <div className="frame-2">
        <div className={`button-name ${divClassName}` } onClick={handleClick}>{text}</div>
        {hasIcon && (
          <div className="icon" onClick={handleClick}>
            <IconOutlineArrowRight3 className="icon-outline-arrow" color="#F9FAFB" />
          </div>
        )}
      </div>
    </div>
  );
};
const handleClick = () => {
  //change the address to the actual homepage or login page to redirect
  window.location.href = "/login";
};

ButtonPrimaryWith.propTypes = {
  text: PropTypes.string,
  hasIcon: PropTypes.bool,
};
