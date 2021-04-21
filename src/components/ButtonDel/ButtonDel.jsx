import React from 'react'
import './ButtonDel.scss'

function ButtonDel(props) {
    return (
        <div onClick={props.click} className="buttonDel">
            {props.children}
        </div>
    )
}

export default ButtonDel
