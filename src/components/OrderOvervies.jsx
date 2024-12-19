import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CheckOut from './CheckOut'
import OrderNow from './OrderNow'

const OrderOvervies = ({ sessionCount, totalCost }) => {

    const numberOfMon = ['6Mon', '9Mon', '12Mon', '18Mon', '24Mon', '36Mon']
    return (
        <div className='p-3 overview'>
            <h5>Order Overview</h5>
            {/* عدد الشهور */}
            <div className='mon-block' >
                {
                    numberOfMon.map((p, ind) => (
                        <div className='month' key={ind} >
                            {p}
                        </div>
                    ))
                }
            </div>

            {/* الدفع مقدما */}

            {/* الفاتورة */}
            <CheckOut totalCost={totalCost} sessionCount={sessionCount} />


            {/* الموافقة على الشروط و الخصوصية */}
            <div className="accept d-flex align-items-baseline p-4 justify-content-between ">
                <input className='mt-3 mx-2' type="checkbox" name="" id="" />
                <p>I accept <a href="#">Terms & conditions</a> and understand my <a href="#"> right at withdrawal </a> as well as the circumstances that lead to repeal. </p>
            </div>

        </div>
    )
}

export default OrderOvervies
