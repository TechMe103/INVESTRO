import React from 'react';

function Trust() {
    return ( 
        <div className='container p-5'>
            <div className='row p-5 '>
                <div className='col-6 p-5'>
                    <h2 className="mb-5" style={{color:"blue"}}> Trust with confidence </h2>
                    <h4>Customer-first always</h4>
                    <p className='text-muted'>That's why customers trust Investro with $3.5+ crores worth of equity investment</p>

                    <h4>No spam or gimmicks</h4>
                    <p className='text-muted'>No gimmicks, spam, "gamification" , or annoying push notifications. High quality apps that you use at your pacee, the way you like.</p>

                    
                    <h4>Investro Universe</h4>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in fintech startups offer you tailored services specific to your needs</p>

                    
                    <h4>Do better with money</h4>
                    <p className='text-muted'>With intiatives like nudge and kill switch , we don't just faciliate transactions, but actively help you to do better with your money</p>
            
            </div>
            <div className='col-6 p-5'>
                {/* <img src="media/ecosystem.png" alt="Ecosystem" style={{width:"120%"}} /> */}
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/stock-trading-8054838-6465726.png?f=webp" alt="Ecosystem" style={{width:"120%"}} />
                <div className='text-center'>
                    <a href=''  className='mx-5' style={{textDecoration: "None"}}>Explore our products </a>
                    <a href='' style={{textDecoration: "None"}}>Try demo</a>
                </div>
            </div>
            </div>

        </div>
    );
}

export default Trust;