import React from 'react';

const Button = (props) => {
    const buttonStyles = props.css;
    return <button onClick={() => props.onClick?.()} className={buttonStyles}>
        {props.img && <img className='inline mx-4 w-8 h-8' src={props.img} alt="logo" />}
        {props.text}
    </button>
}

export default Button;