import React, { useState } from 'react';
import './SignupPage.css';

export default function SignupPage() {
  const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reenteredPassword, setReenteredPassword] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission, such as sending the data to your backend
        console.log("Form submitted!");
        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Re-entered Password:", reenteredPassword);
        console.log("Address Line 1:", addressLine1);
        console.log("Address Line 2:", addressLine2);
        console.log("City:", city);
        console.log("State:", state);
        console.log("Zip Code:", zipCode);
    };
    return (
        <div className='main-container'>
          <form onSubmit={handleSubmit}>
          <div className='wrapper'>
                <div className='section' />
                <div className='box'>
                    <div className='wrapper-2'>
                        <span className='text'>WeCureIt</span>
                        <div className='section-2'>
                            <div className='box-2'>
                                <div className='pic' />
                            </div>
                        </div>
                    </div>
                    <div className='box-3'>
                        <div className='box-4'>
                            <div className='wrapper-3'>
                                <span className='text-2'>Login / Sign-Up</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='group'>
                <div className='pic-2' />
                <div className='wrapper-4'>
                    <div className='section-3'>
                        <div className='box-5'>
                            <div className='wrapper-5'>
                                <span className='text-3'>Address</span>
                            </div>
                            <div>
                                <div>
                                <input 
                                className='box-b'
                                type='text'
                                value={addressLine1}
                                placeholder='Street Address'
                                onChange={(e) => setAddressLine1(e.target.value)}
                                />
                                </div>
                            </div>
                            <div>
                                <div>
                                <input 
                                className='box-b1'
                                type='text'
                                value={addressLine2}
                                placeholder='Apt/Unit Number'
                                onChange={(e) => setAddressLine2(e.target.value)}
                                />
                                </div>
                            </div>
                            <div className='box-6'>
                                <span className='text-6'>City</span>
                            </div>
                            <div>
                                <div>
                                <input 
                                className='section-5'
                                type='text'
                                value={city}
                                placeholder='City'
                                onChange={(e) => setCity(e.target.value)}
                                />
                                </div>
                            </div>
                            <div className='section-6'>
                                <span className='text-8'>State</span>
                            </div>
                            <div>
                                <div>
                                <input 
                                className='box-8'
                                type='text'
                                value={state}
                                placeholder='State'
                                onChange={(e) => setState(e.target.value)}
                                />
                                </div>
                            </div>
                            <div className='group-4'>
                                <span className='text-a'>Zip-Code</span>
                            </div>
                            <div>
                                <div>
                                <input 
                                className='box-9'
                                type='number'
                                value={zipCode}
                                placeholder='Zipcode'
                                onChange={(e) => setZipCode(e.target.value)}
                                />
                                </div>
                            </div>
                        </div>
                        <div className='box-a'>
                            <div className='wrapper-8'>
                                <span className='text-c'>Email address</span>
                            </div>
                            <div className='inputemail'>
                                <div>
                                <input 
                                className='box-b'
                                type='email'
                                value={email}
                                placeholder='Enter your Email'
                                onChange={(e) => setEmail(e.target.value)}
                                />
                                </div>
                            </div>
                        </div>
                        <div className='group-5'>
                            <div className='section-8'>
                                <span className='text-e'>Create a Password</span>
                            </div>
                            <div className='newpassword'>
                                <div>
                                <input 
                                className='box-b'
                                type='password'
                                value={password}
                                placeholder='Create a new password'
                                onChange={(e) => setPassword(e.target.value)}
                                />
                                </div>
                            </div>
                        </div>
                        <div className='section-9'>
                            <div className='section-a'>
                                <span className='text-10'>Re-enter a Password</span>
                            </div>
                            <div className='reenterpassword'>
                                <div>
                                <input 
                                className='box-b'
                                type='password'
                                value={reenteredPassword}
                                placeholder='Re-enter a password'
                                onChange={(e) => setReenteredPassword(e.target.value)}
                                />
                                </div>
                            </div>
                        </div>
                        <div className='section-b'>
                            <div className='group-9'>
                                <div className='box-d'>
                                    <div className='section-c' />
                                </div>
                            </div>
                            <button type="submit">
                            <label className='text-12' onClick={handleSubmit}>Next</label>
                            </button>
                            <div className='pic-3' />
                        </div>
                        <div className='section-d'>
                            <div className='box-e'>
                                <span className='text-13'>Have an Account</span>
                                <span className='text-14'>? </span>
                                <span className='text-15'>Login</span>
                            </div>
                        </div>
                        <div className='box-f'>
                            <span className='text-16'>
                                Enter the Following to Create Your Account
                            </span>
                            <span className='text-17'>Get Started Now</span>
                        </div>
                        <div className='box-10'>
                            <div className='box-11'>
                                <span className='text-18'>Last Name</span>
                            </div>
                            <div>
                                <div>
                                <input 
                                className='box-12'
                                type='text'
                                value={lastName}
                                placeholder='Enter your first name'
                                onChange={(e) => setLastName(e.target.value)}
                                />
                                </div>
                            </div>
                        </div>
                        <div className='wrapper-a'>
                            <div className='section-e'>
                            <span className='text-1a'>First Name</span> 
                            </div>
                            <div>
                                <div className='group-a'>
                                <input 
                                className='box-14'
                                type='text'
                                value={firstName}
                                placeholder='Enter your first name'
                                onChange={(e) => setFirstName(e.target.value)}
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </form>
        </div>
    );
}
