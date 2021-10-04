import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <h2 style={{color:"salmon"}}>Hero Programmers</h2>
                    <h6>IT sectors developed is our main goal. Our team members is very dedicated</h6>
                    <address>
                        <h6>3rd floor, Moti tower.</h6>
                        <h6>Chawkbazar, Chottogram</h6>
                        <h6>Call : +009664852</h6>
                    </address>
                </Col>
                <Col className="ms-5">
                <h4 style={{color:"salmon"}}>Keep Eyes on: </h4>
                <br />
                <h6> <i class="fab fa-facebook"></i> Facebook</h6>
                <h6> <i class="fab fa-instagram"></i> Instagram</h6>
                <h6> <i class="fab fa-linkedin"></i> LinkedIn</h6>
                </Col>
            </Row>
        </Container>
    );
};

export default About;