import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function SwitchExample({ totalCost }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleSwitchChange = (e) => {
        setIsChecked(e.target.checked);
        if (e.target.checked) {
            console.log("Pay in advance selected!");
            console.log(totalCost * .05)
            console.log(totalCost - totalCost * .05)
        } else {
            console.log("Pay in advance deselected!");
        }
    };
    return (
        <Form>
            <Form.Check
                className='my-4'
                type="switch"
                id="custom-switch"
                label="Pay in advance - EXTRA 5% DISCOUNT"
                checked={isChecked}
                onChange={handleSwitchChange}
            />
        </Form>
    );
}

export default SwitchExample;