import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setBasket, addCountPizza } from '../../redux/reducers/pizzasReducer'
import Button from '../Button/Button'
import './Cart.scss'

const pricePizzaSize = [0, 50, 100]
const pricePizzaType = [0, 50]

function Cart({modal, pizza, imageUrl, namePizza, description, type, size, price }) {
    const [sizeChoice, setSizeChoice] = useState(0)
    const [doughChoice, setDoughChoice] = useState(0)
    
    const dispatch = useDispatch()
    
    const pizzasBasket = useSelector(item=> item.pizzasReducer.basket)
    
   
    const addPizza = () => {
        modal()
        dispatch(setBasket({...pizza, size: size[sizeChoice],type: doughChoice, price: price+pricePizzaSize[sizeChoice]+pricePizzaType[doughChoice]}))
    }

    return (
        <div className="cartContainer">
            <div className="cart">
                <img src={imageUrl} alt="картинка" />
                <div className='name-pizza'>
                    <h3>{namePizza}</h3>
                </div>
                <div className="descriptionpizza">
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
                    <div><b>от {price+pricePizzaSize[sizeChoice]+pricePizzaType[doughChoice]} ₽</b></div>
                    <div>
                        <Button click={addPizza}>Добавить</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
