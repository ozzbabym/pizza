import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCountPizza, delCountPizza, delPizza, delAllBasket } from '../../redux/reducers/pizzasReducer'
import Button from '../Button/Button'
import ButtonCounter from '../ButtonCounter/ButtonCounter'
import ButtonDel from '../ButtonDel/ButtonDel'
import './Basket.scss'
import trash from '../../assets/img/trash.png'
import trashShop from '../../assets/img/basketShop.png'

function Basket(props) {
    const dispatch = useDispatch()

    const addCount = (e) => {
        dispatch(addCountPizza(e))
    }
    const delCount = (e) => {
        dispatch(delCountPizza(e))
    }
    
    const pizzaDel = (e) => {
        if(window.confirm('Вы хотите удалить пиццу?')){
        dispatch(delPizza(e))
    }
    }

    const allDel = () => {
        if(window.confirm('Вы действительно хотите отчистить корзину?')){
        dispatch(delAllBasket())
        }
    }

    const pay = (e) => {
       console.log(e)
    }
    
    return (
        <>
        {props.total.totalPizzasCount === 0 ?
            <div className="basketHomeContainer">
                <div className="basketHome">
                    <img  src={trashShop} alt=""/>
                </div>
                <div className="titleEmptyBasket">
                    <h1>Ваша корзина пуста!</h1>
                </div>
                <div className="footerMob">
                    <div>
                        <Link to="/"><Button>Вернуться назад</Button></Link>
                    </div> 
                </div>
            </div>
            
        : props.total.totalPizzasCount > 0 &&
        <div>
            <div className="trashbox">
                <div>
                    <img src={trash} onClick={allDel} alt="картинка"/><div>отчистить корзону</div>
                </div>
                </div>
                <img src="" alt=""/>
            <div className="container_basket">
                {props.pizzas.map((item, index) =>

                <div key={index} className="block_order">
                    <div>
                        <img src={item.imageUrl} alt="картинка"/>
                    </div>

                    <div className="description">
                        <div>
                            <h3>{item.namePizza}</h3>
                        </div>
                        <div >
                            {item.description}
                        </div>
                        <div style={{margin: "10px 0px"}}>
                            
                        <b> тесто  {item.type === 0 ? 'тонкое' : 'традиционное'}</b>
                          
                        </div>
                        <div>
                           <b>{item.size} см</b>
                        </div>
                    </div>

                    <div className="counter">
                        <ButtonCounter click={() => delCount(item)}>-</ButtonCounter>
                        <h4><b>{item.count}</b></h4>
                        <ButtonCounter click={() => addCount(item)}>+</ButtonCounter>
                    </div>
                    
                    <div className="total">
                           <b> Итого {item.price} ₽ </b>
                    </div>
                    <div className="delItem">
                        <ButtonDel click={() => pizzaDel(item)}>x</ButtonDel>
                    </div>
                </div>
                )}
                <div className="footer">
                    <div>
                        <Link to="/"><Button>Вернуться назад</Button></Link>
                    </div> 
                    <div className="alltotalprice">
                        <h2>Итого: {props.total.totalPizzas} ₽</h2>
                    </div> 
                    <div>
                    <Button click={()=>pay(props.pizzas)}>Оплатить</Button>
                    </div>
                </div>
            </div>
        </div>
}
        </>
    )
}

export default Basket
