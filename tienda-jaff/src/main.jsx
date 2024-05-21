import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './screens/index.jsx';
import Sales from './screens/sales.jsx';
import Navbar from './components/navbar.jsx';
import './output.css';
import Footer from './components/footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sales" element={<Sales />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
