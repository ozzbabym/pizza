import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setBasket } from '../../redux/reducers/pizzasReducer'
import Button from '../Button/Button'
import './Cart.scss'



function Cart({pizza, imageUrl, namePizza, description, type, size, price }) {
    const [sizeChoice, setSizeChoice] = useState(0)
    const [doughChoice, setDoughChoice] = useState(0)

    const dispatch = useDispatch()


    const addPizza = () => {
        dispatch(setBasket({...pizza, size: sizeChoice,type: doughChoice}))
    }

    return (
        <div className="cartContainer">
            <div className="cart">
                <img src={imageUrl} alt="картинка" />
                <div className='name-pizza'>
                    <h3>{namePizza}</h3>
                </div>
                <div className="description">
                    {description}
                </div>
                <br />
                <div className="change-container">
                    <div className="change-size">
                        {size.map((size, index) => <div key={size} className={sizeChoice === index ? "activeSize" : ""} onClick={() => setSizeChoice(index)}>{size} см</div>)}
                    </div>
                    <div className="change-dough">
                        {type.map((item, index) =>
                            <div key={item} className={doughChoice === index ? "activeSize" : ""} onClick={() => setDoughChoice(index)}>{item === 0 ? 'тонкое' : 'традиционное'}</div>
                        )}

                    </div>

                </div>
                <br />
                <div className="priceAndButton">
                    <div><b>от {price} ₽</b></div>
                    <div>
                        <Button click={addPizza}>Добавить</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
