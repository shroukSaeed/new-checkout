import { useState } from "react";
import PhoneInput from "react-phone-number-input"; 
import 'react-phone-number-input/style.css';

import PaymentMethod from "./PaymentMethod";

const FormInput = ({objectForm, updateOrderDetails , setObjectForm}) => {
     const [phone1, setPhone1] = useState('');
     const [phone2, setPhone2] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        address: '',
        nr: '',
        postal: '',
        city: '',
        country: '',
        session: '',
        paymentMethod: 'sepa',
    });

    const pricePerSession = 28;

    const handleChange = (e) => {
        setFormData((prev) => {
            const updatedFormData = {
                ...prev,
                [e.target.name]: e.target.value
            };
            setObjectForm({...objectForm,[e.target.name]: e.target.value})
            if (e.target.name === "session") {
                const sessions = parseInt(e.target.value, 10) || 0; 
                const cost = sessions * pricePerSession;
                updateOrderDetails(sessions, cost);
            }
    
            return updatedFormData;
        });
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setObjectForm({...formData})
        console.log("Form Data:", formData);
        console.log("Phone 1:", phone1);
        console.log("Phone 2:", phone2);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group-input">
                    <h6 className="form-label" htmlFor="phone1">
                        Login phone number (preferably the student's)
                    </h6>
                    <PhoneInput
                        className="PhoneInputInput"
                        name="phone1"
                        value={phone1}
                        onChange={value=>{
                            setObjectForm({...objectForm,phone1:value})
                        }}
                    />
                </div>
                <div className="form-group-input">
                    <h6 className="form-label" htmlFor="phone2">
                        Login phone number (preferably the parent's)
                    </h6>
                    <PhoneInput
                        className="PhoneInputInput"
                        name="phone2"
                        value={phone2}
                        onChange={value=>{
                            setObjectForm({...objectForm,phone2:value})
                        }}
                    />
                </div>
                <div className="form-group-input">
                    <h6 className="form-label" htmlFor="email">
                        Contact Email address (preferably the parent's)
                    </h6>
                    <input
                        type="email"
                        className="form-input"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group-input">
                    <h6 className="form-label" htmlFor="name">
                        Name (preferably the parent's)
                    </h6>
                    <input
                        type="text"
                        className="form-input"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group-input">
                    <h6 className="form-label" htmlFor="name">
                        Billing Address
                    </h6>
                    <div className="address-one">
                        <input
                            className="form-input input-width"
                            name="address"
                            value={formData.address}
                            placeholder="Address"
                            type="text"
                            onChange={handleChange}
                        />
                        <input
                            className="form-input input-width-nr"
                            name="nr"
                            value={formData.nr}
                            placeholder="NR"
                            type="number"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="address-two">
                        <input
                            className="form-input inp-w"
                            name="postal"
                            value={formData.postal}
                            placeholder="Postal code"
                            type="text"
                            onChange={handleChange}
                        />
                        <input
                            className="form-input inp-w"
                            name="city"
                            value={formData.city}
                            placeholder="City"
                            type="text"
                            onChange={handleChange}
                        />
                        <select
                            className="form-input inp-w"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                        >
                            <option value="">Country:</option>
                            <option value="egypt">Egypt</option>
                            <option value="usa">USA</option>
                            <option value="ksa">KSA</option>
                        </select>
                    </div>
                </div>
                <div className="form-group-input">
                    <h6 className="form-label">Monthly sessions</h6>
                    <select
                        className="form-input"
                        name="session"
                        value={formData.session}
                        onChange={handleChange}
                    >
                        <option value="">Select monthly sessions</option>
                        {[...Array(8).keys()].map((num) => (
                            <option key={num + 1} value={num + 1}>
                                {num + 1} Session{num + 1 > 1 ? "s" : ""}
                            </option>
                        ))}
                    </select>
                </div>
                <PaymentMethod
                    paymentMethod={formData.paymentMethod}
                    onChange={handleChange}
                />


            </form>
        </>
    );
};

export default FormInput;
