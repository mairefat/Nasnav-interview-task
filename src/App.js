import React, { useState }  from 'react';
import Navbar from './components/Navbar';
import Secondnav from './components/Secondnav';
import BottomNavbar from './components/BottomNavbar';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';
import Cart from './components/Cart';

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = (count) => {
    setCartCount(count);
  };
  return (
    <div>
<Cart  />
      <Navbar  />
      <Secondnav cartCount={cartCount}  />
      <BottomNavbar />
      <ProductDetail updateCartCount={updateCartCount} />
      <Footer />
    </div>
    
      
    
  );
}
