export const initialState = {
    products: [],
    categories: [],
    cart: [],
    search: "",
    filterCategory : [],
    rating: 0,
    sortByPrice: "",
    priceRange: 0
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

        case "SET_FILTER_BY_CATEGORY":
            return {...state, filterCategory : state?.filterCategory.includes(action.payload) ? state?.filterCategory.filter(category => category !== action.payload) : [...state?.filterCategory , action.payload]}

        case "FILTER_BY_PRICE_RANGE":
            return {...state, priceRange: action.payload}

        case "SET_PRICE_FILTER":
            return {...state, sortByPrice: action.payload}

        case "FILTER_BY_RATING":
            return {...state, rating: action.payload}

        case "CLEAR_FILTERS":
            return {...state, filterCategory: [], sortByPrice: "", rating: 0, priceRange: 0, search: ""}
        default:
            return state
    }
}