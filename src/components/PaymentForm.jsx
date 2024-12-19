import React, { useState } from 'react';

const PaymentForm = ({ cardData, handleChange }) => (
    <>
        <input
            className='form-input card-holder my-3'
            placeholder='Card Holder'
            type='text'
            name='cardHolder'
            value={cardData.cardHolder}
            onChange={handleChange}
        />
        <div className='form-payment'>
            <input
                className='form-input card-number-group mb-3'
                placeholder='Card Number'
                type='text'
                pattern='\d*'
                maxLength={11}
                name='cardNumber'
                value={cardData.cardNumber}
                onChange={handleChange}
            />
            <input
                className='form-input pay'
                placeholder='MM'
                type='text'
                pattern='\d*'
                maxLength={2}
                name='mm'
                value={cardData.mm}
                onChange={handleChange}
            />
            <input
                className='form-input pay'
                placeholder='YY'
                type='text'
                pattern='\d*'
                maxLength={2}
                name='yy'
                value={cardData.yy}
                onChange={handleChange}
            />
            <input
                className='form-input pay'
                placeholder='CVV'
                type='text'
                pattern='\d*'
                maxLength={3}
                name='cvv'
                value={cardData.cvv}
                onChange={handleChange}
            />
        </div>
    </>
);
export default PaymentForm