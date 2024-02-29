import React from "react";
import { Frame } from 'react-frame-component';
//import { PropertyDefault } from "./PropertyDefault";
//import { TopBar } from "./TopBar";
import "./login.css";

export const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="div-2">
        <img className="chris-lee" alt="Image" src="Front-End/src/assets/LoginImg.png" />
        <div className="group-wrapper">
          <div className="group">
            <div className="div-wrapper">
              <div className="text-wrapper-7">Welcome back!</div>
            </div>
            <p className="p">Enter your Credentials to access your account</p>
            <Frame className="frame-instance" text="Enter your email" />
            <Frame className="frame-55-instance" text="Password" />
            <div className="don-t-have-an-wrapper">
              <p className="don-t-have-an">
                <span className="span">Don’t have an account?&nbsp;&nbsp;</span>
                <span className="text-wrapper-8">Sign Up</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
