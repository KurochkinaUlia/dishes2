import React from "react";
import './App.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Menu from "./components/menu/menu";
import Carousel from "./components/carousel/carousel";
import {Component} from "react";
import img1 from './jpg/photoOne.png'
import img2 from './jpg/photoTwo.png'
import img3 from './jpg/photoThree.png'
import img4 from './jpg/iconBreakfast.png';
import img5 from './jpg/iconLunch.png';
import img6 from './jpg/iconDinner.png';
import img7 from './jpg/iconSnack.png';
import img8 from './jpg/dessert.png';
import whatsapp from './jpg/logo_whatsapp_telephone_handset_icon_143174.png';
import youtube from './jpg/logo_youtube_icon_143199.png';
import instagram from './jpg/logo_instagram_icon_143177.png';
import vkontakte from './jpg/logo_vk_vkontakte_icon_143187.png';
import telegram from './jpg/logo_telegram_airplane_air_plane_paper_airplane_icon_143170.png'
import {BrowserRouter, Route,} from "react-router-dom";
import Favicon from "react-favicon";
import fIcon from './jpg/FIcon.ico';



class App extends Component {
    state = {
        carousel: [
            {id: 1, img: img1, name: 'Панкейки', likeQuantity: 48341, rating: 3},
            {id: 2, img: img2, name: 'Рататуй', likeQuantity: 589, rating: 5},
            {id: 3, img: img3, name: 'Фрикасе', likeQuantity: 1587, rating: 4}
        ],
        decorationMenu: [
            {id: 1, color: 'colorBreakfast', name: 'Завтраки', icon: img4},
            {id: 2, color: 'colorLunch', name: 'Обеды', icon: img5},
            {id: 3, color: 'colorDinner', name: 'Ужины', icon: img6},
            {id: 4, color: 'colorSnack', name: 'Перекусы', icon: img7},
            {id: 5, color: 'colorDessert', name: 'Десерты', icon: img8},

        ],
        footer: [
            {id: 1, icon: whatsapp},
            {id: 5, icon: telegram},
            {id: 2, icon: youtube},
            {id: 3, icon: instagram},
            {id: 4, icon: vkontakte}
        ]
    }

    render() {
        return (
            <div className='app-common'>
                <Favicon url={fIcon}/>
                <Header array={this.state.carousel}/>
                <div className='content'>
                    <Route path='/main' render={() =>
                        <>
                            <div className='flex-common block-menu'>
                                <Menu decorationMenu={this.state.decorationMenu}/>
                            </div>
                            <div className='flex-common'>
                                <Carousel img={this.state.carousel}/>
                            </div>
                        </>
                    }/>

                    <Route path='/menu' render={() =>
                        <div className='flex-common block-menu'>
                            <Menu decorationMenu={this.state.decorationMenu}/>
                        </div>
                    }/>
                </div>
                <div className='footer-app'>
                <Footer footer={this.state.footer}/>
                </div>
            </div>

        )
    }
}

export default App;



