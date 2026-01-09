import React from 'react';

function Team() {
    return ( 
        <div className='container'>
            <div className='row'>
                <h1 className='text-center' style={{ color: "blue" }}>Team</h1><br/><br/>
                
                <div className='col-6'>
                    <div className="card" style={{ width: "50%", height: "30%", marginLeft: "25%" }}>
                        <img src="media/team_mem1.jpg" className="card-img-top" alt="team_mem1" style={{borderRadius: "10%"}}/>
                        <div className="card-body">
                            <p className="card-text">
                                <h3 style={{color: 'blue'}}>Sanika Salunkhe.</h3><br/> A full stack developer with a passion for creating innovative solutions.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='col-6'>
                    <div className="card" style={{ width: "50%", height: "30%", marginLeft: "25%" }}>
                        <img src="media/team_mem2.jpeg" className="card-img-top" alt="team_mem2" style={{borderRadius: "10%"}}/>
                        <div className="card-body">
                            <p className="card-text">
                                <h3 style={{color: 'blue'}}>Sampada Kanginkar.</h3><br/> A frontend developer with a passion for creating innovative solutions.
                            </p>
                        </div>
                    </div>
                </div>
                <br/><br/>

                <p>Connect on <a href=''>HomePage</a> / <a href=''>TradingQ&A</a> / <a href=''>Twitter</a></p>

            </div>
        </div>
    );
}

export default Team;
