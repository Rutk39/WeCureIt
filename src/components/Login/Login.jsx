/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ButtonPrimaryWith } from "../ButtonPrimaryWith";
import "./style.css";

export const Login = ({
  property1,
  className,
  buttonPrimaryWithButtonPrimaryWithClassName,
  buttonPrimaryWithText = "Login / Sign-Up",
}) => {
  return (
    <div className={`login ${property1} ${className}`}>
      <ButtonPrimaryWith
        className={buttonPrimaryWithButtonPrimaryWithClassName}
        divClassName={`${property1 === "signup-btn" ? "class-5" : property1 === "variant-3" ? "class-6" : "class-7"}`}
        hasIcon={property1 === "variant-3" ? false : undefined}
        text={buttonPrimaryWithText}
      />
    </div>
  );
};

Login.propTypes = {
  property1: PropTypes.oneOf(["signup-btn", "variant-3", "clicked"]),
  buttonPrimaryWithText: PropTypes.string,
};
