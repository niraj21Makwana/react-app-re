import React from "react";
// import ReactDOM  from "react";
import './index.css';


function Heading(){
    const fname = "Niraj";
    return(
        <>
    <div className='firstbox'>
        <div className='contaner'>
            <div className='heading'>
                <h1>Hello {fname}</h1>
            </div>
                <i className="fas fa-bars" id="ham-menu"></i>
            <div className='navbar'>
                <ul id="nav-bar">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Profile</li>
                    <li>Logout</li>
                </ul>
            </div>
        </div>
    </div>
    </>
    ); 
}
export default Heading;