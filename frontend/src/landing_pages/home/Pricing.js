import React from 'react';

function Pricing() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3' style={{color: "blue"}}>Unbeatable Pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in india. flat fees and no hidden charges</p>
                    <a href='' style={{textDecoration: "None"}}>See Pricing</a>

                </div>

                <div className='col-2 '></div>
                <div className='col-6 '>
                    <div className='row text-center'>
                        <div className='col p-2 border'>
                            <h1><i class="fa-solid fa-indian-rupee-sign"></i>0</h1>
                            <p>Free equity delivery<br/> and mutual funds</p>
                        </div>
                        <div className='col p-2 border'>
                            <h1><i class="fa-solid fa-indian-rupee-sign"></i>20</h1>
                            <p>Free equity delivery <br/>and mutual funds</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Pricing;