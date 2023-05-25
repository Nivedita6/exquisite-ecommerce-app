// import {products} from "../../backend/db/products";
import "./ProductCard.css";

export const ProductCard = ({product}) => {
    const { _id, title, img, price, categoryName, rating } = product;
    return(
        <div key = {_id} className = "card" >
            <img src = {img} className = "card-img" alt = {title}></img>
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
                <button className = "btn add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
                <button className = "btn add-to-wishlist"><i className="fa fa-heart" ></i>Add to wishlist</button>
            </div>
                

        </div>
    )
}