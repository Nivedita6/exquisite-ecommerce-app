import { NavLink} from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
    return(
        <div className="nav-header">
            <ul className="navbar">
                <div className="nav-main">
                    <div className="nav-left"><NavLink to = "/"><h2>exquisite</h2></NavLink></div>
                    <div className="search-input">
                        <input type = "search" name = "search" className="search-bar"/>
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