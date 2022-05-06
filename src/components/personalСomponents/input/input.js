import React from "react";
import './input.css';

const Input = (props) => {

    const placeholder = props.placeholder || '';
    const type = props.type || 'text';

     return (
        <div>
            <input className='input-my'
            placeholder={placeholder}
                   type={type}
            />
        </div>
    )
}

export default Input;