import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    
    const { img, title, price,course_id } = course;
    return (
        <Card className='mt-5 mx-auto ' >
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <p>Price : {price} BDT</p>
                </Card.Text>
                <Link to={`/course/${course_id}`}><Button variant="primary">See Details</Button></Link>

            </Card.Body>
        </Card>
    );
};

export default Course;