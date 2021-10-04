import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';

const Service = (props) => {
    const {name, price, image, instructor, date} = props.service;
    return (   
        <CardGroup>
            <Col className="mb-5">
                <Card style={{height:"435px", textAlign:"center"}}>
                    <Card.Img className="w-75 mx-auto mt-2 mb-4" variant="top" src={image} />
                    <Card.Body>
                    <Card.Title className="fw-bolder text-primary">{name}</Card.Title>
                    <h5>Instructor : {instructor}</h5>
                    <h5>Price: ${price}</h5>
                    <Card.Text>Release Date : {date}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </CardGroup>
    );
};

export default Service;