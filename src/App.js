import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import BookingPage from "./components/BookingPage";
import PoolingResults from "./components/PoolingResults";
import Products from "./components/Products";
import TrackingPage from "./components/TrackingPage";
import PaymentInformation from "./components/PaymentInformation";
import About from "./components/About";
import Contact from "./components/Contact";
import './App.css';

function App() {
  const [shippingInfo, setShippingInfo] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      companyName: '',
  });

  const [products, setProducts] = useState({
    products: [
      {itemType: '', pickupLocation: '', dropoffLocation: '', dimensions: '', weight: '', quantity: '', budget: ''}
    ]
  });

  const [paymentInformation, setPaymentInformation] = useState([

  ]);

  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path='/Home' element={<Home/>} />
            <Route path="/" element={<Navigate replace to="/Home" />} />
            <Route path='/Home/About' element={<About/>} />
            <Route path='/Home/Contact' element={<Contact/>} />
            <Route path='/Home/BookingPage' element={<BookingPage shippingInfo={shippingInfo} setShippingInfo={setShippingInfo}/>} />
            <Route path='/Home/PoolingResults' element={<PoolingResults />} />
            <Route path='/Home/Products' element={<Products products={products} setProducts={setProducts}/>} />
            <Route path='/Home/TrackingPage' element={<TrackingPage products={products} setProducts={setProducts}/>} />
            <Route path='/Home/PaymentInformation' element={<PaymentInformation paymentInformation={paymentInformation} setPaymentInformation={setPaymentInformation} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
