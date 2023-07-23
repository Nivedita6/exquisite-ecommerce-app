import {createContext, useEffect, useReducer, useState} from "react";
import { initialState, DataReducer } from "../Reducers/dataReducer";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext();

export const DataProvider = ({children}) => {

    const [state, dispatch] = useReducer(DataReducer, initialState);
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    const fetchData = async() => {
        try{
            setLoader(true);
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
            setLoader(false);
            
        }catch(error){
            setLoader(false);
            console.error(error);
        }
        
    }

    const getProductDetails = async(productId) => {
        try{
            const response = await fetch(`/api/products/${productId}`)
            if(response.status === 200){
                const productDetailData = await response.json();
                dispatch({type: "SET_PRODUCT_DETAILS" , payload: productDetailData?.product})
                navigate(`/products/${productId}`);
            } 
        }catch(e){
            console.error(e);
        }
    }

    const categoryClickHandler = async(categoryId) => {
        dispatch({type: "RESET_FILTERS", payload: []})
        try{
            const response = await fetch(`/api/categories/${categoryId}`)
            if(response.status === 200){
                const categoryData = await response.json();
                dispatch({type: "SET_CATEGORY_FILTER", payload: categoryData?.category?.categoryName})
                navigate("/products")
            }
        }catch(e){
            console.error(e);
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

    const filteredProducts = state?.categoryFilter?.length > 0 ? state?.products?.filter(product => state?.categoryFilter?.includes(product?.category)) : state?.products

    const filteredByRatingsProducts = state?.rating === 0 ? filteredProducts : filteredProducts.filter(product => product?.rating >= state?.rating)

    const filterByPriceRangeProducts = state?.priceRange === 0 ? filteredByRatingsProducts : filteredByRatingsProducts.filter(product => product.price <= +state?.priceRange)

    const sortedProducts = state?.sortByPrice !== null ? filterByPriceRangeProducts?.sort((a, b) => state?.sortByPrice === "highToLow" ? b?.price - a?.price : a?.price - b?.price) : filterByPriceRangeProducts;

    const searchedProducts = state?.search !== "" ? sortedProducts?.filter(product => product?.title?.toLowerCase().includes(state?.search)) : sortedProducts;

    const clearFilterHandler = () => {
        dispatch({type: "CLEAR_FILTERS"});
    }


    

    useEffect(() => {fetchData()}, [])

    return(
        <DataContext.Provider value = {{ loader, searchProductHandler, categoryClickHandler, filterByCategory, filterByPriceRange, sortByPrice, filterByRatings,clearFilterHandler,   products: searchedProducts,  categories: state.categories, categoryFilter: state.categoryFilter,priceFilter: state?.sortByPrice, ratingFilter : state?.rating, search: state?.search, priceRangeFilter: state?.priceRange}}>{children}</DataContext.Provider>
    )

}