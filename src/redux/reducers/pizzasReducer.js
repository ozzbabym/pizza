const initialState = {
    pizzas: [],
    basket: {}
}

export const pizzasReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PIZZAS':
            return { ...state, pizzas: action.pizzas }
        
        case 'SET_BASKET':
            const currentPizza = !state.basket[action.trade.id]
            ? [action.trade]
            : [...state.basket[action.trade.id].pizza, action.trade ]

            const newPizza = {
                ...state.basket,
                [action.trade.id]: {
                    pizza: currentPizza
                }
            }

            return {...state, basket: newPizza}

        default:
            return state
    }
}

export const getPizzas = (pizzas) => ({type: 'GET_PIZZAS', pizzas})
export const setBasket = (trade) => ({type: 'SET_BASKET', trade})

