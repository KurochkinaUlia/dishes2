import React from "react";
import './header.css';
import Navbar from "../navbar/navbar";
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return (
        <div className='common-header'>
            <div className='ul-menu'>
                <span >
                    <NavLink className='logo'
                        to='/main'>FOOD</NavLink>
                    </span>
                <Navbar />
            </div>
            <button className='button-write-to-us'>ДОБАВИТЬ РЕЦЕПТ</button>
        </div>
    )
}
export default Header;