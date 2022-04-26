import React from "react";
import './footer.css';
import {Component} from "react";


class Footer extends Component {
    render() {

        const itemArray = this.props.footer.map((item) =>

            <div className='logo-network' key={item.id}>
                <div className='network'>
                    <img className='icon' src={item.icon} alt='icon'/>
                </div>
            </div>
        )
        return (

            <div className='common-footer'>
                <footer className='footer'>
                    <div className='common-network'>
                        <div className='logo-footer'>FOOD</div>
                        <div className='icon-network'>{itemArray}</div>
                    </div>

                    <div>
                        <div className='h3'>Меню</div>
                        <div className='menu-footer'>
                            <div>Первые блюда</div>
                            <div>Вторые блюда</div>
                            <div>Салаты</div>
                            <div>Закуски</div>
                            <div>Выпечка</div>
                            <div>Десерты</div>
                        </div>
                    </div>

                    <div>
                        <div className='h3'>Обо всем</div>
                        <div className='menu-footer'>
                            <div>Истории блюд</div>
                            <div>Истории продуктов</div>
                            <div>Кулинарные лайфХаки</div>
                        </div>
                    </div>

                    <div className='common-newsletter'>
                        <div className='h3'>Новостная рассылка</div>
                        <input placeholder='  Введите Ваш e-mail:'
                               className='newsletter-footer'/>
                        <button className='button-write-to-us add'>ПОДПИСАТЬСЯ</button>

                    </div>
                </footer>

                <div className='footer-footer'>
                    <div className='copyright-footer'>
                        Copyright © 2022 Kurochkina Y.P. All Rights Reserved.
                    </div>

                </div>
            </div>
        )
    }
}

export default Footer;