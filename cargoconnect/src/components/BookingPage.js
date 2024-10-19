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
        products: [
            {itemType: '', pickupLocation: '', dropoffLocation: '', dimensions: '', weight: '', quantity: '', budget: ''}
        ]
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/Home/PoolingResults'); 

    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setShippingInfo((shippingInfo) => ({
          ...shippingInfo,
          [name]: value,
        }));
    };

    const handleProductInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedProducts = shippingInfo.products.map((product, i) =>
            i === index ? { ...product, [name]: value } : product
        );
        setShippingInfo({ ...shippingInfo, products: updatedProducts });
    };

    const addNewProduct = () => {
        setShippingInfo((prevState) => ({
            ...prevState,
            products: [
                ...prevState.products,
                { itemType: '', pickupLocation: '', dropoffLocation: '', dimensions: '', weight: '', quantity: '', budget: '' }
            ]
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

                    <h3>Products</h3>
                    {shippingInfo.products.map((product, index) => (
                        <div key={index} className="productSection">
                            <h4>Product {index + 1}</h4>
                            <label>Item Type</label>
                            <input
                                type="text"
                                name="itemType"
                                value={product.itemType}
                                onChange={(e) => handleProductInputChange(e, index)}
                            />
                            <br />
                            <label>Pickup Location</label>
                            <input
                                type="text"
                                name="pickupLocation"
                                value={product.pickupLocation}
                                onChange={(e) => handleProductInputChange(e, index)}
                            />
                            <br />
                            <label>Dropoff Location</label>
                            <input
                                type="text"
                                name="dropoffLocation"
                                value={product.dropoffLocation}
                                onChange={(e) => handleProductInputChange(e, index)}
                            />
                            <br />
                            <label>Dimensions</label>
                            <input
                                type="text"
                                name="dimensions"
                                value={product.dimensions}
                                onChange={(e) => handleProductInputChange(e, index)}
                            />
                            <br />
                            <label>Weight</label>
                            <input
                                type="text"
                                name="weight"
                                value={product.weight}
                                onChange={(e) => handleProductInputChange(e, index)}
                            />
                            <br />
                            <label>Quantity</label>
                            <input
                                type="text"
                                name="quantity"
                                value={product.quantity}
                                onChange={(e) => handleProductInputChange(e, index)}
                            />
                            <br />
                            <label>Budget</label>
                            <input
                                type="text"
                                name="budget"
                                value={product.budget}
                                onChange={(e) => handleProductInputChange(e, index)}
                            />
                            <br />
                        </div>
                    ))}

                    <button type="button" className='button' onClick={addNewProduct}>Add New Product</button>
                    <br />
                    <button className='button'>Review order</button>
                </form> 
            </div>
        </div>
    );
}

export default BookingPage;