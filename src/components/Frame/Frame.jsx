/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Frame = ({ className, text = "Name", hasFrame = true, frameClassName, hasDiv = true }) => {
  return (
    <div className={`frame ${className}`}>
      {hasFrame && (
        <div className="name-wrapper">
          <div className="name">{text}</div>
        </div>
      )}

      <div className={`frame-wrapper ${frameClassName}`}>
        <div className="div">{hasDiv && <div className="text-wrapper">{text}</div>}</div>
      </div>
    </div>
  );
};

Frame.propTypes = {
  text: PropTypes.string,
  hasFrame: PropTypes.bool,
  hasDiv: PropTypes.bool,
};
