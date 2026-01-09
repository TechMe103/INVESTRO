import React from 'react';

function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-6 col-sm-2 p-5'>
                    {/* <img src='media/largestBroker.svg'></img> */}
                    <img src='https://cdni.iconscout.com/illustration/premium/thumb/business-analytics-illustration-download-in-svg-png-gif-file-formats--financial-analysis-report-strategy-project-management-marketing-pack-illustrations-8348592.png?f=webp'></img>
                </div>
                <div className='col-lg-6 p-5'>
                    <h1 style={{color:"blue"}}>Stock broker in India</h1>
                    <p> EduTrade clients contribute to over volumes in India daily by trading and investing in :)</p>
                    <ul>
                        <li>Futures and options</li>
                        <li>Commodity derivatives</li>
                        <li>Currency derivatives</li>
                        <li>Stocks & IPO</li>
                        <li>Direct mutual funds</li>
                        <li>Bonds and growth</li>
                    </ul>

                </div>

            </div>
        </div> 
    );
}
export default Awards;