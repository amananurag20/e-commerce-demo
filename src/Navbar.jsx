import React from 'react'
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='container'>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand fs-1 fw-bold" href="#">Lashy</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item mx-3">
          <Link class="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item mx-3">
          <Link class="nav-link" to="/about">Aboutus</Link>
        </li>
        <li class="nav-item mx-3">
          <Link class="nav-link" to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
