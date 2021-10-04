import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Course from '../Course/Course';
import img from '../../../src/main.jpg'

const Home = () => {
    const [courses, setCourses] = useState([]);

    useEffect(()=> {
        fetch('./tools.JSON')
        .then(response => response.json())
        .then(data => setCourses(data))
    }, [])
    return (
        <Container>
            <section>
            <section>
                <Row>
                    <Col>
                        <img className="w-100 my-5" src={img} alt="" />
                    </Col>
                    <Col className=" my-auto text-primary">
                        <h1>Let's Learn With <br />
                        <span style={{color:"salmon"}}>Hero Programmers</span>
                        </h1>
                        <p>Hero Programmers team is creating a fantastic Educational Environment. IT sectors development is their goal. You can Enroll there courses. It's fantastic and awesome.</p>
                    </Col>
                </Row>
            </section>
            <div>
                <h4 className="mb-4 text-primary text-center">Our Available Courses : {courses.length}</h4>
                <Row xs={1} md={2} className="g-4">
                    {
                        courses.map(course => <Course
                            key = {course.id}
                            course = {course} 
                        ></Course>)
                    } 
                </Row>
            </div>
        </section>
        </Container>
    );
};

export default Home;