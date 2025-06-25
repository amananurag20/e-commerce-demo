import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Products from './components/products.jsx';
import CartPage from './components/Cart.jsx'; // 🆕 new page, not popup
import { useCart } from './context/CartContext';

function App() {
  const { cart } = useCart();

  return (
    <>
      <header className="header">
        <h1 className="heading">Products</h1>
        <Link to="/cart" className="cart-btn">
          <i className="fas fa-shopping-cart"></i> ({cart.length})
        </Link>

      </header>

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<CartPage />} /> {/* 🆕 Cart Page */}
      </Routes>
    </>
  );
}

export default App;
