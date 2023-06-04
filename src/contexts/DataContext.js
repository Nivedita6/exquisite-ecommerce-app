import {createContext, useEffect, useReducer} from "react";
import { initialState, DataReducer } from "../Reducers/dataReducer";
import { products } from "../backend/db/products";
import { useNavigate } from "react-router-dom";
import { categories } from "../backend/db/categories";

export const DataContext = createContext();

export const DataProvider = ({children}) => {

    const [state, dispatch] = useReducer(DataReducer, initialState);
    const navigate = useNavigate();

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

    const filterByCategory = (e) => {
        dispatch( {type: "SET_FILTER_BY_CATEGORY" , payload: e.target.value})
    }

    const sortByPrice = (e) => {
        dispatch({type: "SET_PRICE_FILTER" , payload: e.target.value})
    }

    const filterByPriceRange = (e) => {
        dispatch({type: "FILTER_BY_PRICE_RANGE", payload: e.target.value})
    }

    const filterByRatings = (e) => {
        dispatch({type: "FILTER_BY_RATING" , payload: e.target.value})
    }

    const filteredProducts = state?.filterCategory?.length > 0 ? state?.products?.filter(product => state?.filterCategory?.includes(product?.category)) : state?.products

    const filteredByRatingsProducts = state?.rating === 0 ? filteredProducts : filteredProducts.filter(product => products?.rating >= state?.rating)

    const filterByPriceRangeProducts = state?.priceRange === 0 ? filteredByRatingsProducts : filteredByRatingsProducts.filter(product => product.price <= +state?.priceRange)


    const categoryClickHandler = async(categoryId) => {
        try{
            const response = await fetch(`/api/categories/${categoryId}`)
            if(response.status === 200){
                const categoryData = await response.json();
                console.log(categoryData);
                dispatch({type: "SET_FILTER_BY_CATEGORY", payload: categoryData?.categories?.categoryName})
                navigate("/products")
            }
        }catch(e){
            console.error(e);
        }
    }

    const clearFilterHandler = () => {
        dispatch({type: "CLEAR_FILTERS"});
    }

    const sortedProducts = state?.sortByPrice !== null ? filterByPriceRangeProducts?.sort((a, b) => state?.sortByPrice === "highToLow" ? b?.price - a?.price : a?.price - b?.price) : filterByPriceRangeProducts;
    const searchedProducts = state?.search !== "" ? sortedProducts?.filter(product => product?.title?.toLowerCase().includes(state?.search)) : sortedProducts;

    useEffect(() => {fetchData()}, [])

    return(
        <DataContext.Provider value = {{ searchProductHandler, categoryClickHandler, filterByCategory, filterByPriceRange, sortByPrice, filterByRatings,clearFilterHandler,   products: searchedProducts,  categories: state.categories, categoryFilter: state.categoryFilter,priceFilter: state?.sortByPrice, ratingFilter : state?.rating, search: state?.search, priceRangeFilter: state?.priceRange}}>{children}</DataContext.Provider>
    )

}