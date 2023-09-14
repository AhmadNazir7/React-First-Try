import React from "react";
// First way to Load Image
// import airbnblogos from "../images/logo (2).png"

export default function Navbar(){
    return(
        <nav className="navbar">
            {/* This is the Second way to upload image */}
            <img src={require('../images/logo (2).png')} className="airbnbLogo"/>
        </nav>
    )
}