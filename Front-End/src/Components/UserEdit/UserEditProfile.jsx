import React, { useState } from 'react';
import styles from './UserEditProfile.module.css';

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
const handleClick = () => {
    //change the address to the actual homepage or login page to redirect
    window.location.href = "/login";
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
  return (
    <div className={styles['main-container']}>

        
         <div  className={styles['top-bar']}>
               <div  className={styles['frame']}>      
               <div className={styles['main-container2']}>
     <span className={styles['we-cure-it']}>WeCureIt</span>
     <div className={styles['vector']} />
   </div>
                 <div  className={styles['create-appointment-button']}>
                   <button  className={styles['create-appointment-btn']} onClick={handleClick}>
                     <div  className={styles['frame-1']}>
                       <span  className={styles['create-new-appointment']}>
                            Log out            
                       </span>
                     </div>
                   </button>
                 </div>
                 <div  className={styles['profile']}>
                   <div  className={styles['unsplash-ctagwpbqg']} />
                 </div>
               </div>
             </div>
      

      
      <div className={styles['edit-profile-information']}>
        <div className={styles['group-2']}>
          <div className={styles['frame-3']}>
            <div className={styles['frame-4']}>
              <span className={styles['address']}>Address</span>
            </div>

            <div className={styles['frame-5']}>
              <div className={styles['frame-6']}>
              <input className={styles["input" ]}
                 value={address1}
                 onChange={(e) => setaddress1(e.target.value)}
                 placeholder=" Address Line 1" type="text" />
              </div>
            </div>
            <div className={styles['frame-7']}>
              {/* <div className={styles['frame-8']}> */}
              <input className={styles["input" ]}
                value={address2}
                onChange={(e) => setaddress2(e.target.value)}
                placeholder=" Address Line 2" type="text" />
              {/* </div> */}
            </div>
            <div className={styles['frame-a']}>
              <span className={styles['city']}>City</span>
            </div>
            <div className={styles['frame-b']}>
              <div className={styles['frame-c']}>
              <input className={styles["input"]} 
                value={city}
                onChange={(e) => setcity(e.target.value)}
                placeholder=" City Name" type="text" />
              </div>
            </div>
            <div className={styles['frame-d']}>
              <span className={styles['state']}>State</span>
            </div>
            <div className={styles['frame-e']}>
              <div className={styles['frame-f']}>
              <input className={styles["input"]} 
                value={state}
                onChange={(e) => setstate(e.target.value)}
                placeholder=" State Name" type="text" />
              </div>
            </div>
            <div className={styles['frame-10']}>
              <span className={styles['zip-code']}>Zip-Code</span>
            </div>
            <div className={styles['frame-11']}>
              <div className={styles['frame-12']}>
              <input className={styles["input"]} 
                value={zipcode}
                onChange={(e) => setzipcode(e.target.value)}
                placeholder="Zip-Code" type="text" />
              </div>
            </div>
          </div>
          <div className={styles['frame-14']}>
            <div className={styles['frame-15']}>
              <span className={styles['email-address']}>Email address</span>
            </div>
            <div className={styles['frame-16']}>
              <div className={styles['frame-17']}>
              <input className={styles["input" ]}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  type="text"/>
              </div>
            </div>
          </div>
          <div className={styles['frame-18']}>
            <div className={styles['frame-19']}>
              <span className={styles['reset-password']}>Reset Password</span>
            </div>
            <div className={styles['frame-1a']}>
              <div className={styles['frame-1b']}>
              <input className={styles["input" ]}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Reset password"
                  type="text"/>
              </div>
            </div>
          </div>
          <div className={styles['frame-1d']}>
            <div className={styles['frame-1e']}>
              <span className={styles['name']}>Re-enter a Password</span>
            </div>
            <div className={styles['frame-1f']}>
              <div className={styles['frame-20']}>
              <input className={styles["input" ]}
                  value={repassword}
                  onChange={(e) => setrepassword(e.target.value)}
                  placeholder="Re-enter password"
                  type="text"/>
              </div>
            </div>
          </div>
          <div className={styles['buttons']}>
            <span className={styles['next']}>Save </span>
            <div className={styles['arrow']} />
          </div>
          <div className={styles['frame-21']}>
            <span className={styles['edit-profile']}>Edit Profile</span>
          </div>
          <div className={styles['frame-22']}>
            <div className={styles['frame-23']}>
              <span className={styles['name-24']}>Last Name</span>
            </div>
            <div className={styles['frame-25']}>
              <div className={styles['frame-26']}>
              <input className={styles["input"]} 
                  value={lastname}
                  onChange={(e) => setlastname(e.target.value)}
                  placeholder="Enter your Last Name" type="text" />
              </div>
            </div>
          </div>
          <div className={styles['frame-28']}>
            <div className={styles['frame-29']}>
              <span className={styles['first-name']}>First Name</span>
            </div>
            <div className={styles['frame-2a']}>
              <div className={styles['frame-2b']}>
              <input className={styles["input" ]}
                  type='text'
                  value={firstname}
                  onChange={(e) => setfirstname(e.target.value)}
                  placeholder="Enter your First Name" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles['buttons-2c']} >
          <button className={styles['frame-2d']} onClick ={handleSubmit} >
            <div className={styles['frame-2e']}>
              <div className={styles['frame-2f']} />
            </div>
          </button>
          <span className={styles['save-changes']} onClick ={handleSubmit}>Save Changes</span>
        </div>
      </div>
      <span className={styles['edit-profile-30']}>Edit Profile</span>
      <img className={styles['edit']} alt = "Edit" src = '/src/assets/edit.svg'/>
      <span className={styles['edit-payment-method']} onClick={editpayment} >Edit Payment Method</span>
      <img className={styles['edit-31']} alt = "Edit" src = '/src/assets/edit-1.svg'/>
      <span className={styles['edit-saved-preferences']} onClick={editsavedpreference}>Edit Saved Preferences</span>
      <img className={styles['edit-32']} alt = "Edit" src = '/src/assets/edit-2.svg'/>
    </div>
  );
}


