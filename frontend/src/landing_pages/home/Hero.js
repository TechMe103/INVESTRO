import React from 'react';

function Hero() {
    return ( 
        <div className="container p-5 mb-5">
            <div className='row text-center'>
                {/* <img src='media/homeHero.png' alt='Hero Image'className='mb-5'/> */}
                <img src='https://cdni.iconscout.com/illustration/premium/thumb/man-trading-in-stock-market-4487035-3738442.png' alt='Hero Image'className='mb-5'/>
                <h1 className='mt-5' style={{color: "blue"}} >
                    Invest in everything all in one place.
                </h1>
                <p>
                    Online platform for investing in stocks, ETFs, and cryptocurrencies, with a user-friendly interface and advanced trading tools.
                </p>
                
                <button className= 'p-2 btn btn-primary' style={{width:"40%" , margin:"0 auto"}}> Get started </button> 
                <button className= 'p-2 btn btn-primary' style={{width:"40%" , margin:"0 auto"}}>Signup Now</button>

            </div>
        </div>
    );
}

export default Hero;