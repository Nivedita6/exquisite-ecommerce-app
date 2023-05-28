import "./Home.css";
import {Link} from "react-router-dom";
import { useContext, useState } from "react";
//import { categories } from "../../backend/db/categories";
import { DataContext } from "../../contexts/DataContext";

export const Home = () => {

    const {categoryData} = useContext(DataContext);
    console.log(typeof categoryData)
    
    return(
        <>
            <div className = "home-container">
                <div className="home-img-container">
                    <div className = "bg-img-container"></div>
                    <div className="home-image-text">
                        <Link to = "./products">
                            <button className="home-shop-now-btn">SHOP NOW</button>
                        </Link>
                    </div>    
                </div>

                <div className="categories-container">
                    <h1 className="categories-heading">Categories</h1>
                    <div className="cake-category-row">
                        {categoryData.map(category => {
                            return(
                                <div className="single-cake-category" key = {category._id}>
                                    <div className="category-box">
                                        <img src={category.img}></img>
                                        <h3>{category.categoryName}</h3>
                                    </div>  
                                </div>
                                )
                            }
                        )}
                    </div>
                </div>
            </div>
            <footer className="footer-container">
                <div className="footer-section-left">
                    <h2 className="footer-section-left-heading">exquisitehomebaker</h2>
                    <p>Freshly baked cakes made with the finest ingredients. A wide range of flavours to choose from, including egg and eggless options.
                        Convenient online ordering, so you can order from the comfort of your own home in affordable prices.</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                    <span>&copy;2023 exquisitehomebaker</span>
                </div>        
                <div className="footer-section-right">
                    <ul>
                        <li className="footer-link-heading">Connect with me</li>
                        <li>
                            <a href="https://github.com/Nivedita6">Github <i class="fa-brands fa-github"></i></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/NiveditaAP_26">Twitter <i class="fa-brands fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/nivedita-prasannaraj-ap/">LinkedIn <i class="fa-brands fa-linkedin"></i></a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
        
    )
}