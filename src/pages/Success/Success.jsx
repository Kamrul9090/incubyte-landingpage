import React from 'react';
import './success.css';
import img from '../../assets/images/Ellipse 2.png';
const Success = () => {
    return (
        <div className='bg-success'>
            <img src={img} alt="" srcset="" />
            <div className='bg-success-body'>
                <h1>Success Stories.</h1>
                <p>Over the years, we have helped numerous startups successfully establish their captive development centers. Join the roster of our successful collaborations.</p>
            </div>
        </div>
    );
};

export default Success;