const initialState = {
    pizzas: [],
    basket: [],
    totalCount: 0,
    totalPizza: 0
    
}



export const pizzasReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PIZZAS':
            return { ...state, pizzas: action.pizzas }
        
        case 'SET_BASKET':
            return {...state, basket: [...state.basket, action.trade]}

        case 'TOTAL_ALL':
            return {...state, totalPizza: action.total.totalPizzas, totalCount: action.total.totalPizzasCount  }
        case 'ADD_COUNT':
            const newItems = state.basket.map(item=>{
                if(item.id===action.item.id && item.size === action.item.size){
                    const price = state.pizzas.filter(value=> value.id === item.id)
                    return {...item, count: item.count+1, price: item.price + price[0].price }
                }else{ 
                    return{...item}
                }
           })
            return {...state, basket: newItems  }
        case 'DEL_COUNT':
            const newItem = state.basket.map(item=>{
                if(item.count>1 && item.id===action.item.id && item.size === action.item.size){
                    const price = state.pizzas.filter(value=> value.id === item.id)
                    return {...item, count: item.count-1, price: item.price - price[0].price }
                }else{ 
                    return{...item}
                }
           })
            return {...state, basket: newItem  }
        case 'DEL_PIZZA':
            return {...state, basket:  state.basket.filter(item=>!(item.id === action.item.id && item.size === action.item.size && item.type === action.item.type))}
        case 'DEL_ALL_BASKET':
            return {...state, basket: []}
            
        default:
            return state
    }
}

export const getPizzas = (pizzas) => ({type: 'GET_PIZZAS', pizzas})
export const setBasket = (trade) => ({type: 'SET_BASKET', trade})
export const setTotalAll = (total) => ({type: 'TOTAL_ALL', total})
export const addCountPizza = (item) => ({type: 'ADD_COUNT', item})
export const delCountPizza = (item) => ({type: 'DEL_COUNT', item})
export const delPizza = (item) => ({type: 'DEL_PIZZA', item})
export const delAllBasket = () => ({type: 'DEL_ALL_BASKET'})

