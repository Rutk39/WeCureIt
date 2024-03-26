/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { MedicalCross2 } from "../../icons/MedicalCross2";
import "./style.css";

export const CompanyNameIcon = ({ className, divClassName, medicalCross2StyleOverrideClassName }) => {
  return (
    <div className={`company-name-icon ${className}`}>
      <div className={`text-wrapper-3 ${divClassName}`}>WeCureIt</div>
      <MedicalCross2 className={medicalCross2StyleOverrideClassName} />
    </div>
  );
};
