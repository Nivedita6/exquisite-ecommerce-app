import { FilterPage } from "./FilterPage";
import "./Products.css";
import { products } from "../../backend/db/products";
import { ProductCard } from "./ProductCard";

export const Products = () => {
    return (
        <div className="product-main-container">
            <FilterPage />
            <div className="product-list-container">
                <div className="product-list-header">
                    <h3>Show all products</h3>
                    <div className="product-grid">
                        {products.map(product => (
                            <ProductCard key={product._id} product = {product} />
                        ))}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}