import { useContext } from "react"
import { DataContext } from "../../contexts/DataContext";
import "./Cart.css";
import { CartProduct } from "../../components/CartProduct/CartProduct";

export const Cart = ()=> {
    const {cart} = useContext(DataContext);
    return (
        <>
            <h1>My cart</h1>
            {
                cart?.length ? 
                <>
                    <div className="cart-page">
                        <div className="cart-list">
                            {cart.map((cartItem) => <CartProduct cartItem = {cartItem} key = {cartItem?.id} />)}
                        </div>
                        <div className="total-price-card">
                            <CartPrice cart = {cart}/>
                        </div>
                    </div>
                </> :
                <h2>Your cart is empty.</h2>
            }
        </>
    ) 
}