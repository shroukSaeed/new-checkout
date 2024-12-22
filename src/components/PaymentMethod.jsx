import { useState } from "react";
import PaymentForm from "./PaymentForm";

const PaymentMethod = ({ paymentMethod, onChange }) => {
    const [sepaData, setSepaData] = useState({
        cardHolder: '',
        cardNumber: '',
        mm: '',
        yy: '',
        cvv: '',
    });

    const [visaData, setVisaData] = useState({
        cardHolder: '',
        cardNumber: '',
        mm: '',
        yy: '',
        cvv: '',
    });

    const handleChange = (e, type) => {
        const { name, value } = e.target;

        if (type === 'sepa') {
            setSepaData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        } else if (type === 'visa') {
            setVisaData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e, type) => {
        e.preventDefault();
        if (type === 'sepa') {
            console.log('SEPA Data:', sepaData);
        } else if (type === 'visa') {
            console.log('VISA Data:', visaData);
        }
    };

    return (
        <div className='payment-method'>
            <h6 className='form-label'>SELECT PAYMENT METHOD</h6>
            
            {/* SEPA Form */}
            <div className='form-group'>
                <input
                    type='radio'
                    id='sepa'
                    name='paymentMethod'
                    value='sepa'
                    onChange={onChange}
                    checked={paymentMethod === 'sepa'}
                />
                <img
                className="img-1"
                    src='https://smartstore.com/media/6868/content/sepa_21x9.png?size=1024'
                    alt='SEPA'
                />
                {paymentMethod === 'sepa' && (
                    <form onSubmit={(e) => handleSubmit(e, 'sepa')}>
                        <PaymentForm 
                            cardData={sepaData} 
                            handleChange={(e) => handleChange(e, 'sepa')} 
                        />
                        <button className="submit-payment" type='submit'>Submit SEPA</button>
                    </form>
                )}
            </div>

            {/* VISA Form */}
            <div className='form-group'>
                <input
                    type='radio'
                    id='visa'
                    name='paymentMethod'
                    value='visa'
                    onChange={onChange}
                    checked={paymentMethod === 'visa'}
                />
                <img
                className="img-2"
                    // src='https://financialit.net/sites/default/files/visa-mastercard-amex_0.png'
                    src='https://help.zazzle.com/hc/article_attachments/360010513393'
                    alt='VISA'
                />
                {paymentMethod === 'visa' && (
                    <form onSubmit={(e) => handleSubmit(e, 'visa')}>
                        <PaymentForm 
                            cardData={visaData} 
                            handleChange={(e) => handleChange(e, 'visa')} 
                        />
                        <button className="submit-payment" type='submit'>Submit VISA</button>
                    </form>
                )}
            </div>

            <p className='secure-payment'>100% secure payment. All data is encrypted.</p>
        </div>
    );
};

export default PaymentMethod;
