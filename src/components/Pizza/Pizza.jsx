import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPizzas } from '../../redux/reducers/pizzasReducer'
import Button from '../Button/Button'
import Cart from '../Cart/Cart'
import './Pizza.scss'

const itemsProducts = ['все', 'Острые', 'Мясные', 'Вегетарианские']

function Pizza() {
    const dispatch = useDispatch()

    const [choice, setChoice] = useState(0)
    

    const choiceButton = (index) => {
        setChoice(index)
    }

    const pizzas = useSelector(item=> item.pizzasReducer.pizzas)
    const pizzasSort = choice === 0 ? pizzas : pizzas.filter(item=> item.typePizza === choice) 

    const pizz = useSelector(item=> console.log(item.pizzasReducer.basket))

    useEffect(() => {
        axios.get('http://localhost:3000/db.json')
        .then(item=>dispatch(getPizzas(item.data.pizza)))
    }, [])


    return (
        <div className="container-pizza">
            <div className="pizza-navigation">
                {
                    itemsProducts.map((item, index)=><Button key={index} choice={index===choice} click={()=>choiceButton(index)}>{item}</Button>)
                }
            </div>
            <div className="cart-container">
                {
                pizzasSort && pizzasSort.map(item=><Cart key={item.id} {...item} pizza={item} />)
                }
            </div>
        </div>
    )
}

export default Pizza
