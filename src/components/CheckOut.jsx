import React from 'react'

const CheckOut = ({ totalCost, sessionCount }) => {

    const pricePerSession = 28;
    const discountPercentage = 4;
    const setupFee = 0;
    const discount = (totalCost * discountPercentage) / 100;
    const totalAfterDiscount = totalCost - discount + setupFee;

    return (
        <div className="checkout">
            <h3>Checkout Summary</h3>
            <div className="price-details">
                <p>
                    Number of Sessions: {sessionCount}
                </p>
                <p>
                    Regular Price: ${pricePerSession} per session
                </p>
                <p>
                    Total Before Discount: ${totalCost}
                </p>
                <p className='text-success'>
                    Discount ({discountPercentage}%): -${discount}
                </p>
                <p>
                    Setup Fee: ${setupFee}
                </p>
                <h4>
                    Total After Discount: ${totalAfterDiscount}
                </h4>
            </div>
        </div>
    )
}

export default CheckOut
