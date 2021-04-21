import './App.scss';
import Header from './components/Header/Header';
import { Route } from 'react-router';
import Pizza from './components/Pizza/Pizza'
import Basket from './components/Basket/Basket';
import { useSelector, useDispatch } from 'react-redux'
import { setTotalAll } from './redux/reducers/pizzasReducer'
import React from 'react'

function App() {
    

    let pizza = useSelector(item=> item.pizzasReducer.basket).map(item=> JSON.stringify(item))
    pizza = pizza.filter(function(item, pos) {
        return pizza.indexOf(item) === pos;
    })
    pizza = pizza.map(item=>JSON.parse(item))
    
    
    

    const totalPizzasCount = pizza.map(item=> item.count).reduce((value, sum)=> value+sum,0)
    const totalPizzas = pizza.map(item=> item.price).reduce((value, sum)=> value+sum,0)

    
    
    
    

  return (
    <div className="App">
        <div className="wrapper">
            <Header total={{totalPizzasCount,totalPizzas}}/>
            <Route path='/basket' render={()=><Basket  pizzas={pizza} total={{totalPizzasCount,totalPizzas}} />} exact/>
            <div>
              <Route path='/' render={()=><Pizza/>} exact/>
            </div>
            

        </div>
    </div>
  );
}

export default App;
