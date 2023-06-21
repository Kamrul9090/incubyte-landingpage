import React from 'react';
import './banner.css';
import imgBanner from '../../assets/images/Creative-team-pana-1.png';
import ellipse from '../../assets/images/Ellipse 1-1.png';
import ellipse1 from '../../assets/images/Ellipse 1.png';
import ellipse2 from '../../assets/images/Ellipse 2.png';
const Banner = () => {
    return (
        <div className='bg-banner'>
            <div className='banner-body'>
                <h1 className='banner-header'>Welcome to <span className='text-color'>incubyte</span></h1>
                <p>Building bridges to success in the tech ecosystem.</p>
                <img className='banner-img' src={imgBanner} alt="" srcset="" />
            </div>
            <div>
                <img className='banner-img_tow' src={ellipse} alt="" srcset="" />
                <img className='banner-img_three' src={ellipse1} alt="" srcset="" />
                <img className='banner-img_four' src={ellipse2} alt="" srcset="" />
            </div>
        </div>
    );
};

export default Banner;