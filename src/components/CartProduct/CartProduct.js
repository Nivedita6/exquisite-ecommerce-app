import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext"
import { DataContext } from "../../contexts/DataContext";
import { decreasedProductQuantity, handleRemoveFromCart, increasedProductQuantity, handleMoveToWishlist } from "../../services/CartService";
import { isProductInWishlist } from "../../utils/commonUtils";

export const CartProduct = ({cartItem}) => {
    const {authState} = useContext(AuthContext);
    const {state, dispatch, cart} = useContext(DataContext);

    const token = authState?.token;

    const checkQuantity = (cartItem) => {
        if(cart.find(item => item._id === cartItem._id).qty > 1){
            decreasedProductQuantity(cartItem._id,token,dispatch)
        } else{
            handleRemoveFromCart(cartItem, token, dispatch)
        }
    }

    return (
        <>
            <div className="cartCard" key = {cartItem._id}>
                <div className="productImage">
                    <img src={cartItem?.img} alt = "cake image"/>
                </div>
                <div className="productDescription">
                    <div className="productName">{cartItem?.title}</div>
                    <div className="productPrice">{cartItem?.price}</div>
                </div>
                <div>
                    Quantity : {cartItem.qty}
                    <button onClick={() => increasedProductQuantity(cartItem?._id, token, dispatch)}>+</button>
                    <button onClick={() => checkQuantity(cartItem)}>-</button>
                </div>

                <div>
                    <button className="btn-moveToWishlist"  disabled={isProductInWishlist(cartItem)} onClick={() => handleMoveToWishlist(cartItem, dispatch, token, state)}>{isProductInWishlist(cartItem) ? "Item in Wishlist" : "Move To Wishlist"}</button>
                    <button className="btn-remove" onClick={() => handleRemoveFromCart(cartItem, token, dispatch)}>Remove</button>
                </div>
            </div> 
        </>
    )
}