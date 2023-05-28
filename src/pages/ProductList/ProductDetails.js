import { useParams } from "react-router-dom";
import { products } from "../../backend/db/products";
import "./ProductDetails.css";
import { useNavigate } from "react-router-dom";

export const ProductDetails = () => {
    const {productId} = useParams();
    const navigate = useNavigate();

    const product = products?.find(product => product._id === productId);
    
    return (
        <div className="single-card-container">
            <div className="single-card">
                <div className="single-card-left">
                    <img src = {product?.img} alt = "" className="single-card-img"/>
                </div>

                <div className="single-card-right">
                    <div className="single-card-title">
                        <h3 className="single-card-title-header">{product?.title}</h3>
                        <div className="single-card-rating">
                            {product?.rating}
                            <i className="fa fa-star"></i>
                        </div>
                    </div>
                    <div className="single-card-price">Price: {product?.price}/-</div>
                    <span className="tag-msg"><i className="fa fa-tag" ></i> Fastest Delivery</span>
                    <span className="tag-msg"><i className="fa fa-tag" ></i> Inclusive of All Taxes</span>
                    <span className="tag-msg"><i className="fa fa-tag" ></i> Cash On Delivery Available</span>

                    <button className="btn add-to-cart-btn" onClick={() => navigate("./cart")}> <i className="fa fa-shopping-cart"  ></i>Add to Cart</button>
                    <button className="btn wishlist-btn" onClick={() => navigate("./wishlist")}> <i className="fa fa-heart" ></i>Add to Wishlist</button>
                </div>
            </div>
        </div>
    )
}