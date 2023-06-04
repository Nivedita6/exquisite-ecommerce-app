import { FilterPage } from "./FilterPage";
import "./Products.css";
import { ProductCard } from "./ProductCard";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

export const Products = () => {
    
    const {products} = useContext(DataContext);

    
    return (
        <div className="product-main-container">
            <FilterPage />
            <div className="product-list-container">
                <div className="product-list-header">
                    <h3>Show all products ({products?.length})</h3>    
                </div>
                <div className="product-grid">
                    {
                        products?.length ?  products?.map(product => (
                            <ProductCard key={product._id} product = {product} />
                        )) : 
                            <h1>No products available</h1>
                    
                    }
                    
                </div>
            </div>
        </div>
    )
}