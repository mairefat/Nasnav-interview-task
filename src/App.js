import React from 'react';
// import { BrowserRouter as Router  } from 'react-router-dom';

import Navbar from './components/Navbar';
import Secondnav from './components/Secondnav';
import BottomNavbar from './components/BottomNavbar';
import RoutesSection from './components/RoutesSection';
import ProductDetail from './components/ProductDetail';
// import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
export default function App() {
  return (
    
      <div>
        <Navbar />
        <Secondnav />
        <BottomNavbar />
        <RoutesSection />
        <ProductDetail />
        {/* <ProductCard /> */}
        <Footer />

    </div>
    
  )
}