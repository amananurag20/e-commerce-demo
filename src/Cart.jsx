import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import Navbar from './Navbar';
function Cart() {
  const { cartItems } = useContext(CartContext);

  return (
<>
    <Navbar />

    <section className="container py-5" id="cart">
      <h1 className="mb-4">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-muted">Your cart is empty.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped align-middle">
            <thead className="table-light">
              <tr>
                <th scope="col">Product Image</th>
                <th scope="col">Product Title</th>
                {/* <th onClick={removeFromCart()}>Remove</th> */}
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: '50px', height: 'auto' }}
                      className="img-thumbnail"
                    />
                  </td>
                  <td>{item.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
    </>
  );
}

export default Cart;
