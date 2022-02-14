import React from 'react';

const Button = (props) => {
    const buttonStyles = props.css;
    return <button className={buttonStyles}>
        {props.text}
    </button>
}

export default Button;