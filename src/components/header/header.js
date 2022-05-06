import React from "react";
import './header.css';
import Navbar from "../navbar/navbar";
import {NavLink} from "react-router-dom";
import Button from "../personalСomponents/button/button";

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
            <NavLink to='/add-recipe'>
            <Button text = {'ДОБАВИТЬ РЕЦЕПТ'}/>
            </NavLink>
        </div>
    )
}
export default Header;