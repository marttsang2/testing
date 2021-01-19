import React from 'react'

const Button = (props) => {
    return (
        <button onClick={props.onButtonClick}>{props.text}</button>
    )
}

export default Button
