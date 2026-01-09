import React from 'react';

function LeftSec({
    imageURL, // Add this line
    productName, 
    productDescription,
    tryDemo , 
    learnMore,
}) {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-3'>
                    <img src={imageURL} alt={productName} />
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1 style={{color: "blue"}}>{productName} </h1>
                    <p>{productDescription}</p>
                    <a href={tryDemo}>Try Demo</a><br/>
                    <a href={learnMore}>Learn More</a>
                    
                </div>
                
            </div>
        </div>
    );
}

export default LeftSec;
