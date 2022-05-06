import React from "react";
import './button.css';

const Button = (props) => {
    const text = props.text || ''
    return (
        <div>
            <button className='button-write-to-us'>{text}</button>
        </div>
    )
}
export default Button;