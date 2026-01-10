import React from 'react';
import { useNavigate } from 'react-router-dom';

function OpenAcc() {
    return ( 
        <div className="container p-5 mb-5">
            <div className='row text-center'>
                
                <h1 className='mt-5' style={{color: "blue"}} >
                    Open a Investro Account
                </h1>
                <p>
                    Modern platform for investing in stocks, ETFs, and cryptocurrencies, with a user-friendly interface and advanced trading tools.
                </p>
                
                <button className= 'p-2 btn btn-primary' style={{width:"40%" , margin:"0 auto"}} >Signup Now</button>

            </div>
        </div>
    );
}

export default OpenAcc;