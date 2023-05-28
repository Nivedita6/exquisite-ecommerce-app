import {createContext, useEffect, useState} from "react";

export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [productData, setProductData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);

    const fetchData = async() => {
        try{
            const productResponse = await fetch("/api/products");
            const productData = await productResponse.json();
            
            setProductData(productData);

            const categoryResponse = await fetch("/api/categories");
            const categoryData = await categoryResponse.json();
            setCategoryData(categoryData);
            
        }catch(error){
            console.error(error);
        }
        
    }

    useEffect(() => {fetchData()}, [])

    return(
        <DataContext.Provider value = {{productData, categoryData}}>{children}</DataContext.Provider>
    )

}