import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Trust from './Trust';
import Pricing from './Pricing';
import Education from './Education';
// import Navbar from '../Navbar';
import OpenAcc from '../OpenAcc';
// import Footer from '../Footer';

function HomePage() {
    return ( 
        <>
            {/* <Navbar/> */}
            <Hero/>
            <Awards/>
            <Trust/>
            <Pricing/>
            <Education/>  
            <OpenAcc/>  
            {/* <Footer/> */}

        </>
    );
}

export default HomePage;