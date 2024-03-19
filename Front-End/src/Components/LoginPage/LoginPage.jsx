import React, { useState } from 'react';
import './LoginPage.css';
//import Image from './LoginImg.png';

export default function Main() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div className='main-container'>
            <div className='section'>
                <div className='box' />
                <div className='group'>
                    <div className='group-2'>
                        <span className='text'>WeCureIt</span>
                        <div className='group-3'>
                            <div className='section-2'>
                                <div className='pic'></div>
                            </div>
                        </div>
                    </div>
                    <div className='wrapper'>
                        <div className='group-4'>
                            <div className='group-5'>
                                <span className='text-2'>Login / Sign-Up</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='box-2'>
                <div className='section-3'>
                    <div className='box-3'>
                        <span className='text-3'>Welcome back!</span>
                    </div>
                    <span className='text-4'>
                        Enter your Credentials to access your account
                    </span>
                    <div className='box-4'>
                        <div className='wrapper-2'>
                            <span className='text-5'>Email address</span>
                        </div>
                        <div className='inputfield'>
                            <div className='wrapper-3'>
                                <input
                                    className='section-4'
                                    type='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='Enter your email'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='section-5'>
                        <div className='section-6'>
                            <span className='text-7'>Password</span>
                        </div>
                        <div className='inputpassword'>
                            <div className='section-7'>
                                <input
                                    className='wrapper-4'
                                    type='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder='Password'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='group-6'>
                        <div className='box-5'>
                            <div className='box-6'>
                                <div className='wrapper-5' />
                            </div>
                        </div>
                        <button className='box-6 button' onClick={handleLogin}>
                            <label className='text-9'>Login</label>
                            </button>
                    </div>
                    <div className='group-7'>
                        <div className='group-8'>
                            <span className='text-a'>Don’t have an account? </span>
                            <span className='text-c'>Sign Up</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pic-2'></div>
        </div>
    );
}