import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';

const DishDetail = lazy(() => import('./pages/DishDetail'));
const Orders = lazy(() => import('./pages/Orders'));
const Login = lazy(() => import('./pages/Login'));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div style={{ textAlign: 'center', padding: '40px' }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/dish/:id" element={<DishDetail />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Orders />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;