import React from "react";
import { Buttons } from "../../components/Buttons";
import { CompanyNameIcon } from "../../components/CompanyNameIcon";
import { Login } from "../../components/Login";
import "./style.css";

export const UserEditProfile = () => {
  return (
    <div className="user-edit-profile">
      <div className="div-2">
        <div className="edit-profile">
          <div className="edit-profile-2">
            <div className="text-wrapper-4">Edit Profile</div>
            <img className="edit" alt="Edit" src="/img/edit.svg" />
          </div>
        </div>
        <div className="edit-payment-method">
          <div className="div-3">
            <div className="text-wrapper-5" onClick={editpayment}>Edit Payment Method</div>
            <img className="edit" alt="Edit" src="/img/edit-1.svg" />
          </div>
        </div>
        <div className="edit-saved">
          <div className="div-3">
            <div className="text-wrapper-5" onClick={editsavedpreference}>Edit Saved Preferences</div>
            <img className="edit" alt="Edit" src="/img/edit-2.svg" />
          </div>
        </div>
        <div className="edit-profile-3">
          <div className="group">
            <div className="overlap-group-2">
              <div className="div-wrapper">
                <div className="text-wrapper-6">Edit Profile</div>
              </div>
              <div className="frame-3">
                <div className="input">First Name</div>
                <div className="frame-4">
                  <input className="frame-5" placeholder="Enter your First Name" type="text" />
                </div>
              </div>
              <div className="frame-6">
                <div className="input">Last Name</div> 
                <div className="frame-7">
                  <input className="frame-8" placeholder="Enter your Last Name" type="text" />
                </div>
              </div>
            </div>
            
            
            <div className="frame frame-55">
              <div className="name-wrapper">
                <div className="name">Re-enter a password</div>
              </div>
              <div className="frame-wrapper undefined">
                  <input className="text-wrapper-8" type="text"/>
              </div>
            </div>
            
            <div className="frame frame-instance">
              <div className="name-wrapper">
                <div className="name">Reset Password</div>
              </div>
              <div className="frame-wrapper undefined">
                  <input className="text-wrapper-8" type="text"/>
              </div>
            </div>

            <div className="frame frame-55-instance">
              <div className="name-wrapper">
                <div className="name">Enter your email</div>
              </div>
              <div className="frame-wrapper undefined">
                  <input className="text-wrapper-8" type="text"/>
              </div>
            </div>

            
            <div className="frame-9">
              <div className="frame-10">
                <div className="text-wrapper-7">Address</div>
              </div>
              <div className="frame-11">
                
                 <input className="text-wrapper-8" placeholder=" Address Line 1" type="text" />
                
              </div>
              <div className="frame-13">
                
                <input className="text-wrapper-8" placeholder=" Address Line 2" type="text" />
                
              </div>
              <div className="frame-14">
                <div className="text-wrapper-7">City</div>
              </div>
              <div className="frame-15">
                <div className="frame-12">
                <input className="text-wrapper-8" placeholder=" City Name" type="text" />
                </div>
              </div>
              <div className="frame-16">
                <div className="text-wrapper-7">State</div>
              </div>
              <div className="frame-17">
                <div className="frame-12">
                <input className="text-wrapper-8" placeholder=" State Name" type="text" />
                </div>
              </div>
              <div>
              <div  className="zipcode"> Zipcode</div>
              </div>
              
              <div className="frame-18">
                <div className="frame-12">
                <input className="text-wrapper-8" placeholder="Zip-Code" type="text" />
                </div>
              </div>
            </div>
            <button className="button">
              <div className="next">Save</div>
              <img className="img" alt="Arrow" src="/img/arrow-1-1.svg" />
            </button>
          </div>
          <Buttons
            className="buttons-instance"
            createAnAccountClassName="buttons-2"
            frameFrameClassName="design-component-instance-node"
            property1="variant-6"
            text="Save Changes"
          />
        </div>
        <div className="top-bar">
          <div className="top-bar-background" />
          <div className="frame-19">
            <CompanyNameIcon
              className="company-name-icon-instance"
              divClassName="company-name-icon-2"
              medicalCross2StyleOverrideClassName="company-name-icon-3"
            />
            <div className="profile" />
            <Login
              buttonPrimaryWithButtonPrimaryWithClassName="login-instance"
              buttonPrimaryWithText="Log out"
              className="create-appointment"
              property1="variant-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const editpayment = () => {
  //change the code to the real page of edit payment 
  window.location.href = "/editpayment";
  console.log("transfer to edit payment")
};

const editsavedpreference = () =>{
  //change the code to redirect to the real page of edit saved preference
  window.location.href = "/editpreference";
  console.log("transfer to editpayment")
}