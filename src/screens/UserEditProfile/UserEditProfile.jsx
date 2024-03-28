import React from "react";
import { CompanyNameIcon } from "../../components/CompanyNameIcon";
import { Login } from "../../components/Login";
import "./style.css";
import React, { useState } from 'react';

export const UserEditProfile = () => {
  console.log("This is a line written to the console.");
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [repassword, setrepassword] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address1, setaddress1] = useState('');
  const [address2, setaddress2] = useState('');
  const [city, setcity] = useState('');
  const [state, setstate] = useState('');
  const [zipcode, setzipcode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, such as sending the data to your backend
    console.log("Form submitted!");
    console.log("First Name:", firstname);
    console.log("Last Name:", lastname);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Re-entered Password:", repassword);
    console.log("Address Line 1:", address1);
    console.log("Address Line 2:", address2);
    console.log("City:", city);
    console.log("State:", state);
    console.log("Zip Code:", zipcode);
};

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
          <form onSubmit={handleSubmit}>
          <div className="group">
            <div className="overlap-group-2">
              <div className="div-wrapper">
                <div className="text-wrapper-6">Edit Profile</div>
              </div>
              <div className="frame-3">
                <div className="input">First Name</div>
                <div className="frame-4">
                  <input className="frame-5" 
                  type='text'
                  value={firstname}
                  onChange={(e) => setfirstname(e.target.value)}
                  placeholder="Enter your First Name" />
                </div>
              </div>
              <div className="frame-6">
                <div className="input">Last Name</div> 
                <div className="frame-7">
                  <input className="frame-8" 
                  value={lastname}
                  onChange={(e) => setlastname(e.target.value)}
                  placeholder="Enter your Last Name" type="text" />
                </div>
              </div>
            </div>
            
           
            
            <div className="frame-55">
              <div className="name-wrapper">
                <div className="name">Re-enter a password</div>
              </div>
              <div className="framewrapper">
                  <input className="text-wrapper-8" 
                  value={repassword}
                  onChange={(e) => setrepassword(e.target.value)}
                  type="text"/>
              </div>
            </div>
            
            <div className="frame frame-instance">
              <div className="frame name-wrapper">
                <div className="name">Reset Password</div>
              </div>
              <div className="framewrapper">
                  <input className="text-wrapper-8" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="text"/>
              </div>
            </div>

            <div className="frame frame-55-instance">
              <div className="frame name">
                <div className="name">Enter your email</div>
              </div>
              <div className="framewrapper">
                  <input className="text-wrapper-8" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"/>
              </div>
            </div>

            
            <div className="frame-9">
              <div className="frame-10">
                <div className="text-wrapper-7">Address</div>
              </div>
              <div className="frame-11">
                
                 <input className="text-wrapper-8" 
                 value={address1}
                 onChange={(e) => setaddress1(e.target.value)}
                 
                 placeholder=" Address Line 1" type="text" />
                
              </div>
              <div className="frame-13">
                <input className="text-wrapper-8" 
                value={address2}
                onChange={(e) => setaddress2(e.target.value)}
                placeholder=" Address Line 2" type="text" />
              </div>
              <div className="frame-14">
                <div className="text-wrapper-7">City</div>
              </div>
              <div className="frame-15">
                <div className="frame-12">
                <input className="text-wrapper-8" 
                value={city}
                onChange={(e) => setcity(e.target.value)}
                placeholder=" City Name" type="text" />
                </div>
              </div>
              <div className="frame-16">
                <div className="text-wrapper-7">State</div>
              </div>
              <div className="frame-17">
                <div className="frame-12">
                <input className="text-wrapper-8" 
                value={state}
                onChange={(e) => setstate(e.target.value)}
                placeholder=" State Name" type="text" />
                </div>
              </div>
              <div>
              <div  className="zipcode"> Zipcode</div>
              </div>
              
              <div className="frame-18">
                <div className="frame-12">
                <input className="text-wrapper-8" 
                value={zipcode}
                onChange={(e) => setzipcode(e.target.value)}
                placeholder="Zip-Code" type="text" />
                </div>
              </div>
            </div>
            
          </div>
          

          <div className="buttons-instance">
          <div className="overlap-group">
            <div className="savediv"onClick ={handleSubmit}>
              <div className="divwrapper" onClick ={handleSubmit}>Save Changes</div>
            </div>
          </div>
          </div>
          
          </form>
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

