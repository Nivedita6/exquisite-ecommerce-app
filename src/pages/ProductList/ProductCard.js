import { useContext } from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { DataContext } from "../../contexts/DataContext";
import { handleAddToCart } from "../../services/CartService";
import { isProductInCart, isProductInWishlist } from "../../utils/commonUtils";
import {handleAddToWishlist, handleRemoveFromWishlist} from "../../services/WishlistService";

export const ProductCard = ({product}) => {
    
    const { _id, title, img, price, categoryName, rating } = product;
    
    const navigate = useNavigate();
    const authState = useContext(AuthContext);
    const {state, dispatch, getProductDetails} = useContext(DataContext);
    const token = authState?.token;
    const isInCart = isProductInCart(product, token, state);
    const addToCartHandler = (product) => {
        token ? isInCart ? navigate("/cart") : handleAddToCart(product, token, dispatch) : navigate("/login")
    }
    const isInWishlist = isProductInWishlist(product, token, state);
    const addToWishlistHandler = (product) => {
        token ? isInWishlist ? handleRemoveFromWishlist(product, token, dispatch) : handleAddToWishlist(product, token, dispatch) : navigate("/login");
    }

    return(
        <div key = {_id} className = "card">
            <img src = {img} className = "card-img" alt = {title} onClick={() => navigate(`/product/${product._id}`)}></img>
            <div className = "card-info">
                <div className = "card-title">
                    <h3 className = "card-title-header">{title}</h3>
                    <div className = "card-rating">
                        <p>{rating}</p>
                        <i className="fa fa-star"></i>
                    </div>
                </div>
            </div>

            <div className = "price">
                <p>Price: {price}</p>
            </div>

            <div className="btn-div">
                <button className = "btn add-to-cart" onClick={() => addToCartHandler(product)}>
                    <i className="fa fa-shopping-cart"></i>
                    {!isInCart ? "Add to cart" : "Go to cart"}
                </button>
                <button className = "btn add-to-wishlist" onClick={() => addToWishlistHandler(product)}><i className="fa fa-heart" ></i>Add to wishlist</button>
            </div>
                

        </div>
    )
}