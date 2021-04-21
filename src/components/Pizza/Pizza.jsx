import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPizzas } from '../../redux/reducers/pizzasReducer'
import Button from '../Button/Button'
import Cart from '../Cart/Cart'
import './Pizza.scss'
import $ from 'jquery'
import pizzasDB from '../../DB/db'

const itemsProducts = ['все', 'Острые', 'Мясные', 'Вегетарианские']

function Pizza() {
    $('#modal').fadeOut(0)
    const dispatch = useDispatch()

    const [choice, setChoice] = useState(0)
    

    const choiceButton = (index) => {
        setChoice(index)
    }

    const pizzas = useSelector(item=> item.pizzasReducer.pizzas)
    const pizzasSort = choice === 0 ? pizzas : pizzas.filter(item=> item.typePizza === choice) 


    useEffect(() => {
        dispatch(getPizzas(pizzasDB.pizza))
    }, [])

    
    const modalAdd = () => {
        $('#modal').fadeIn(100)
        $('#modal').fadeOut(300)
    }

    return (
        <div className="container-pizza">
            <div className="pizza-navigation">
                {
                    itemsProducts.map((item, index)=><Button key={index} choice={index===choice} click={()=>choiceButton(index)}>{item}</Button>)
                }
            </div>
            <div className="cart-container">
                {
                pizzasSort && pizzasSort.map(item=><Cart key={item.id} {...item} pizza={item} modal={modalAdd}/>)
                }
            </div>
        <div id="modal" className="modalAddShow">
                <div>
                    Добавлено
                </div>
            </div>
        </div>
    )
}

export default Pizza
