import React from "react";
import './navbar.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className='common-navbar'>
            <div className='ul-menu'>
                <div className='li-menu'>
                    <NavLink to='/menu'>МЕНЮ</NavLink></div>
                <div className='li-menu'>
                   <NavLink to='/stories'>ИСТОРИИ</NavLink>
                </div>
                <div className='li-menu'>
                    <NavLink to='/contacts'>КОНТАКТЫ</NavLink>
                </div>
            </div>
        </div>
        )
}
export default Navbar;