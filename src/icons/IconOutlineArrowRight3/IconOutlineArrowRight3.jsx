/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconOutlineArrowRight3 = ({ color = "#111827", className }) => {
  return (
    <svg
      className={`icon-outline-arrow-right-3 ${className}`}
      fill="none"
      height="19"
      viewBox="0 0 19 19"
      width="19"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10.9469 4.12964L16.1969 9.37964M16.1969 9.37964L10.9469 14.6296M16.1969 9.37964L2.6969 9.37964"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

IconOutlineArrowRight3.propTypes = {
  color: PropTypes.string,
};
