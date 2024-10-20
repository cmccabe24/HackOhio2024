// Page for the Products to be listed 
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = ({products, setProducts}) => {
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
    <div>
        <h3>Products</h3>
        {products.products.map((product, index) => (
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
        <button type="button" className='button' onClick={handleSubmit}>Pooling Results</button>
    </div>
);
};

export default Products;