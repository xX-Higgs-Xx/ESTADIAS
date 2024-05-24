import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './screens/index.jsx';
import Sales from './screens/sales.jsx';
import Product from './screens/product.jsx';
import './output.css';
import Footer from './components/footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
