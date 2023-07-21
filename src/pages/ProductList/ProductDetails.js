import { useParams } from "react-router-dom";
import { products } from "../../backend/db/products";
import "./ProductDetails.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { isProductInCart, isProductInWishlist } from "../../utils/commonUtils";

export const ProductDetails = () => {
    
    const navigate = useNavigate();
    const {productDetail, products, state, dispatch} = useContext(DataContext);
    const totalStars = 5;
    const activeStars = productDetail?.rating;
    const product = products?.find(product => product._id === productDetail._id);

    const isInCart = isProductInCart(product, token, state);
    const isInWishlist = isProductInCart(product, token, state);

    const addToCartHandler = (product) => {
        token ? isInCart ? navigate("/cart") : handleAddToCart(product, token, dispatch) : navigate("/login")
    }

    const addToWishlistHandler = (product) => {
        token ? isInWishlist ? handleRemoveFromWishlist(product, token, dispatch) : handleAddToWishlist(product, token, dispatch) : navigate("/login")
    }
    
    return (
        <>
        {Object.keys(productDetail)?.length && 
            <div className="single-card-container">
                <div className="single-card">
                    <div className="single-card-left">
                        <img src = {productDetail?.img} alt = "" className="single-card-img"/>
                    </div>

                    <div className="single-card-right">
                        <div className="single-card-title">
                            <h3 className="single-card-title-header">{productDetail?.title}</h3>
                            <div className="single-card-rating">
                                {productDetail?.rating}
                                <i className="fa fa-star"></i>
                            </div>
                        </div>
                        <div className="single-card-price">Price: {productDetail?.price}/-</div>
                        <span className="tag-msg"><i className="fa fa-tag" ></i> Fastest Delivery</span>
                        <span className="tag-msg"><i className="fa fa-tag" ></i> Inclusive of All Taxes</span>
                        <span className="tag-msg"><i className="fa fa-tag" ></i> Cash On Delivery Available</span>

                        <button className="btn add-to-cart-btn" onClick={() => navigate("./cart")}> <i className="fa fa-shopping-cart"  ></i>Add to Cart</button>
                        <button className="btn wishlist-btn" onClick={() => navigate("./wishlist")}> <i className="fa fa-heart" ></i>Add to Wishlist</button>
                    </div>
                </div>
            </div>
        }
                
        </>
        
    )
}