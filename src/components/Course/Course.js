import React from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';

const Course = (props) => {
    const {name, price, image} = props.course;
    return (
        <CardGroup className="w-50 mx-auto mb-5">
        <Card className="p-5 text-center">
          <Card.Img className="w-50 mx-auto" variant="top" src={image} />
          <Card.Body className="mt-4">
            <Card.Title className="fw-bolder">{name}</Card.Title>
            <Card.Text className="fw-bolder">
              Price : ${price}
            </Card.Text>
          </Card.Body>
          <Button className="w-25 mx-auto text-white fw-bold" variant="primary">Enroll Now</Button>
        </Card>
      </CardGroup>
    );
};

export default Course;