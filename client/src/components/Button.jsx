import React, {Component} from 'react';
import './Button.css'

function Button(props) {
    return (
        <div className='btn solid' onClick = {props.handleClick}>
            {props.text}
        </div>
    )
}

export default Button;