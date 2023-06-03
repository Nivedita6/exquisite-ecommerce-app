import {createContext, useEffect, useReducer} from "react";
import { initialState, DataReducer } from "../Reducers/dataReducer";
import { products } from "../backend/db/products";

export const DataContext = createContext();

export const DataProvider = ({children}) => {

    const [state, dispatch] = useReducer(DataReducer, initialState);
    const fetchData = async() => {
        try{
            const productResponse = await fetch("/api/products");
            if(productResponse.status === 200){
                const productData = await productResponse.json();
                dispatch({type: "SET_PRODUCTS", payload: productData?.products})
            }
            
            const categoryResponse = await fetch("/api/categories");
            if(categoryResponse.status === 200){
                const categoryData = await categoryResponse.json();
                dispatch({type: "SET_CATEGORIES", payload: categoryData?.categories})
            }
            
        }catch(error){
            console.error(error);
        }
        
    }

    const searchProductHandler = (e) => {
        dispatch({ type : "SET_SEARCH", payload : e.target.value })
    }
    const searchedProducts = state?.search !== "" ? products?.filter(product => product?.title?.toLowerCase().includes(state?.search)) : products;

    useEffect(() => {fetchData()}, [])

    return(
        <DataContext.Provider value = {{ searchProductHandler,  products: searchedProducts,  categories: state.categories, search: state?.search}}>{children}</DataContext.Provider>
    )

}