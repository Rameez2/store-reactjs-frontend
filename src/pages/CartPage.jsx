import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCartItems, removeItemFromCart,updateCartItem } from '../services/cartApi';

export default function CartPage() {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cartItems = getCartItems();
        setCart(cartItems);
        setLoading(false);
    }, []);

    return (
        <>
            <h1>My Cart</h1>
            <h2>Cart Items</h2>
            
            {loading ? <h1>Loading...</h1>:cart.length ? 
            <div className="cart-items">
                {cart.map((item) => 
                <div key={item._id} style={{"border":"2px solid","margin":"0 0 10px 0"}}>
                    <h3>{item.name}</h3>
                    <h3>{item.description}</h3>
                    <h3>{item.price}</h3>
                    <div style={{"display": "flex","alignItems": "center","gap": "20px"}}>
                        <button onClick={(()=> setCart(updateCartItem(item._id,item.cartQuantity-1)))}>-</button>
                        <p>quantity : {item.cartQuantity}</p>
                        <button onClick={(()=> setCart(updateCartItem(item._id,item.cartQuantity+1)))}>+</button>
                    </div>
                    <button onClick={() => setCart(removeItemFromCart(item._id))}>Remove Item</button>
                </div>
                )}
                <button><Link to="/checkout" state={{ products:cart }}>Checkout</Link></button>
            </div> :
            <h1>Cart is Empty!</h1>
            }
        </>
    )
}
