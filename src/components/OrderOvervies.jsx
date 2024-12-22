import React, { useState } from 'react'
import CheckOut from './CheckOut'
import Switch from './Switch'


const OrderOvervies = ({ sessionCount, totalCost, objectForm }) => {
    const [month, setMonth] = useState(0);

    const numberOfMon = {6:'6 Months', 9:'9 Months', 12:'12 Months',18: '18 Months', 24:'24 Months',36: '36 Months'}
    return (
        <div className='p-5 overview'>
            <h5>Order Overview</h5>
            {/* عدد الشهور */}
            <div className='mon-block' >
            {
                Object.entries(numberOfMon).map(([key, p], ind) => (
                    <div
                        className='month'
                        key={ind}
                        onClick={e => setMonth(key)}
                    >
                        {p}
                    </div>
                ))
            }
            </div>

            {/* الدفع مقدما */}
            <Switch totalCost={totalCost} />
            {/* الفاتورة */}
            <CheckOut totalCost={totalCost} sessionCount={sessionCount} />

            <button className='order-btn' onClick={e => console.log(objectForm)}>Ok</button>

            {/* الموافقة على الشروط و الخصوصية */}
            <div className="accept d-flex align-items-baseline p-4 justify-content-between ">
                <input className='mt-3 mx-2' type="checkbox" name="" id="" />
                <p>I accept <a href="#">Terms & conditions</a> and understand my <a href="#"> right at withdrawal </a> as well as the circumstances that lead to repeal. </p>
            </div>

        </div>
    )
}

export default OrderOvervies
