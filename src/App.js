import "./App.css";
import Mockman from "mockman-js"
import {Route, Routes} from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import {Home} from "./pages/Home/Home";
import {Cart} from "./pages/Cart/Cart";
import { Products } from "./pages/ProductList/Products";
import {ProductDetails} from "./pages/ProductList/ProductDetails";
import { Wishlist } from "./pages/Wishlist/Wishlist";
import {Login} from "./pages/Login/Login";


function App() {
  return (  
    <div className="App">
      <Navbar />
        <Routes>
          <Route path = "/" element = {<Home />}></Route>
          <Route path = "/products" element = {<Products />}></Route>
          <Route path = "/product/:productId" element = {<ProductDetails />}></Route>
          <Route path = "/cart" element = {<Cart />}></Route>
          <Route path = "/wishlist" element = {<Wishlist />}></Route>
          <Route path = "/login" element = {<Login />}></Route>
        </Routes>
        
        {/* <Mockman />  */}
      
    </div>
  );
}

export default App;
