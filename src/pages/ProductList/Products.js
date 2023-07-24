import { FilterPage } from "./FilterPage";
import "./Products.css";
import { ProductCard } from "./ProductCard";
import { useContext, useEffect } from "react";
import { DataContext } from "../../contexts/DataContext";
import {Loader} from "../../components/Loader/Loader";

export const Products = () => {
    
    const {products, categoryFilter, filteredProducts,  loader} = useContext(DataContext);
    
   
    useEffect(() => {
        console.log(products)
        console.log(categoryFilter)
        console.log(filteredProducts)
    })

    return (
        <div className="product-main-container">
            <FilterPage />
            <div className="product-list-container">
                {loader && <Loader />}
                {!loader && 
                    <>
                        <div className="product-list-header">
                            <h3>Show all products ({products?.length})</h3>    
                        </div>
                        {products?.length? 
                            <div className="product-grid">
                            {
                                products?.map(product => (
                                    <ProductCard key={product._id} product = {product} />
                                ))
                            } 
                            </div> :
                            <h1>No products available</h1>
                        }
                             
                    </>
                }
                
            </div>
        </div>
    )
}