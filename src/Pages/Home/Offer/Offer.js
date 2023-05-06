import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Offer = ({ course }) => {
    const { title, price,discount } = course;
    
    const dis=parseInt(discount)/100;
    const total=price-price*dis;
    console.log(dis);
    
    
    return (
        <Card className=' mx-auto mt-5 shadow-lg  mb-5 bg-body-tertiary rounded '>
           
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <p>Price <span className='text-warning fs-6 fw-semibold'><s>{price}</s></span> BDT</p>
                    <p>Discounted price <span className='text-warning fs-6 fw-semibold'>{total}</span> BDT</p>
                </Card.Text>
                <Link to={`/checkout/${course.course_id}`}><Button variant="primary">Get Premium Access</Button></Link>

            </Card.Body>
        </Card>
    );
};

export default Offer;