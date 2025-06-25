import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
    
    const addToCart = (product) => {
        const alreadyInCart = cart.some(item => item.id === product.id);
        if (!alreadyInCart) {
            setCart([...cart, product]);
        }
    };

    const removeFromCart = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
    };

    /*const toggleCart = () => {
        setCartOpen(prev => !prev);
    };
    */

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart}}> 
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
