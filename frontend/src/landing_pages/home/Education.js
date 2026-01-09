import React from 'react';

function Education() {
    return ( 
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-6' >
                    <img src="media/education.svg"/>

                </div>
                <div className='col-6 mt-5'>
                    <h1 className='mb-3' style={{color: "blue"}}>Free and Open market education</h1>
                    <p>Varsity the online stock market education book in the world covering everything form the basics to advanced trading</p>
                    <a href='' style={{textDecoration: "None"}}>Versity</a>
                    <br/><br/>
                    <p>Trading Q&A , the most active trading and investment community in india for all your market related queries</p>
                    <a href='' style={{textDecoration: "None"}}>Trading Q&A</a>
                </div>
            </div>
        </div>
    );
}

export default Education;