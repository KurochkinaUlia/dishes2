import React from "react";
import './rating.css';


const Rating = (props) => {

    const ratings = Array(5).fill(5).map((item, num) => {
        if (props.rating > num) {
            return <div key={num} className="star star-filled" ></div>
        }
        return <div key={num + item}  className="star"></div>
    })

    return (
        <div key={props.lol} className='stars' >
            {ratings}
        </div>
    )
}

export default Rating;