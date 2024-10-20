// Booking Page
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../static/BookingPage.css';

const BookingPage = () => {
    const [shippingInfo, setShippingInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        companyName: '',
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/Home/Products'); 
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setShippingInfo((shippingInfo) => ({
            ...shippingInfo,
            [name]: value,
        }));
    };

    return (
        
        <div className="bookingPage">
            <div className="logo-container">
        <img src="/cargoLogo.png" alt="Logo" className="logo" />
      </div>
            {/* Navigation Bar */}
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

            <div className="formBackground">
                <form onSubmit={handleSubmit}>            
                    <h1>Contact Information</h1>

                    <div className="formField">
                        <label>First Name</label>
                        <input
                            type='text'
                            name='firstName'
                            required
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="formField">
                        <label>Last Name</label>
                        <input
                            type='text'
                            name='lastName'
                            required
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="formField">
                        <label>Email</label>
                        <input
                            type='text'
                            name='email'
                            required
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="formField">
                        <label>Phone Number</label>
                        <input
                            type='text'
                            name='phoneNumber'
                            required
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="formField">
                        <label>Company</label>
                        <input
                            type='text'
                            name='companyName'
                            required
                            onChange={handleInputChange}
                        />
                    </div>

                    <button className='button'>Add Products</button>
                </form> 
                
            </div>
           
        </div>
        
    );
};

export default BookingPage;
