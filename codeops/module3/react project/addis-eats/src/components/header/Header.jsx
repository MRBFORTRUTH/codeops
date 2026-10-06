import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import { useCartStore } from '../../store/useCartStore';
import './Header.css';

function Header() {
  const { user, logout } = useAuthStore();
  const cart = useCartStore((state) => state.cart);
  const navigate = useNavigate();

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="brand-logo">
          <span className="logo-icon">🍲</span>
          <span className="logo-text">Habesha Delights</span>
        </Link>

        <nav className="nav-menu">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Home
          </NavLink>
          <NavLink to="/menu" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Menu & Dishes
          </NavLink>
          <NavLink to="/orders" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            My Orders
          </NavLink>
        </nav>

        <div className="user-nav">
          <Link to="/orders" className="cart-badge-btn">
            🛒 <span className="cart-count">{totalCartCount}</span>
          </Link>

          {user ? (
            <div className="user-info">
              <span className="welcome-text">Hi, <strong>{user.name}</strong></span>
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </div>
          ) : (
            <Link to="/login" className="login-header-btn">Login</Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;