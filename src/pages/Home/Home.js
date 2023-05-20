import "./Home.css";
import {Link} from "react-router-dom";

export const Home = () => {
    return(
        <div className = "home-container">
            <div className="home-img-container">
                <div className = "bg-img-container"></div>
                <div className="home-image-text">
                    <Link to = "./product">
                        <button className="home-shop-now-btn">SHOP NOW</button>
                    </Link>
                </div>    
            </div>

            <div className="categories-container">
                <h2>Categories</h2>
            </div>
        </div>
    )
}