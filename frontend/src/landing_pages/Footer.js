import React from 'react';


function Footer() {
    return (
        <footer  style={{backgroundColor: "#e3f2fd"}}> 
        <div className='container border-top mt-5' >
            <div className='row mt-5'>
                <div className='col'>
                    <img src="media/InvestroLogo.png" style={{ width: "50%"}}></img><br/><br/>
                    <p><i class="fa-regular fa-copyright"></i> 2025 Investro Broking Ltd. All rights reserved</p>
                </div>

                <div className='col'>
                    <p>Company</p><br/><br/>
                    <a href='' style={{textDecoration: 'None'}}>About</a> <br/><br/>
                    <a href='' style={{textDecoration: 'None'}}>Products</a><br/><br/>
                    <a href='' style={{textDecoration: 'None'}}>Pricing</a><br/><br/>
                    <a href='' style={{textDecoration: 'None'}}>Referral Programme</a><br/><br/>
                    <a href='' style={{textDecoration: 'None'}}>Careers</a><br/><br/>
                    <a href='' style={{textDecoration: 'None'}}>Investro.tech</a><br/><br/>
                    <a href='' style={{textDecoration: 'None'}}>Press & media</a><br/><br/>
                    <a href='' style={{textDecoration: 'None'}}>Investro cares</a><br/><br/>

                </div>

                <div className='col'>
                    <p>Support</p><br/><br/>
                    <a href='' style={{textDecoration: 'None'}}>Contact</a> <br/><br/>
                    <a href='' style={{textDecoration: 'None'}}>Support Portal</a><br/><br/>
                    <a href='' style={{textDecoration: 'None'}}>Z-Connect portal</a><br/><br/>
                    <a href='' style={{textDecoration: 'None'}}>List of charges</a><br/><br/>
                    <a href='' style={{textDecoration: 'None'}}>Downloads and resources</a><br/><br/>
                    

                </div>

                <div className='col'>
                    <p>Account</p><br/><br/>
                    <a href='' style={{textDecoration: 'None'}}>Open an Account</a> <br/><br/>
                    <a href='' style={{textDecoration: 'None'}}>Fund transfer</a><br/><br/>
                    <a href='' style={{textDecoration: 'None'}}>60 day challenge</a><br/><br/>
                    
                </div>
            </div>

            <p className='text-muted' style={{textAlign: 'center'}}><i class="fa-solid fa-heart"></i> Made by team Ctrl Alt Defeat</p>
        </div>
        </footer>
    );
}


export default Footer;