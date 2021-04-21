import React from 'react'
import './Header.scss'

import pizza from '../../assets/img/pizza.png'
import { Link } from 'react-router-dom'

function Header(props) {
    
    return (
        <>
        <div className="header">
            <div className="label">
                <Link to="/">
                    <img src={pizza} alt="картинка"/>
                </Link>
               
                <div>
                    <span><b>Pizza</b></span>
                </div>
            </div>
            <Link to='/basket'>
                <div className="basket">
                    <div>
                        {props.total.totalPizzas !== 0 &&
                        <b>{props.total.totalPizzas} ₽</b>
                        }
                    </div>
                    <div style={{width: 50, height: 50}}>
                        <div className="basketImg">
                            {props.total.totalPizzasCount !== 0 &&
                                <div>{props.total.totalPizzasCount}</div>
                            }
                        </div>
                    </div>
                </div>
            </Link>
        </div>
        </>
    )
}

export default Header
  