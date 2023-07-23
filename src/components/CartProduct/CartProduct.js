import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext"
import { DataContext } from "../../contexts/DataContext";
import { decreasedProductQuantity, handleRemoveFromCart } from "../../services/CartService";

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
}