import React from 'react';
import Navbar from './Navbar';
import './style.css';

export default function Aboutus(){
    return (
        <>
        <Navbar/>
        <section className='container my-4'>
           <h1 className="">Welcome to Lashy – Where Style Meets Story</h1>

           <h3>🌟 Who We Are</h3>
           <p>At Lashy, fashion isn't just about trends—it's about confidence, expression, and comfort.
                We are passionate about bringing you premium-quality fashion items that fit your lifestyle, whether you're dressing up for a celebration or just upgrading your daily wardrobe.

                Our collections blend timeless tradition with modern trends, curated with love and attention to detail</p>

                <h3>👜 What We Offer</h3>
                <p>Clothing & Garments – Elegant ethnic wear, casual outfits, and formal styles for all.

                    Shoes – Trendy and comfortable footwear for every occasion.

                    Bags – Stylish handbags, backpacks, and utility bags to match your mood and purpose.</p>

                    <h3>💖 Why Choose Lashy?</h3>
                    <p>
                        <ul>
                            <li>🚚 Quick Delivery & Easy Returns</li>
                            <li>✔️ Handpicked, High-Quality Products</li>
                            <li>🔒 Secure Online Shopping</li>
                            <li>💬 Customer-First Support</li>
                        </ul>
                    </p>

                    <h3>✨ Our Vision</h3>
                    <p>To make fashion more inclusive, affordable, and empowering.
We support sustainable practices and local craftsmanship, believing that fashion should not only look good but feel good too.</p>
        </section>
        </>
    )
}