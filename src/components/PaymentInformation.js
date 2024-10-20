// payment info 
import { useNavigate } from "react-router-dom";

const PaymentInformation = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/Home/TrackingPage');
    };

    return (
        <div>
            <h1>Payment Information</h1>
          
            <button className="button" onClick={handleSubmit}>Proceed to Tracking</button>
        </div>
    );
};

export default PaymentInformation;