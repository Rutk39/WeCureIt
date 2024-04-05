import React, { useState } from 'react';
import DualListBox from 'react-dual-listbox';
import 'react-dual-listbox/lib/react-dual-listbox.css';
import logo from '/src/assets/images/Logo.png';
import edit from '/src/assets/edit.svg';
import './AddDoctor.css'

function AddDoctor() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContact] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission, such as sending the data to your backend
        console.log("Form submitted!");
        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        console.log("Email:", email);
        console.log("Contact Number:", contactNumber);
    };
    const options = [
        { value: 'one', label: 'Cardiology' },
        { value: 'two', label: 'Pediatrics' },
        { value: 'three', label: 'Psychiatry' },
        { value: 'four', label: 'Internal Medicine' },
        { value: 'five', label: 'Obstetrics and Gynecology (OB/GYN)' },
    ];
    const [selected, setSelected] = useState([]);
    const onSubmit = (event) => {
        // Don't reload page
        event.preventDefault();
    };

    const onChange = (value) => {
        setSelected(value);
    };

  return (
   
    <div className='main-container'>
        <div className='section'>
          <div className='topBar'>
          <img src={logo} alt="WeCureIt" className='logo'/>
            <span className='logoTitle'>WeCureIT</span>
          </div>
      </div>
        <div className='main-container1'>
            <div className='content'>
                <table>
                    <tr>
                        <td> <img src={edit} alt="WeCureIt" className='edit'/></td>
                        <td className='text-1'>Add/Manage Doctor</td>
                    </tr>
                    <tr>
                        <td> <img src={edit} alt="WeCureIt" className='edit'/></td>
                        <td className='text-2'>Add/Manage Facility</td>
                    </tr>
                </table>
                
            </div>
               
                
                
        </div>
        <div className='main-container2'>
            <h1 className='h1'> Edit Doctor's Information</h1>
            <div className='nameGroup'>
                <div className='nameGroup1'>
                    <span className='text-3'>First Name</span>
                    <br></br>
                    <input
                        className='firstName'
                        type='text'
                        value={firstName}
                        placeholder='Enter First Name'
                        onChange={(e) => setFirstName(e.target.value)}
                        />
                </div>
                <div className='nameGroup2'>
                     <span className='text-3'>Last Name</span>
                     <br/>
                     <input
                        className='lastName'
                        type='text'
                        value={lastName}
                        placeholder='Enter Last Name'
                        onChange={(e) => setLastName(e.target.value)}
                        />
                </div>
                
            </div>
            <div className='margin-top20'>
                <span className='text-3'>Email Address</span>
                <br />
                <input
                        className='emailaddress'
                        type='email'
                        value={email}
                        placeholder='Enter Email'
                        onChange={(e) => setEmail(e.target.value)}
                        />
            </div>
            <div className='margin-top20'>
                <span className='text-3'>Contact Number</span>
                <br/>
                <input
                        className='contact'
                        type='number'
                        value={contactNumber}
                        placeholder='Enter Contact Number'
                        onChange={(e) => setContact(e.target.value)}
                        />
            </div>
            <div className='margin-top20'>
                <span className='text-3'>Specialities Available</span>
                <br/>
                <div className='header'>
                        <span className='text-3'>Available Specialities</span>
                </div>
                <div className='header2'>
                        <span className='text-3'> Selected Specialities</span>
                </div>
                <div className='listbox'>
                    <DualListBox
                        options={options} preserveSelectOrder
                        selected={selected}
                        onChange={(newValue) => setSelected(newValue)}     
                    />
                </div>
                <button type='submit'  className='button'>
                    <label className='text-3 text-white' onClick={handleSubmit}>Save changes</label>
                </button>
            </div>
        </div>
        <div className='main-container3'>

        </div>
    </div>
  )
}

export default AddDoctor