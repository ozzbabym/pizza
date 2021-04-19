import React from 'react'
import './Header.scss'

import pizza from '../../assets/img/pizza.png'
import sushi from '../../assets/img/sushi.png'
import wok from '../../assets/img/wok.png'
import basket from '../../assets/img/basket.png'
import Navigation from './Navigation/Navigation'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
        <div className="header">
            <div className="label">
                <Link to="/Pizza">
                    <img src={pizza} alt="картинка"/>
                </Link>
                <Link to="/Sushi">
                    <img src={sushi} alt="картинка"/>
                </Link>
                <Link to="/Wok">
                    <img src={wok} alt="картинка"/>
                </Link>
                <div>
                    <span><b>Pizza Sushi Wok</b></span>
                </div>
            </div>
            <Link to='/basket'>
                <div className="basket">
                    <div>
                        <b>555 р</b>
                    </div>
                    <div>
                        <img src={basket} alt="картинка"/>
                    </div>
                </div>
            </Link>
        </div>
        </>
    )
}

export default Header
  