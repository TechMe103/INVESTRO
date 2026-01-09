import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
    return (
    <header style={{ backgroundColor: "#e3f2fd"}}>
    <div className="container">
        
        <nav class="navbar navbar-expand-lg border-bottom" >
        <div class="container-fluid">
            <Link class="navbar-brand" to="/">
            <img src="media/investroLogo.png" style={{width: "25%"}} alt="logo"/>
            </Link>
            
            <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <Link class="nav-link active" to="/signup">
                Signup
                </Link>
                <Link class="nav-link active" to="/about">
            About
                </Link>
                <Link class="nav-link active" to="/products">
                Products
                </Link>
                <Link class="nav-link active" to="/pricing">
            Pricing
                </Link>
                <Link class="nav-link active" to="/support">
                Support
                </Link>

                <Link class="nav-link active" to="/assistant">
                AI Assistant
                </Link>
                
            </div>
            </div>
        </div>
        </nav>
    </div>
    </header>
    );
}

export default Navbar;

