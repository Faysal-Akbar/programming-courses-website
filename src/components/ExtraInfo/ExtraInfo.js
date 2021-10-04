import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import img from '../../Professional-image-bg.png';

const ExtraInfo = () => {
    return (
        <Container>
            <div>
            <h2 className="text-center text-primary mt-4 mb-5">Founder and his Story</h2>
            <Row>
                <Col className="mb-5">
                <img style={{borderRadius:"45%"}} className="w-50" src={img} alt="" />
                </Col>
                <Col>
                <h2 style={{color:"salmon"}}>Mohammed Faysal Akbar</h2>
                <h5>CEO & Founder</h5>
                <h6>of <span style={{color:"salmon"}}>Hero Programmers</span></h6>
                <br />
                <p> <a href="https://www.linkedin.com/in/mohammed-faysal-414b8b1a0/">MD Faysal Akbar</a> is a man who curious for discover new things.He was born at Cox's Bazar in 1999s. He wants to do for well things for present generation. That why he create a team, who's goal to developed IT sectors for our Country.</p>
                <Button className="mx-auto text-white fw-bold" variant="primary">See more</Button>
                </Col>
            </Row>
        </div>
        </Container>
    );
};

export default ExtraInfo;