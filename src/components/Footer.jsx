import React from 'react';
import ipl_logo from '../assets/ipl-logo.png'
import './footer.css'

const Footer = () => {
    return(
        <>
        <footer>
            <div className='container'>
                <div className="row">
                    <div className="rowname">
                        <div className="row">
                        <div className="col-lg-3">
                            <img src={ipl_logo} alt="ipl-logo" />
                            </div>
                            <div className="col-lg-3">
                                <h2>Teams</h2>
                                <hr />
                                <ul>
                                    <li>
                                    <a href="#">Chennai Super Kings</a>
                                    </li>
                                    <li>
                                    <a href="#">Delhi Capitals</a>
                                    </li>
                                    <li>
                                    <a href="#">Gujarat Titans</a>
                                    </li>
                                    <li>
                                    <a href="#">Kolkata Knight Riders</a>
                                    </li>
                                    <li>
                                    <a href="#">Lucknow Super Giants</a>
                                    </li>
                                    <li>
                                    <a>Mumbai Indians</a>
                                    </li>
                                    <li>
                                    <a>Punjab Kings</a>
                                    </li>
                                    <li>
                                    <a>Rajasthan Royals</a>
                                    </li>
                                    <li>
                                    <a>Royal Challengers Bangalore</a>
                                    </li>    
                                </ul>
                            </div>
                            <div className="col-lg-3">
                                <h2>ABOUT</h2>
                                <hr />
                                <ul>
                                    <li>
                                        <a href="#">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Anti Corruption Policy</a>
                                    </li>
                                    <li>
                                        <a href="#">Anti Doping Policy</a>
                                    </li>
                                    <li>
                                        <a href="#">TUE Application Form</a>
                                    </li>
                                    <li>
                                        <a href="#">Anti Discrimination Policy</a>
                                    </li>
                                    
                                </ul>
                            </div>
                            <div className="col-lg-3">
                                <h2>GUIDELINES</h2>
                                <hr />
                                <ul>
                                    <li>
                                        <a href="#">IPL Code Of Conduct For Match Officials</a>
                                    </li>
                                    <li>
                                        <a href="#">Brand And Protection Guidelines</a>
                                    </li>
                                    <li>
                                        <a href="#">Governing Council</a>
                                    </li>
                                    <li>
                                        <a href="#">Match Playing Conditions</a>
                                    </li>
                                    
                                </ul>
                            </div>
                            {/* <div className="col-lg-3">
                                <h2>CONTACT</h2>
                                <ul>
                                    <li>
                                        <a href="#">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Sponsorship</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                    
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;