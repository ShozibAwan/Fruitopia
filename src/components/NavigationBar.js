import React from "react";
function NavigationBar(){
    return(
        <div className="hero">
            <div className="navbar">
            <img src="/images/logo.png"/>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="navbar-icons">
                <img src="/images/like.png"/>
                <img src="/images/czech.png"/>

            </div>
            </div>
        </div>
    );
}

export default NavigationBar