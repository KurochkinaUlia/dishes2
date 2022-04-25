import React from "react";
import './navbar.css';

const Navbar = () => {
    return (
        <div className='common-navbar'>
            <div className='ul-menu'>
                <div className='li-menu'>
                    Меню</div>
                <div className='li-menu'>
                   Истории
                </div>
                <div className='li-menu'>
                    Контакты
                </div>
            </div>
        </div>
        )
}
export default Navbar;