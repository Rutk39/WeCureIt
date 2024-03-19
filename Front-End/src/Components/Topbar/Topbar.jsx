import React from 'react';
import './Topbar.css';

export default function Main() {
    return (
        <div className='main-container'>
            <div className='section' />
            <div className='box'>
                <div className='wrapper'>
                    <span className='text'>WeCureIt</span>
                    <div className='wrapper-2'>
                        <div className='box-2'>
                            <div className='img' />
                        </div>
                    </div>
                </div>
                <div className='box-3'>
                    <div className='section-2'>
                        <div className='wrapper-3'>
                            <span className='text-2'>Login / Sign-Up</span>
                        </div>
                    </div>
                </div>
                <div className='wrapper-4'>
                    <span className='text-3'>About</span>
                    <span className='text-4'>Facility</span>
                    <span className='text-5'>Doctors</span>
                </div>
            </div>
        </div>
    );
}
