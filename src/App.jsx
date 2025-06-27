import {React, useContext} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import Cart from './Cart';
import { CartProvider } from './CartContext';
import Aboutus from './Aboutus';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<Aboutus />} />

        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
