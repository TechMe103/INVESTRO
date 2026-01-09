import React from 'react';
import Hero from './Hero';
import LeftSec from './LeftSec';
import RightSec from './RightSec';
import Universe from './Universe';

function ProductPage() {
    return ( 
        <>
            <Hero/>
            <LeftSec 
            imageURL="/media/kite.png" 
            productName="Kite" 
            productDescription="Our flagship trading platform, Kite, offers a sleek and modern interface with advanced AI capabilities. It is designed to provide a seamless trading experience, ensuring you stay ahead in the market."
            tryDemo="" 
            learnMore="" 
            />

            <RightSec
            imageURL="/media/console.png" 
            productName="Console" 
            productDescription="The central dashboard for your Investro account. Gain insights into your trades and investments with in-depth reports and visualisations."
            tryDemo="" 
            learnMore="" 
            />

            <LeftSec 
            imageURL="/media/coin.png" 
            productName="Coin" 
            productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
            tryDemo="" 
            learnMore="" 
            />

            <RightSec
            imageURL="media/kiteconnect.png"
            productName="Kite Connect API"
            productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
            tryDemo=""
            learnMore=""
            />

            <LeftSec
            imageURL="media/varsity.png"
            productName="Varsity mobile"
            productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
            tryDemo=""
            learnMore=""
            
            />

            

            <p className='text-center mt-5 mb-5 text-muted'>Want to know more about our technology stack? check out the investro.tech blog</p>

            
            <Universe/>
        </>
    );
}


export default ProductPage;