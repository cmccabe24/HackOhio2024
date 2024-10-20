// payment info 
import { useNavigate } from "react-router-dom";

const PaymentInformation = ({paymentInformation, setPaymentInformation}) => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/Home/TrackingPage');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentInformation((paymentInformation) => ({
            ...paymentInformation,
            [name]: value,
        }));
    };

    return (
        <div>
            <h2> Payment Information </h2> 
            <form onSubmit ={handleSubmit} >
				<label>Credit Card Number</label>
				<br />
		    	<input
					type='text'
					// correct input name for state update
					name='credit_card_number' 
					required
					onChange={handleInputChange}
					
				/>
				<br/>

				
                <label>Expiration Date</label>
				<br />
            	<input
                	type='text'
                	name='expiration_date'
                	required
                	onChange={handleInputChange}
            	/>
            	<br/>				
				
				<label>CVV Code</label>
				<br />
				<input
					type='text'
					// matching key in the order object
					name='cvvCode'
					required
					onChange={handleInputChange}
				/>
				<br/>
			
				<label>Credit Holder Name</label>
				<br />
            	<input
					type='text'
					// matching key in the order object
					name='card_holder_name'
					required
					onChange={handleInputChange}
				/>
				<br/>

            <button className="button" onClick={handleSubmit}>Proceed to Tracking</button>
            </form>
        </div>
    );
};

export default PaymentInformation;