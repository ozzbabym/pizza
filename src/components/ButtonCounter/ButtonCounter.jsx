import React from 'react'
import "./ButtonCounter.scss"

function ButtonCounter(props) {
    return (
        <div onClick={props.click} className="buttonCounter">
            {props.children}
        </div>
    )
}

export default ButtonCounter
