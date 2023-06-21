import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Expertise from '../Expertise/Expertise';
import Success from '../Success/Success';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Expertise></Expertise>
            <Success></Success>
            <Contact></Contact>
        </div>
    );
};

export default Home;