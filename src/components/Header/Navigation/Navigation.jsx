import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import Button from '../../Button/Button'

import './Navigation.scss'

const itemsProducts = ['все', 'Pizza', 'Sushi', 'Wok']

function Navigation() {
    const [choice, setChoice] = useState(0)

    const choiceButton = (index) => {
        setChoice(index)
        
    }
    
    return (
        <div className='navigation'>
            {
                itemsProducts.map((item, index)=><Link key={index} to={`/${item === 'все' ? '' : item}`}><Button choice={index===choice} click={()=>choiceButton(index)}>{item}</Button></Link>)
            }
        </div>
    )
}

export default Navigation
