import React from 'react';
import { useCart } from '../context/CartContext';

function Cart() {
    const { cart, removeFromCart } = useCart();

    const total = cart.reduce((acc, item) => acc + item.price, 0); // Calculate total price

    return (
        <div className="cart-page">
            <h2>Your Cart</h2>

            {cart.length === 0 ? (
                <p>No items in cart.</p>
            ) : (
            <>
            <ul className="cart-list">
                {cart.map((item, index) => (
                <li key={index} className="cart-item">
                <img
                    src={item.image}
                    alt={item.title}
                    className="cart-item-image"
                />
                <div className="cart-item-details">
                    <h4>{item.title}</h4>
                    <p>${item.price}</p>
                    <button
                        className="remove-btn"
                        onClick={() => removeFromCart(item.id)}
                    >
                    Remove
                    </button>
                </div>
                </li>
            ))}
            </ul>


            <div className="checkout-box">
                <h3>Total: ${total.toFixed(2)}</h3>
                <button className="checkout-btn">Proceed to Checkout</button>
            </div>
            </>
            )}
        </div>
    );
}

export default Cart;
