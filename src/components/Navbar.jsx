import React from "react";
import { Link } from "react-router-dom";
import ipl_logo from '../assets/ipl-logo.png'
import './style.css'

export const Navbar = () => {
    return(
        <>
        
        <nav>
        <Link to="/" className="item">
        <div className="logo">
          <img height="30" width="50" src={ipl_logo} alt="ipl-logo" />
        </div>
      </Link>
            <div className="link-sec">
            <Link to='/'>Home</Link>
            {/* <Link to='teams'>Teams</Link> */}
            <div class="dropdown">
                <span>Teams</span>
                <div class="dropdown-content">
                    <Link to='teams'>Male</Link>
                    <Link to='WomenTeam'>Women</Link>
                    </div>
                    </div>

            <Link to='about'>About</Link>
            <Link to='contact'>Contact</Link>
            </div>
            
            
        </nav>
        </>
    )
}