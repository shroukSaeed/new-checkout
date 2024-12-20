import { useState } from 'react';
import './App.css';
import Heading from './components/Heading';
import FormInput from './components/FormInput';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import OrderOvervies from './components/OrderOvervies';

function App() {
    const [sessionCount, setSessionCount] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
    const [objectForm, setObjectForm] = useState({});


    const updateOrderDetails = (sessions, cost) => {
        setSessionCount(sessions);
        setTotalCost(cost);
    };

    return (
        <>
            <Container className='p-5'>
                <Row>
                    <Col lg={6} md={12}>
                        <Heading />
                        <FormInput objectForm={objectForm} setObjectForm={setObjectForm} updateOrderDetails={updateOrderDetails} />
                    </Col>
                    <Col lg={5} md={12}>
                        <OrderOvervies objectForm={objectForm} sessionCount={sessionCount} totalCost={totalCost} />
                        {/* <button onClick={e => console.log(objectForm)}>Ok</button> */}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
