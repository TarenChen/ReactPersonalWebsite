import React from 'react'
import './Navbar.css'


function Navbar(){
    return(
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <div className="container">
                    <a className="navbar-brand" href="index.html"><strong>Taren Chen</strong></a>
                        <div class="navbar-nav nav justify-content-center">
                            <a className="nav-item nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            <a className="nav-item nav-link" href="#about">About</a>
                            <a className="nav-item nav-link" href="#education">Education</a>
                            <a className="nav-item nav-link" href="#experiences">Experiences</a>
                            <a className="nav-item nav-link" href="#contact">Contact</a>
                        </div>
                    </div>
                </nav>
            </div>
    )
}
export default Navbar;