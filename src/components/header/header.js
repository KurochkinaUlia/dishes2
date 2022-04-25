import React from "react";
import './header.css';
import Navbar from "../navbar/navbar";

const Header = (props) => {

    return (
        <div className='common-header'>
            <div className='ul-menu'>
                <span className='logo'>FOOD</span>
                <Navbar />
            </div>
            <button className='button-write-to-us'>НАПИШИ НАМ</button>
        </div>
    )
}
export default Header;