import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDishStore } from '../store/useDishStore';
import { useAuthStore } from '../store/useAuthStore';
import { useCartStore } from '../store/useCartStore';
import './DishDetail.css';

function DishDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const dishes = useDishStore((state) => state.dishes);
  const addToCart = useCartStore((state) => state.addToCart);

  const dish = dishes.find((item) => item.id === Number(id));

  if (!dish) {
    return (
      <div className="full-screen-detail">
        <h2>Dish Not Found</h2>
        <button onClick={() => navigate('/menu')} className="back-btn">
          Back to Menu
        </button>
      </div>
    );
  }

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
    <div className="full-screen-detail">
      <div className="detail-wrapper">
        <button onClick={() => navigate(-1)} className="back-btn">&larr; Back</button>
        
        <div className="dish-fullscreen-card">
          <div className="image-container">
            <img src={dish.image} alt={dish.name} className="large-detail-img" />
          </div>

          <div className="detail-content">
            <div className="detail-header">
              <h1>{dish.name}</h1>
              <div className="tags">
                <span className="category-tag">{dish.category}</span>
                <span className="spice-tag">{dish.spicy ? 'Spicy 🌶️' : 'Mild 🌿'}</span>
              </div>
            </div>

            <p className="full-description">{dish.description}</p>
            
            <div className="detail-footer">
              <span className="price-tag">{dish.price} ETB</span>
              <div className="action-row">
                <button onClick={handleAddToCart} className="cart-btn-large">
                  Add to Cart
                </button>
                <button onClick={handleOrderNow} className="order-btn-large">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DishDetail;