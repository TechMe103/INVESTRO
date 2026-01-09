import React from 'react';
// import Hero from '../home/Hero';
import Hero from './Hero';
import Brokerage from './Brokerage';
import OpenAcc from '../OpenAcc';

function PricingPage() {
    return ( 
        <>
            <Hero/>
            <Brokerage/>
            <OpenAcc/>
        </>
    );
}

export default PricingPage;