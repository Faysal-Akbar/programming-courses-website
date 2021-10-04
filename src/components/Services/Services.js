import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( ()=> {
        fetch('./moreTools.JSON')
        .then(response => response.json())
        .then(data => setServices(data))
    }, []);
    return (
        <Container>
            <div>
            <h2 className="mt-4 mb-5 text-center text-primary">Our All Courses</h2>
            <Row xs={1} md={3} className="g-4">
            {
                services.map(service => <Service
                key = {service.id}
                service = {service}
                ></Service>)
            }
            </Row>
        </div>
        </Container>
    );
};

export default Services;