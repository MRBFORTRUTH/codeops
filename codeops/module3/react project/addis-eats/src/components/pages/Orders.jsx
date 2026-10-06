import React from 'react';
import { useCartStore } from '../store/useCartStore';
import './Orders.css';

function Orders() {
  const { cart, getTotalPrice, clearCart } = useCartStore();

  return (
    <div className="orders-container">
      <h2>Your Orders & Checkout</h2>
      {cart.length === 0 ? (
        <p className="empty-cart-msg">Your cart is empty.</p>
      ) : (
        <div className="orders-content">
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <span>{item.name} x {item.quantity}</span>
                <span>{item.price * item.quantity} ETB</span>
              </li>
            ))}
          </ul>
          <div className="order-summary">
            <h3>Total: {getTotalPrice()} ETB</h3>
            <button onClick={() => { alert('Order Placed Successfully!'); clearCart(); }} className="checkout-btn">
              Complete Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Orders;