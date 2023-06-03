export const initialState = {
    products: [],
    categories: [],
    cart: [],
    search: ""
}

export const DataReducer = (state, action) => {
    switch(action.type){
        case "SET_CATEGORIES" :
            return {...state, categories: action.payload}

        case "SET_PRODUCTS" :
            return {...state, products: action.payload}

        case "SET_PRODUCT_DETAILS":
            return {...state, productDetail : action.payload}

        case "ADD_CART":
            return {...state, cart: action.payload}

        case "UPDATE_CART":
            return {...state, cart: action.payload}

        case "DELETE_CART":
            return {...state, cart: action.payload}

        case "SET_SEARCH" :
            return {...state, search: action.payload}

        default:
            return state
    }
}