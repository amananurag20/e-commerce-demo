import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { cart, addToCart } = useCart();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            });
    }, []);

    const isInCart = (product) => cart.some(item => item.id === product.id); // use callback hook

    if (loading) return <p>Loading...</p>;

    return (
        <div className="product-grid">
            {products.map(product => (
            <div key={product.id} className="product-card">
                <img src={product.image} alt={product.title} className="product-image" />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
            <button
                onClick={() => addToCart(product)}
                disabled={isInCart(product)}
                className={`add-btn ${isInCart(product) ? 'disabled' : ''}`}
            >
            {isInCart(product) ? 'Added to Cart' : 'Add to Cart'}
            </button>
            </div>
            ))}
        </div>
    );
}

export default Products;
