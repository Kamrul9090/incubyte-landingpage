import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header>
            <div>
                <h1>Incubyte</h1>
            </div>
            <nav>
                <ul>
                    <li className='list-item'><a href='/'>About Us</a>
                    </li>
                    <li className='list-item'><a href='/'>Our Expertise</a></li>
                    <li className='list-item'><a href='/'>Success Stories</a></li>
                    <li className='list-item'><a href='/'>Contact Us</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;