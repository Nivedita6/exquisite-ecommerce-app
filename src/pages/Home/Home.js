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
                <h2 className="categories-heading">Categories</h2>
                <div className="cake-category-container">
                    <div className="single-cake-category">
                        <img src= "https://pic.warmoven.in/wysiwyg/Birthday_1_.jpg" />
                        <h3>Birthday specials</h3>
                    </div>
                    <div className="single-cake-category">
                        <img src= "https://pic.warmoven.in/wysiwyg/Anniversary1.jpg" />
                        <h3>Anniversary specials</h3>
                    </div>
                    <div className="single-cake-category">
                        <img src= "https://pic.warmoven.in/wysiwyg/Baby_Shower_1.jpg" />
                        <h3>Baby shower</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}