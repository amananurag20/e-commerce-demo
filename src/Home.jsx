import React, {useEffect, useState, useContext} from "react";
import Navbar from "./Navbar";
import "./style.css";
import { CartContext } from './CartContext';

export default function Home() {
  const { addToCart } = useContext(CartContext);

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
          .then(res => res.json())
          .then(data => setProducts(data))
          .catch(err => console.error("Error fetching data", err));
    }, []);
  return (
    <>
    <Navbar />
      <div className="container">
        {/* <h1 className="heading my-5">E-Commerce Website</h1> */}
          <div className="row g-5 mt-5">
            {/* <div className="col-lg-4 col-md-6 col-sm-12"> */}
            {products.map(product => (
            <div key={product.id} className = "col-lg-4 col-md-6 col-sm-12" id="col-responsive">
            
              <div className="card">
                <img src={product.image} class="card-img-top" alt="Product-image" height="200px" />
                <div class="card-body">
                  <h5 class="card-title">{product.title}</h5>
                  <p class="card-text truncate-3">{product.description}</p>
                  <p className="card-price fw-bold">Rs. {product.price}</p>
                  <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
              </div>
            </div>
            ))}
            {/* </div> */}
          </div>
        </div>
    </>
  );
}
