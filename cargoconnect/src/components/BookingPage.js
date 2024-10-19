// Booking Page
import { useState} from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
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

    
    {/* Hardcoded useState */}
    return (
        <div className="bookingPage">
            <nav className="navBar">
                <Link to="/Home" className="navLink">Home</Link>
            </nav>

            <div className="bookingPage">
                <form onSubmit={handleSubmit}>            
                    <h2>Shipping Information</h2>
                    <br />    
                    <label>First Name</label>
                    <br />           
                    <input
                        type='text'
                        name='firstName'
                        required
                        onChange={handleInputChange}
                    />

                    <br />    
                    <label>Last Name</label>
                    <br />           
                    <input
                        type='text'
                        name='lastName'
                        required
                        onChange={handleInputChange}
                    />

                    <br />    
                    <label>Email</label>
                    <br />           
                    <input
                        type='text'
                        name='email'
                        required
                        onChange={handleInputChange}
                    />

                    <br />    
                    <label>Phone Number</label>
                    <br />           
                    <input
                        type='text'
                        name='phoneNumber'
                        required
                        onChange={handleInputChange}
                    />

                    <br />    
                    <label>Company</label>
                    <br />           
                    <input
                        type='text'
                        name='companyName'
                        required
                        onChange={handleInputChange}
                    />
                    <br />

                    <button className='button'>Add Products</button>
                </form> 
            </div>
        </div>
    );
};

export default BookingPage;