import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Home from "./components/Home";
import BookingPage from "./components/BookingPage";
import PoolingResults from "./components/PoolingResults";
import Products from "./components/Products";
import TrackingPage from "./components/TrackingPage";
import PaymentInformation from "./components/PaymentInformation";
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

  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path='/Home' element={<Home/>} />
            <Route path="/" element={<Navigate replace to="/Home" />} />
            <Route path='/Home/BookingPage' element={<BookingPage />} />
            <Route path='/Home/PoolingResults' element={<PoolingResults />} />
            <Route path='/Home/Products' element={<Products products={products} setProducts={setProducts}/>} />
            <Route path='/Home/TrackingPage' element={<TrackingPage/>} />
            <Route path='/Home/PaymentInformation' element={<PaymentInformation />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
