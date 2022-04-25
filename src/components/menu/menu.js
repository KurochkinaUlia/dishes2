import React from "react";
import './menu.css';
import {Component} from "react";


class Menu extends Component {


    render() {
        let clItemMenu = 'item-menu';
        const itemMenu = this.props.decorationMenu.map((item) =>

            <div className='common-menu' key={item.id}>
                <div className='shell-menu'>
                    <div className={`${clItemMenu}  ${item.color}`}></div>
                    <div className='circle-menu'>
                        <img className='icon-menu'
                             src={item.icon}
                            alt='icon'
                        />
                    </div>
                    <div className='name-menu'>{item.name}</div>
                </div>
            </div>
        )
        return (
            <div>
                <div className='heading-menu'>Menu</div>
                <div className='common'>
                    {itemMenu}
                </div>
            </div>
        )
    }

}

export default Menu;