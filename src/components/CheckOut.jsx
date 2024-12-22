import React from 'react'

const CheckOut = ({ totalCost, sessionCount }) => {

    const pricePerSession = 28.00;
    const discountPercentage = 4;
    const setupFee = 0.00;
    const discount = (totalCost * discountPercentage) / 100;
    const totalAfterDiscount = totalCost - discount + setupFee;

    return (
        <div className="checkout">
            <h3>Checkout Summary</h3>
            <div className="price-details">
            
                <table className='table'>


                    <tr>
                        <td className='first-col'>Number of Sessions P.M.</td>
                        <td className='align' >{sessionCount}</td>

                    </tr>
                    <tr>
                        <td className='first-col'>Regular Price</td>
                        <td className='align' >${pricePerSession}</td>

                    </tr>
                    <tr>
                        <td className='first-col'>Your Price</td>
                        <td className='align' >${totalCost}</td>

                    </tr>
                    <tr>
                        <td className='first-col discount'>Discount ({discountPercentage}%)</td>
                        <td className='align discount' >-${discount}</td>

                    </tr>
                </table>
                <div className="line"></div>
                <table className='table'>


                    <tr>
                        <td className='first-col'>Setup Fee</td>
                        <td className='align text-primary'  >${setupFee}.00</td>

                    </tr>
                    <tr>
                        <td className='first-col total '>Total P.M.</td>
                        <td className='align total text-primary' >${totalAfterDiscount}</td>

                    </tr>



                </table>
            </div>
        </div>
    )
}

export default CheckOut
