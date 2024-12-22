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
    const [isSessionSelected, setIsSessionSelected] = useState(false);

    const handleSessionChange = (isSelected) => {
        setIsSessionSelected(isSelected);
      };


    const updateOrderDetails = (sessions, cost) => {
        setSessionCount(sessions);
        setTotalCost(cost);
    };

    return (
        <>
            <Container  className='custom'>
                <Row className='bg-w shade'>
                    <Col lg={7} md={12} className='p-5 bg-w'>
                        <Heading  />
                        <FormInput objectForm={objectForm} setObjectForm={setObjectForm}  updateOrderDetails={updateOrderDetails} onSessionChange={handleSessionChange} />
                    </Col>
                    <Col lg={5} md={12} className='p-0 overview-col' >
                        <OrderOvervies objectForm={objectForm} sessionCount={sessionCount} totalCost={totalCost} isSessionSelected={isSessionSelected}  />
                        {/* <button onClick={e => console.log(objectForm)}>Ok</button> */}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
