// Products Page
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../static/PoolingResults.css";

const Products = ({ products, setProducts }) => {
    const navigate = useNavigate();

    const handleProductInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedProducts = products.products.map((product, i) =>
            i === index ? { ...product, [name]: value } : product
        );
        setProducts({ ...products, products: updatedProducts });
    };

    const addNewProduct = () => {
        setProducts((prevState) => ({
            ...prevState,
            products: [
                ...prevState.products,
                { itemType: '', pickupLocation: '', dropoffLocation: '', dimensions: '', weight: '', quantity: '', budget: '' }
            ]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/Home/PoolingResults');
    };

    return (
        <div className="productsPage">
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
                <h1>Products</h1>
                <form onSubmit={handleSubmit}>
                    {products.products.map((product, index) => (
                        <div key={index} className="productSection formField">
                            <h4>Product {index + 1}</h4>
                            <label>Item Type</label>
                            <input
                                type="text"
                                name="itemType"
                                value={product.itemType}
                                onChange={(e) => handleProductInputChange(e, index)}
                            />
                            <label>Pickup Location</label>
                            <input
                                type="text"
                                name="pickupLocation"
                                value={product.pickupLocation}
                                onChange={(e) => handleProductInputChange(e, index)}
                            />
                            <label>Dropoff Location</label>
                            <input
                                type="text"
                                name="dropoffLocation"
                                value={product.dropoffLocation}
                                onChange={(e) => handleProductInputChange(e, index)}
                            />
                            <label>Dimensions</label>
                            <input
                                type="text"
                                name="dimensions"
                                value={product.dimensions}
                                onChange={(e) => handleProductInputChange(e, index)}
                            />
                            <label>Weight</label>
                            <input
                                type="text"
                                name="weight"
                                value={product.weight}
                                onChange={(e) => handleProductInputChange(e, index)}
                            />
                            <label>Quantity</label>
                            <input
                                type="text"
                                name="quantity"
                                value={product.quantity}
                                onChange={(e) => handleProductInputChange(e, index)}
                            />
                            <label>Budget</label>
                            <input
                                type="text"
                                name="budget"
                                value={product.budget}
                                onChange={(e) => handleProductInputChange(e, index)}
                            />
                        </div>
                    ))}

                    <button type="button" className='button' onClick={addNewProduct}>Add New Product</button>
                    <button type="submit" className='button'>Pooling Results</button>
                </form>
            </div>
        </div>
    );
};

export default Products;
