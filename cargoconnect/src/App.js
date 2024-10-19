import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Home from "./components/Home";
import BookingPage from "./components/BookingPage";
import PoolingResults from "./components/PoolingResults";
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path='/Home' element={<Home/>} />
            <Route path="/" element={<Navigate replace to="/Home" />} />
            <Route path='/Home/BookingPage' element={<BookingPage />} />
            <Route path='/Home/PoolingResults' element={<PoolingResults />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
