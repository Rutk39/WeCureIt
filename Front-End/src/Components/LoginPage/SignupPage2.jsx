import React, {useState} from 'react';
import './SignupPage2.css';

export default function Main() {
    const [cardNumber, setCardNumber] = useState('');
    const [cardholderName, setCardholderName] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [cvv, setCVV] = useState('');
    const [expMonth, setExpMonth] = useState('');
    const [expYear, setExpYear] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission, such as sending the data to your backend
        console.log("Form submitted!");
        console.log("Card Number:", cardNumber);
        console.log("Cardholder Name:", cardholderName);
        console.log("Address Line 1:", addressLine1);
        console.log("Address Line 2:", addressLine2);
        console.log("City:", city);
        console.log("State:", state);
        console.log("Zip Code:", zipCode);
        console.log("CVV:", cvv);
        console.log("Expiration Date:", expMonth + "/" + expYear);
    };

    return (
        <div className='main-container'>
            <div className='group'>
                <div className='section' />
                <div className='box'>
                    <div className='section-2'>
                        <span className='text'>WeCureIt</span>
                        <div className='section-3'>
                            <div className='group-2'>
                                <div className='img' />
                            </div>
                        </div>
                    </div>
                    <div className='wrapper'>
                        <div className='section-4'>
                            <div className='box-2'>
                                <span className='text-2'>Login / Sign-Up</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <form onSubmit={handleSubmit}>
            <div className='section-5'>
                <div className='img-2' />
                <div className='group-3'>
                    <div className='box-3'>
                        <div className='box-4'>
                            <span className='text-3'>
                                Enter the Following to Create Your Account
                            </span>
                            <span className='text-4'>Add Payment Method</span>
                        </div>
                        <div className='group-4'>
                            <div className='wrapper-2'>
                                <span className='text-5'>Card Number</span>
                            </div>
                            <div className='carddetails'>
                                <div>
                                <input
                                        className='box-5'
                                        type='number'
                                        value={cardNumber}
                                        onChange={(e) => setCardNumber(e.target.value)}
                                        placeholder='Enter Card Number'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='wrapper-4'>
                            <div className='wrapper-5'>
                                <span className='text-7'>Cardholder Name</span>
                            </div>
                            <div className='cardholdername'>
                                <div>
                                <input
                                        className='section-8'
                                        type='text'
                                        value={cardholderName}
                                        onChange={(e) => setCardholderName(e.target.value)}
                                        placeholder='Enter Cardholder Name'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='wrapper-6'>
                            <div className='section-7'>
                                <span className='text-9'>Address</span>
                            </div>
                            <div className='addressfield'>
                                <div>
                                <input
                                        className='section-8'
                                        type='text'
                                        value={addressLine1}
                                        onChange={(e) => setAddressLine1(e.target.value)}
                                        placeholder='Enter Address Line 1'
                                    />
                                </div>
                            </div>
                            <div className='inputfield'>
                                <div>
                                <input
                                        className='section-8-1'
                                        type='text'
                                        value={addressLine2}
                                        onChange={(e) => setAddressLine2(e.target.value)}
                                        placeholder='Enter Address Line 2'
                                    />
                                </div>
                            </div>
                            <div className='group-7'>
                                <span className='text-c'>City</span>
                            </div>
                            <div className='cityname'>
                                <div>
                                <input
                                        className='box-6'
                                        type='text'
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        placeholder='City'
                                    />
                                </div>
                            </div>
                            <div className='wrapper-8'>
                                <span className='text-e'>State</span>
                            </div>
                            <div className='statename'>
                                <div>
                                <input
                                        className='section-a'
                                        type='text'
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                        placeholder='State'
                                    />
                                </div>
                            </div>
                            <div className='wrapper-a'>
                                <span className='text-10'>Zip-Code</span>
                            </div>
                            <div className='zipcode'>
                                <div>
                                <input
                                        className='wrapper-b'
                                        type='number'
                                        value={zipCode}
                                        onChange={(e) => setZipCode(e.target.value)}
                                        placeholder='Zipcode'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='box-8'>
                            <div className='wrapper-c'>
                                <div className='section-b'>
                                    <div className='box-9' />
                                </div>
                            </div>
                            <button type="submit">
                            <label className='text-12'>Create an Account</label>
                            </button>
                        </div>
                        <div className='group-9'>
                            <div className='box-a'>
                                <span className='text-13'>Have an Account</span>
                                <span className='text-14'>? </span>
                                <span className='text-15'>Login</span>
                            </div>
                        </div>
                        <div className='group-a'>
                            <div className='group-b'>
                                <span className='text-16'>CVV</span>
                            </div>
                            <div className='cvv'>
                                <div>
                                <input
                                        className='section-c'
                                        type='number'
                                        value={cvv}
                                        onChange={(e) => setCVV(e.target.value)}
                                        placeholder='CVV'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='section-d'>
                            <div className='group-d'>
                                <span className='text-18'>Exp Date</span>
                            </div>
                            <div className='section-e'>
                                <div className='month'>
                                    <div>
                                    <input
                                        className='group-e'
                                        type='number'
                                        value={expMonth}
                                        onChange={(e) => setExpMonth(e.target.value)}
                                        placeholder='mm'
                                    />
                                    </div>
                                </div>
                                <div className='year'>
                                    <div>
                                    <input
                                        className='section-f'
                                        type='number'
                                        value={expYear}
                                        onChange={(e) => setExpYear(e.target.value)}
                                        placeholder='yy'
                                    />
                                    </div>
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
