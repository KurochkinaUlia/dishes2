import React from "react";
import './carousel.css';
import like from '../../jpg/like_96682.png';
import {Component} from "react";
import Rating from "../rating/rating";


class Carousel extends Component {
    render() {
        const card = this.props.img.map((item) =>

            <div className='main' key={item.id}>
                <img className='photo-carousel' src={item.img} alt='блюдо'/>
                <div className='photo-carousel supplement'>
                    <div className='common-description'>
                        <div className='name'>
                            {item.name}
                        </div>
                        <Rating rating={item.rating}
                                lol={item.id}/>
                        <div className='like-quantity'>like {item.likeQuantity}</div>
                        <div className='common-like'>
                            <div className='fon-like'>
                                <img className='icon-like'
                                     src={like}
                                     alt=''/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )


        return (
            <div>
                <div className='favorite'>Favorite Food</div>
                <div className='choice'>Выбор гурманов</div>
                <div className='card-common'>

                    {card}

                </div>
            </div>
        )
    }
}

export default Carousel;