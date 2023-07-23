import {toast} from "react-toastify"; 

export const handleAddToCart = async(product, token, dispatch) => {
    if(token){
        try{
            const response = await fetch("/api/user/cart", {
                method: 'POST',
                headers: {
                    authorization: token
                },
                body: JSON.stringify({ product })       
            });
            if(response.status === 200){
                const responseData = await response.json();
                dispatch({type: "ADD_TO_CART", payload: responseData.cart});
                toast.success('Added to cart');
            }

        }catch(error){
            console.error(error);
        }
    }
}

export const handleRemoveFromCart = async(product, token, dispatch) => {
    try{
        const response = await fetch(`/api/user/cart/${product?._id}`, {
            method: 'DELETE',
            headers: {
                authorization: token
            }
        });
        if(response.status === 200){
            const responseData = await response.json();
            dispatch({type: "DELETE_FROM_CART", payload: responseData.cart})
            toast.error('Removed from cart');
        }
    }catch(error){
        console.error(error);
    }
}

export const deleteCart = async(token, dispatch) => {
    try{
        const response = await fetch('/api/user/cart', {
            headers: {
                authorisation: token
            }
        });
        if(response.status === 200){
            const responseData = await response.json();
            dispatch({type: 'DELETE_CART' , payload: responseData.cart})
        }
    }catch(error){
        console.error(error);
    }
}

export const increasedProductQuantity = async(productId, token, dispatch) => {
    try{
        const response = await fetch(`/api/user/cart/${productId}`, 
        {
            action: {
                type: "increment"
            },
        },
        {
            method: 'POST',
            headers : {
                authorisation: token
            }
        })
        if(response.status === 200){
            const responseData = await response.json()
            dispatch({type: "INCREASE_PRODUCT_QUANTITY", payload: responseData.cart})
        }
        
    }catch(error){
        console.error(error);
    }
}

export const decreasedProductQuantity = async(productId, token, dispatch) => {
    try{
        const response = await fetch(`/api/user/cart/${productId}`, 
        {
            action: {
                type: "decrement"
            },
        },
        {
            method: 'POST',
            headers : {
                authorisation: token
            }
        })
        if(response.status === 200){
            const responseData = await response.json()
            dispatch({type: "DECREASE_PRODUCT_QUANTITY", payload: responseData.cart})
        }
        
    }catch(error){
        console.error(error);
    }
}