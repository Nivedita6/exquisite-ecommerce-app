import {toast} from "react-toastify";
import { handleAddToCart } from "./CartService";

export const handleAddToWishlist = async(product, token, dispatch) => {
    if(token){
        try{
            const response = await fetch("/api/user/wishlist", {
                method: 'POST',
                headers: {
                    authorization: token
                },
                body: JSON.stringify({ product })       
            });
            if(response.status === 200){
                const responseData = await response.json();
                dispatch({type: "ADD_TO_WISHLIST", payload: responseData.wishlist});
                toast.success('Added to wishlist');
            }

        }catch(error){
            console.error(error);
        }
    }
}

export const handleRemoveFromWishlist = async(product, token, dispatch) => {
    try{
        const response = await fetch(`/api/user/wishlist/${product?._id}`, {
            method: 'DELETE',
            headers: {
                authorization: token
            }
        });
        if(response.status === 200){
            const responseData = await response.json();
            dispatch({type: "UPDATE_WISHLIST", payload: responseData.wishlist})
            toast.error('Removed from wishlist');
        }
    }catch(error){
        console.error(error);
    }
}

export const handleMoveToCart = async (product, token, dispatch) => {
    try {
        handleAddToCart(product, token, dispatch);
    } catch (e) {
        console.error(e);
    }

}