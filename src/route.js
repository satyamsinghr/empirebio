// import React from 'react'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ContactUs from  './Pages/Contactus';
import Product   from  './Pages/Product';
import Resorce   from  './Pages/Resorce';
import ProductDetail from './Pages/ProductDetail';
const Routing = () => {
    return (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="product" element={<Product />} />
              <Route path="contactUs" element={<ContactUs />} />
              <Route path="resource" element={<Resorce />} />
              <Route path="product-detail" element={<ProductDetail />} />

            </Routes>
    )
}
  
export default Routing;