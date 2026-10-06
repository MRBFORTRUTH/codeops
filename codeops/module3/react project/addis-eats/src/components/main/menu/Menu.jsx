import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../../store/useAuthStore';
import { useCartStore } from '../../../store/useCartStore';
import './Dish.css';

function Dish({ dish }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const addToCart = useCartStore((state) => state.addToCart);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    addToCart(dish);
  };

  const handleOrderNow = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    addToCart(dish);
    navigate('/orders');
  };

  return (
    <div className="dish-card">
      <Link to={`/dish/${dish.id}`} className="dish-img-link">
        <img src={dish.image || 'https://via.placeholder.com/200'} alt={dish.name} className="dish-img" />
      </Link>
      <h3 className="dish-title">{dish.name}</h3>
      <p className="price">{dish.price} ETB</p>
      
      <div className="dish-actions">
        <Link to={`/dish/${dish.id}`} className="details-btn">
          View Details
        </Link>
        <div className="button-group">
          <button onClick={handleAddToCart} className="cart-btn">
            Add to Cart
          </button>
          <button onClick={handleOrderNow} className="order-btn">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dish;