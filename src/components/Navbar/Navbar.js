import { NavLink, useNavigate} from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import {DataContext} from "../..";


export const Navbar = () => {
    const navigate = useNavigate();
    const {search, searchProductHandler} = useContext(DataContext);
   

    return(
        <div className="nav-header">
            <ul className="navbar">
                <div className="nav-main">
                    <div className="nav-left" onClick={() => navigate("/")}><h2>exquisitehomebaker</h2></div>
                    <div className="search-input">
                        <input type = "search" name = "search" className="search-bar" value={search} onChange = {(e) => searchProductHandler(e)} />
                        <i className="fa fa-search" ></i>
                    </div>
                    <ul className="nav-right">
                        <li><NavLink to ="/cart"><div className="icons"><i className="fa fa-shopping-cart"  /></div></NavLink></li>
                        <li><NavLink to ="/wishlist"><div className="icons">< i class="fa-solid fa-heart" /></div></NavLink></li> 
                        <li><NavLink to ="/login"><div className="icons"><i class="fa-solid fa-user" /></div></NavLink></li>  
                    </ul>  
                </div>  
            </ul>
        </div>
        
    )
}