import React from 'react';
import './logo.css';


export default function Logo() {
    return (
        <div className="logo-container">
            <img className='logo' src={require('../bitalert.png')} alt='bitalert logo' />
            <p className="instructions">BitAlert constantly monitors the price of bitcoin and will notify you via SMS or email based on the alert you set.
                Alerts will need to be set each day and will only trigger once.
                To set a new alert enter your phone number or email and a price that you would like to be notified at.
                When the market price drops below that you will recieve an SMS or email notification.
            </p>
        </div>
    );
}
