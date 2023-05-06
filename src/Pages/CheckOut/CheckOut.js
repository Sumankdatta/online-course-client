import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AuthContext } from '../../context/AuthProvider';
import { Col, Container, Row } from 'react-bootstrap';


const CheckOut = () => {
    const {user}=useContext(AuthContext)
    const check = useLoaderData();
    console.log(check);
    return (
        <Container className='mx-auto'>
            <h1 className='text-center bg-warning p-4 rounded mt-5'>Congrats!! You Get Premium access</h1>
            <Row className='mt-3'>
                <Col lg='6' className=''>
                    <h3>Hello <span className='text-primary'>{user?.displayName}</span></h3>
                    <h4>
                        Thank you for Ordering the Course. Our Customer Service will give you the course as soon as possible.
                    </h4>
                    <Link to='/'><Button className='fw-semibold mt-3 mb-5' variant="outline-success">Back to Course</Button></Link>
                </Col>
                <Col lg='6' className=''>
                    <Card className='mx-auto'>
                        <Card.Img variant="top" src={check.img} />
                        <Card.Body>
                            <Card.Title>{check.title}</Card.Title>
                            <Card.Text>
                                {check?.details?.length > 50 ?
                                <>{check?.details.slice(0,50 )+ '...'}<Link to={`/course/${check.course_id}`}>Read more</Link></>
                                :
                                <>{check.details}</>
                                }
                            </Card.Text>
                           
                          
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CheckOut;